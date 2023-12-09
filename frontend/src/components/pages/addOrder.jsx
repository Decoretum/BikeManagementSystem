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



function AddOrder() {
  const params = useParams();
  const viewType = params.mode;
  const orderID = params.id;
  const history = useNavigate();

  const methods = useForm();
  const {handleSubmit, register, errors} = methods;

  const [customerName, setCustomerName] = useState('Customer Name');
  const [orderEntries, setOrderEntries] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const FormGroup = (props) => {
    const {register} = useFormContext();
    let finalValue = props.content;
    console.log(viewType);
    console.log(props)
    if (props.id === 'totalcost') {
      finalValue = Number(props.content).toFixed(2)
    }
    console.log(finalValue);
    return (
      <Form.Group as={Col} controlId={props.id}>
        <Form.Label><b>{props.name}</b></Form.Label>
        {
          props.id === 'description' && (viewType === 'Edit' || viewType === 'add') ? (
            <Form.Control as='textarea' style={{minHeight: '30vh' }} {...register(`${props.id}`)} defaultValue={finalValue} type={props.type} placeholder={props.name} required/>
          ) : props.id === 'dateOfPurchase' ? (
            <Form.Control defaultValue={currentDate} value={currentDate} type={'text'} placeholder={props.name} readOnly />
            ) : (
            <Form.Control {...register(`${props.id}`)} defaultValue={finalValue} value={finalValue} type={props.type} placeholder={props.name} readOnly />
            )
        }
      </Form.Group>
    )
  }
  

  //Customer query
  const customerQuery = useQuery({
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
      return axios.get(`http://localhost:8000/api/getOrder?orderID=${orderID}`)
      .then((res) => {
        console.log(res.data);
        setCustomerName(res.data.customer.name);
        setOrderEntries(res.data.orderEntries);
        setTotalCost(res.data.totalcost);
        return res.data;
      })
    }
  })

  //Deleting a Bike Order
  const deleteOrder = (bikeOrderID, bikeOrderCost) => {
    axios.delete(`http://localhost:8000/api/removeBikeOrder?bikeOrderId=${bikeOrderID}`)
    
    let newArray = orderEntries.filter((entry) => entry.id !== bikeOrderID);
    let newCost = (totalCost - bikeOrderCost).toFixed(2);
    setOrderEntries(newArray);
    setTotalCost(newCost);
  }

  
  //Submitting data
  const onSubmit = (data) => {
    data.customerName = customerName;
    data.uuid = orderQuery?.data?.uuid;
    console.log(data)

    let request = '';
    let operation = '';
    
    if (viewType === 'add'){
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
        <h1 className='page-title my-5'>{params.mode === 'Edit' && orderQuery?.data?.finished === false ? 'Edit' : 'View'} order</h1>

        <div className='form-style'>
        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className='mb-4 gx-5'>
                  <FormGroup 
                    name = "Date of Purchase"
                    id = "dateOfPurchase"
                    type = "date"
                    content = {viewType === 'add' ? currentDate : orderQuery?.data?.dateOfPurchase}
                  />
            </Row>
            <Row className='mb-4 gx-5'>

              <FormGroup 
                name = "Description"
                id = "description"
                type = "text"
                editable = {orderQuery?.data?.finished === true ? false : false}
                content = {viewType === 'add' ? '' : orderQuery?.data?.description}
              />
                
                {/* Total cost Must show in Edit Order only */}
                {
                  viewType === 'Edit' ? (
                    <FormGroup 
                      name = "Total Cost"
                      id = "totalcost"
                      type = "number"
                      content = {viewType === 'add' ? 0 : totalCost}
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
                    (params.mode === 'Edit' || params.mode === 'add') || (viewType === 'Edit' && orderQuery?.data?.finished === false) || (viewType === 'add') ? (
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
                <Link to={`/orders/bike-order/${orderQuery?.data?.id}/Add`} className='btn btn-md btn-main'>
                    <i className='me-1 bi-plus-lg'></i>
                    Add bike order
                </Link>
            </div>
            </div>

        
       { orderEntries.length >= 1 ? (
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
              orderEntries.map((bikeOrder) => {
                return <tr>
                  <td>{bikeOrder.id}</td>
                  <td>{bikeOrder.bikeName}</td>
                  <td>{bikeOrder.quantity}</td>
                  <td>{bikeOrder.cost}</td>
                  <td>{bikeOrder.bike_color}</td>
                  <td>
                    <div className='d-flex'>
                      {/* Replace 0 with ${border.id} */}
                        <Link onClick={() => deleteOrder(bikeOrder.id, bikeOrder.cost)} className='d-flex btn btn-danger m-1 rounded-4'>Delete</Link>
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
