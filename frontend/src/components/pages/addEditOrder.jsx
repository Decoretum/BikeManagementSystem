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
import { Dropdown, Modal } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';


const currentDate = moment().utcOffset('+08:00').format('MM/DD/YYYY');



function AddOrder() {
  const params = useParams();
  const viewType = params.mode;
  const orderID = params.id;
  const history = useNavigate();
  console.log(params.mode);

  const methods = useForm();
  const {handleSubmit, register, errors} = methods;

  const [customerName, setCustomerName] = useState('Customer Name');
  const [orderEntries, setOrderEntries] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');

  const FormGroup = (props) => {
    const {register} = useFormContext();
    let finalValue = props.content;
    if (props.id === 'totalcost') {
      finalValue = Number(props.content).toFixed(2)
    } 
    console.log(finalValue);
    return (
      <Form.Group as={Col} controlId={props.id}>
        <Form.Label><b>{props.name}</b></Form.Label>
        {
          props.id === 'description' ? (
            <Form.Control as='textarea' style={{minHeight: '30vh' }} {...register(`${props.id}`)} defaultValue={finalValue} type={props.type} placeholder={props.name} required/>
          ) : props.id === 'dateOfPurchase' ? (
            <Form.Control defaultValue={currentDate} value={currentDate} type={'text'} placeholder={props.name} readOnly />
            ) : (
            <Form.Control {...register(`${props.id}`)} defaultValue={finalValue} value={finalValue} type={'number'} placeholder={props.name} readOnly />
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
        if (res.data.customer === null){
          setCustomerName('No Customer')
        } else {
          setCustomerName(res.data.customer.name);
        }
        
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
    data.description = data.description.trim();
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
        if (res.data.result === 'Choose a valid Customer'){
          setShow(true);
          setName(res.data.result);
          return;
        }
        history('/orders')
    })

  }
  
  if ((orderQuery?.isFetching || orderQuery?.isRefetching) && !orderQuery?.isError)
  {
    return (
      <h3 className='m-4'>Loading Order Data</h3>
      )
  }

  if (orderQuery?.isError){
    return(
      <h3 className='m-4'>Error Fetching Order Data</h3>
    )
  }
  
  return (
    <>  
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Order Confirmation</Modal.Title>
            </Modal.Header>
              <Modal.Body> {name} </Modal.Body>
          </Modal>
        <Container>
        <h1 className='page-title my-5'>{params.mode === 'Edit' && orderQuery?.data?.finished === false ? 'Edit' : params.mode === 'add' ? 'Create' : 'View'} order</h1>

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
                    (params.mode === 'Edit' && orderQuery?.data?.finished === false) || (params.mode === 'add') ? (
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
            {
              orderQuery?.data?.finished === false ? (
            <div className='d-flex justify-content-between mt-5'>
              <h3 className='page-title my-4'>{ orderQuery?.data?.orderEntries?.length >= 1 ? 'Bike orders' : 'No Bike Orders'}</h3>
              <div className='d-flex align-items-center'>
                <Link to={`/orders/bike-order/${orderQuery?.data?.id}/Add`} className='btn btn-md btn-main'>
                    <i className='me-1 bi-plus-lg'></i>
                    Add bike order
                </Link>
              </div>
            </div>
              ) : (
              <>
                <h3 className='page-title my-4'>{ orderQuery?.data?.orderEntries?.length >= 1 ? 'Bike orders' : 'No Bike Orders'}</h3>
              </>
              )
            }
            

        
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
                  {
                    orderQuery?.data?.finished === false ? (
                      <td>
                    <div className='d-flex'>
                      
                        <Link onClick={() => deleteOrder(bikeOrder.id, bikeOrder.cost)} className='d-flex btn btn-danger m-1 rounded-4'>Delete</Link>
                      </div>
                  </td>
                    ) : (
                      <></>
                    )
                  }
                  
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
