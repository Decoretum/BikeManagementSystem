import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from "moment";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';


const currentDate = moment().utcOffset('+08:00').format('MM/DD/YYYY');

function FormGroup(props) {
  const {register} = useFormContext();
  let finalValue = props.content;

  if (props.id === 'dateOfPurchases'){
    finalValue = moment(props.content).format('YYYY-MM-DD').toString();
  } else {
    finalValue = props.content;
  }
  console.log(props.content + props.id);

  return (
    <Form.Group as={Col} controlId={props.id}>
      <Form.Label><b>{props.name}</b></Form.Label>
      {
        props.id === 'description' ? (
          <Form.Control as={'textarea'} style={{minHeight: '10em' }} {...register(`${props.id}`)} defaultValue={finalValue} type={props.type} placeholder={props.name} required/>
        ) : props.id === 'dateOfPurchase' ? (
          <Form.Control {...register(`${props.id}`)} defaultValue={finalValue} type={'text'} placeholder={props.name} readOnly />
          ) : (
          <Form.Control {...register(`${props.id}`)} defaultValue={finalValue} type={props.type} placeholder={props.name} readOnly />
          )
      }
    </Form.Group>
  )
}



function AddOrder() {
  const params = useParams();
  const viewType = params.mode;
  const orderID = params.id;
  const history = useNavigate();

  const methods = useForm();
  const {handleSubmit, register, errors} = methods;

  const [customerName, setCustomerName] = useState('Customer Name');
  const [error, setError] = useState(<></>);
  const [showError, setShowError] = useState(false);

  //Customer query
  const customerQuery = useQuery({
    enabled: viewType !== 'View',
    queryKey: ['customer'],
    queryFn: async () => {
      return axios.get('http://localhost:8000/api/getAllCustomer')
      .then((res) => {
        console.log(res.data);
        return res.data})
    }
  })

  //Order Query
  const orderQuery = useQuery({
    enabled: viewType === 'Edit',
    queryKey: ['order'],
    queryFn: async () => {
      return axios.get(`http://localhost:8000/api/getOrder?orderUUID=${orderID}`)
      .then((res) => {
        console.log(res.data);
        setCustomerName(res.data.customer.name);
        return res.data;
      })
    }
  })

  
  //Submitting data
  const onSubmit = (data) => {
    data.customerName = customerName;
    data.uuid = orderQuery?.data?.uuid;
    console.log(data)

    let request = '';
    let operation = '';
    
    if (viewType === 'Add'){
      request = 'post';
      operation = 'make'
    } else {
      request = 'put';
      operation = 'edit';
    }
    
    axios({
      method: request,
      url: `http://localhost:8000/api/${operation}AnOrder`,
      data: data
    })
      .then((res) => {
        console.log(res.data);
        history('/orders')
    })

  }
  
  return (
    <>  
        <Container>
        <h1 className='page-title my-5'>{params.mode} order</h1>

        <div className='form-style'>
        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className='mb-4 gx-5'>
                  <FormGroup 
                    name = "Date of Purchase"
                    id = "dateOfPurchase"
                    type = "date"
                    content = {viewType === 'Add' ? currentDate : orderQuery?.data?.dateOfPurchase}
                  />
            </Row>
            <Row className='mb-4 gx-5'>

              <FormGroup 
                name = "Description"
                id = "description"
                type = "text"
                content = {viewType === 'Add' ? '' : orderQuery?.data?.description}
              />
                
                {/* Total cost Must show in Edit Order only */}
                {
                  viewType === 'Edit' ? (
                    <FormGroup 
                      name = "Total Cost"
                      id = "totalcost"
                      type = "number"
                      content = {viewType === 'Add' ? 0 : orderQuery?.data?.totalcost}
                    />
                  ) : (<></>)
                }

                {/* Customer Dropdown */}
              <p className='page-title' style={{marginTop: '2em'}}> Customer Name </p>
              <Dropdown className='mt-1'> 
                <Dropdown.Toggle variant='success'>
                  {customerName}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {
                    customerQuery?.data?.map((customer) => {
                    return <Dropdown.Item onClick={(e) => {
                      setCustomerName(e.target.innerHTML);
                        }
                      }
                    > 
                      {customer.name}
                      </Dropdown.Item>
                    })
                  }
                </Dropdown.Menu>
              </Dropdown>
            </Row>
            <div className='d-flex justify-content-end'>
                <Link to='/orders' className='btn btn-secondary m-1 px-3 rounded-4 mt-4'>
                  <i className='bi-arrow-left me-1'></i>
                  Back
                  </Link>
                  {
                    params.mode === 'Edit' || params.mode === 'Add' ? (
                      <Button type='submit' className='btn-view m-1 px-3 rounded-4 mt-4'>
                        Submit
                      </Button>
                    ) : (<></>)
                  }
            </div>  
          </Form>
        </FormProvider>
        
        {/* Bike order entries */}
        {
          viewType === 'Edit' ? (
            <>
            <div className='d-flex justify-content-between'>
              <h3 className='page-title my-4'>{ orderQuery?.data?.orderEntries?.length >= 1 ? 'Bike orders' : 'No Bike Orders'}</h3>
              <div className='d-flex align-items-center'>
                <Link to={`/orders/bike-order/${orderQuery?.data?.uuid}/Add`} className='btn btn-md btn-main'>
                    <i className='me-1 bi-plus-lg'></i>
                    Add bike order
                </Link>
            </div>
            </div>

        
       { orderQuery?.data?.orderEntries?.length >= 1 ? (
       <Table className='open-sans' hover>
          <thead>
            <tr className='inter'>
              <th></th>
              <th>Bike Name</th>
              <th>Quantity</th>
              <th>Cost</th>
              <th>Bike Color</th>
              <th></th>
            </tr>
            
          </thead>

          <tbody>

            {
              orderQuery?.data?.orderEntries?.map((bikeOrder) => {
                return <tr>
                  <td>{bikeOrder.id}</td>
                  <td>{bikeOrder.bikeName}</td>
                  <td>{bikeOrder.quantity}</td>
                  <td>{bikeOrder.cost}</td>
                  <td>{bikeOrder.bike_color}</td>
                  <td>
                    <div className='d-flex'>
                      {/* Replace 0 with ${border.id} */}
                        <Link to={`/orders/bike-order/bo/delete/0`} className='d-flex btn btn-danger m-1 rounded-4'>Delete</Link>
                      </div>
                  </td>
                </tr>
              })
            
            }

          </tbody>
        </Table>
        ) : (<></>)
        }
        </>
          ) : (<></>)
        }
        
        
    

        </div>
            
        </Container>
    
    </>
  )
}

export default AddOrder;
