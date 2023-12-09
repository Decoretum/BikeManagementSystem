import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { Alert } from 'react-bootstrap';



function AddEditRental() {
  const params = useParams();
  const viewType = params.mode;
  const rentID = params.id;
  const methods = useForm();
  const {register, handleSubmit} = methods; 
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post('http://localhost:8000/api/rentBike', data)
    .then((res) => {
      if (res.data.result === 'Success!')
      navigate('/rentals');
    })

  }

  const FormGroup = (props) => {
    const {register} = useFormContext();
    let isView = viewType === 'View';
    return (
      <Form.Group as={Col} controlId={props.id}>
        <Form.Label className='mt-4'><b>{props.name}</b></Form.Label>
        {
          isView ? (
            <Form.Control readOnly defaultValue={props.content} type={props.type} placeholder={props.ph}/>
            ) : (
              <Form.Control {...register(props.id)} defaultValue={props.content} type={props.type} placeholder={props.ph} required/>
              )
        }
      </Form.Group>
    )
  }

  const rentQuery = useQuery({
    enabled: viewType === 'View',
    queryKey: ['rentQuery'],
    queryFn: async () => {
      return axios.get(`http://localhost:8000/api/getRental?rentID=${rentID}`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
    }
  })

  const bikesQuery = useQuery({
    enabled: viewType === 'Add',
    queryKey: ['bikesQuery'],
    queryFn: async () => {
      return axios.get(`http://localhost:8000/api/getBikesAvailable`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
    }
  })

  const customerQuery = useQuery({
    enabled: viewType === 'Add',
    queryKey: ['custQuery'],
    queryFn: async () => {
      return axios.get(`http://localhost:8000/api/getAllCustomerNames`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
    }
  })

  if ((rentQuery.isFetching || rentQuery.isRefetching) || (customerQuery.isFetching || customerQuery.isRefetching) || (bikesQuery.isFetching || bikesQuery.isRefetching))
  return (<h1 className='page-title my-5'>Loading Bike Rental data</h1>)

  if (rentQuery.isError || customerQuery.isError || bikesQuery.isError)
  return (<h1 className='page-title my-5'>Failure to load Bike Rental data</h1>)
  
  return (
    <>  
        <Container>
          {}
        <h1 className='page-title my-5'>{params.mode} bike rental</h1>

        <div className='w-50 mx-auto'>
        <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
            {viewType === 'View' ? (
            <>
              <Row className='mb-2'>
                <FormGroup 
                  name = "Bike Name"
                  id = "bikeName"
                  type = "text"
                  content = {viewType === 'Edit' || viewType === 'View' ? rentQuery?.data?.bike?.name : ''}

                />
              </Row>
              <Row className='mt-2'>
                <FormGroup 
                  name = "Customer Name"
                  id = "customer"
                  type = "text"
                  content = {viewType === 'Edit' || viewType === 'View' ? rentQuery?.data?.customer?.name : ''}
                />
              </Row>
              </> ) : (
                <>
                  <Form.Group as={Col} controlId="classification">
                  <Form.Label><b>Select a Bike</b></Form.Label>
                  <Form.Select {...register('bikeName')} defaultValue={bikesQuery?.data[0]}>
                    {
                      bikesQuery?.data?.map((bike) => {
                        return <option value={bike}>{bike}</option>

                      })
                    }
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="classification" className='mt-3'>
                  <Form.Label><b>Select a Customer</b></Form.Label>
                  <Form.Select {...register('customerName')} defaultValue={customerQuery?.data[0]}>
                  {
                      customerQuery?.data?.map((cust) => {
                        return <option value={cust}>{cust}</option>

                      })
                    }
                  </Form.Select>
                </Form.Group>
              </>
              )}
            
            <Row className='mb-1'>
              {
                viewType !== 'Add' ? (
                  <FormGroup 
                  name = "Date Rented"
                  id = "dateRented"
                  type = {viewType !== 'Add' ? 'text' : 'date'}
                  content = {rentQuery?.data?.dateRented}
                />
                ) : (<></>)
              }

            </Row>
            <Row className='mb-1'>
              <FormGroup 
                name = "Rent Duration (in days)"
                id = "days"
                type = "number"
                content = {viewType === 'Edit' || viewType === 'View' ? rentQuery?.data?.rentalDuration : ''}
              />
            </Row>

            <div className='d-flex justify-content-end'>
              <Link to='/rentals' className='btn btn-secondary m-1 px-3 rounded-4'>
                <i className='bi-arrow-left me-1'></i>
                Back
                </Link>
                {
                  viewType === 'Add' || viewType === 'Edit' ? (
                    <Button type='submit' className='btn-view m-1 px-3 rounded-4'>
                      Submit
                    </Button>
                    ) : (<></>)
                }
                
          </div>
           
            
        </Form>
        </FormProvider>
        </div>
            
        </Container>
    
    </>
  )
}

export default AddEditRental;
