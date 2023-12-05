import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';


function FormGroup(props) {
  return (
    <Form.Group as={Col} controlId={props.id}>
      <Form.Label><b>{props.name}</b></Form.Label>
      <Form.Control type={props.type} placeholder={props.ph} required/>
    </Form.Group>
  )
}


function AddEditCustomer() {
  const params = useParams();
  

  return (
    <>  
        <Container>
        <h1 className='page-title my-5'>{params.mode} customer</h1>

        <div className='form-style'>
        <Form>
          <Row className='mb-4 gx-5'>
              <FormGroup 
                name = "Name"
                id = "name"
                type = "text"
              />
              <FormGroup 
                name = "ID Number"
                id = "idNumber"
                type = "number"
              />
          </Row>
          <Row className='mb-4 gx-5'>
              <FormGroup 
                name = "Email"
                id = "email"
                type = "email"
                ph = "@obf.ateneo.edu or @ateneo.edu"
              />
              <FormGroup 
                name = "Contact Number"
                id = "contactNumber"
                type = "number"
              />
          </Row>
          <Row className='mb-4 gx-5'>
              <Form.Group as={Col} controlId="classification">
                <Form.Label><b>Classification</b></Form.Label>
                <Form.Select defaultValue="Student">
                  <option value={'Student'}>Student</option>
                  <option value={'Professor'}>Professor</option>
                  <option value={'Personnel'}>Personnel</option>
                </Form.Select>
              </Form.Group>

              <FormGroup 
                name = "Balance"
                id = "balance"
                type = "number"
              />
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

        </div>

            
        </Container>
    
    </>
  )
}

export default AddEditCustomer;
