import React, { useState } from 'react';
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
import { Alert, Modal } from 'react-bootstrap';


function FormGroup(props) {
  const {register} = useFormContext();
  let finalValue = '';
  if (props.id === 'balance'){
    if (props.content === null){
      finalValue = 0;
    } else {
      finalValue = props.content;
    }
  } else {
    finalValue = props.content;
  }
  return (
    <Form.Group as={Col} controlId={props.id}>
      <Form.Label><b>{props.name}</b></Form.Label>
      <Form.Control {...register(props.id)} defaultValue={finalValue} type={props.type} placeholder={props.ph} required/>
    </Form.Group>
  )
}


function AddEditCustomer() {
  const methods = useForm();
  const {register, handleSubmit} = methods;
  const params = useParams();
  const customerID = params.id;
  const viewType = params.mode;
  const [error, setError] = useState(<></>);
  const [showError, setShowError] = useState(false);
  const history = useNavigate();

  //submitting data
  const onSubmit = (data) => {
    data.id = customerID;
    data.balance = data.balance === '0' ? null : data.balance;

    let operation = '';
    let request = '';
    
    if (viewType === 'Edit'){
      operation = 'edit';
      request = 'put'
    } else if (viewType === 'Add'){
      operation = 'make';
      request = 'post';
    }

    axios({
      method: request,
      url: `http://localhost:8000/api/${operation}Customer`,
      data: data
    })
    .then(res => {
      console.log(res.data);
      if (!(res.data.hasOwnProperty('errors'))){
          history('/customers');
      } else {
        let errors = <></>;
        errors = 
        <>
          {
           <Alert varient='error'> {res.data.errors} </Alert>

          }
        </>
        setError(errors);
        setShowError(true);
      }
    })
  }

  //customer Query
  const customerQuery = useQuery({
    enabled: viewType === 'Edit',
    queryKey: ['customerQuery'],
    queryFn: async () => {
      return axios.get(`http://localhost:8000/api/getCustomer?customerID=${customerID}`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
    }
  })

  if (customerQuery.isFetching || customerQuery.isRefetching)
  return (<h1 className='page-title my-5'>Loading Customer data</h1>)
  
  else if (customerQuery.isError)
  return <h1 className='page-title my-5'>Customer data cannot be fetched</h1>

  return (
    <>  
        <Container>
        <h1 className='page-title my-5'>{params.mode} customer</h1>

        {/* For the Error results */}
        <Modal show={showError} onHide={() => setShowError(false)}>
          <Modal.Header closeButton onClick={() => setShowError(false)}>
            <Modal.Title>Errors</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              {error}
            </Modal.Body>
        </Modal>

        <div className='form-style'>
          <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className='mb-4 gx-5'>
              <FormGroup 
                name = "Name"
                id = "name"
                type = "text"
                content = {viewType === 'Edit' ? customerQuery?.data?.name : ''}
              />
              <FormGroup 
                name = "ID Number"
                id = "idNumber"
                type = "number"
                content = {viewType === 'Edit' ? customerQuery?.data?.idNumber : ''}
              />
          </Row>
          <Row className='mb-4 gx-5'>
              <FormGroup 
                name = "Email"
                id = "email"
                type = "email"
                ph = "@obf.ateneo.edu or @ateneo.edu"
                content = {viewType === 'Edit' ? customerQuery?.data?.email : ''}

              />
              <FormGroup 
                name = "Contact Number"
                id = "contactNumber"
                type = "number"
                content = {viewType === 'Edit' ? customerQuery?.data?.contactNumber : ''}

              />
          </Row>
          <Row className='mb-4 gx-5'>
              <Form.Group as={Col} controlId="classification">
                <Form.Label><b>Classification</b></Form.Label>
                 <Form.Select {...register('classification')} defaultValue={customerQuery?.data?.classification}>
                  <option value={'Student'}>Student</option>
                  <option value={'Professor'}>Professor</option>
                  <option value={'Personnel'}>Personnel</option>
                </Form.Select>
              </Form.Group>

              {viewType === 'Edit' ? (<FormGroup 
                name = "Balance"
                id = "balance"
                type = "number"
                content = {viewType === 'Edit' ? customerQuery?.data?.balance : ''}
              />) : (<></>)}
          </Row>
          <div className='d-flex justify-content-end'>
              <Link to='/customers' className='btn btn-secondary m-1 px-3 rounded-4'>
                <i className='bi-arrow-left me-1'></i>
                Back
                </Link>
              <Button type='submit' className='btn-view m-1 px-3 rounded-4'>
                Submit
                </Button>
          </div>         
        </Form>
        </FormProvider>

        </div>

            
        </Container>
    
    </>
  )
}

export default AddEditCustomer;
