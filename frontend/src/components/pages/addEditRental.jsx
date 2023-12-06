import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useParams } from 'react-router-dom';

function BreadcrumbBar() {
  const params = useParams();
  return (
    <Breadcrumb className='mt-4'>
        <Link to="/rentals" className="breadcrumb-item">Rentals</Link>
        <Link to="#" className="breadcrumb-item active">{params.mode} rental</Link>
    </Breadcrumb>
  );
}

function FormGroup(props) {
  return (
    <Form.Group as={Col} controlId={props.id}>
      <Form.Label className="inter"><b>{props.name}</b></Form.Label>
      <Form.Control type={props.type} placeholder={props.ph} required/>
    </Form.Group>
  )
}


function AddEditRental() {
  const params = useParams();

  return (
    <>  
        <Container>
        <BreadcrumbBar />
        <h1 className='page-title mt-1 mb-5'>{params.mode} bike rental</h1>

        <div className='w-50 mx-auto'>
        <Form>
            <Row className='mb-4'>
              <FormGroup 
                name = "Bike Name"
                id = "bikeName"
                type = "text"
              />
            </Row>
            <Row className='mb-4'>
              <FormGroup 
                name = "Customer Name"
                id = "customer"
                type = "text"
              />
            </Row>
            <Row className='mb-4'>
              <FormGroup 
                name = "Rent Duration"
                id = "days"
                type = "number"
              />
            </Row>

            <div className='d-flex justify-content-end'>
              <Link to='/rentals' className='btn btn-secondary m-1 px-3 rounded-4'>
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

export default AddEditRental;
