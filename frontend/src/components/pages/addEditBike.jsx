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
        <Link to="/bikes" className="breadcrumb-item">Bikes</Link>
        <Link to="#" className="breadcrumb-item active">{params.mode} bike</Link>
    </Breadcrumb>
  );
}

function FormGroup(props) {
  return (
    <Form.Group as={Col} controlId={props.id}>
      <Form.Label><b>{props.name}</b></Form.Label>
      <Form.Control type={props.type} placeholder="" required/>
    </Form.Group>
  )
}

function AddEditBike() {
  const params = useParams();
  
  return (
    <>  

        <Container className='open-sans'>
          <BreadcrumbBar />
        <h1 className='page-title mt-1 mb-5'>{params.mode} bike</h1>

        <div className='form-style'>
          <Form>
            <Row className='mb-4 gx-5'>
              <FormGroup 
                name = "Name"
                id = "name"
                type = "text"
              />
              <FormGroup 
                name = "Stock"
                id = "stock"
                type = "number"
              />
            </Row>
            <Row className='mb-4 gx-5'>
              <FormGroup 
                name = "Description"
                id = "description"
                type = "text"
              />
              <FormGroup 
                name = "Colors"
                id = "colors"
                type = "text"
              />
          
            </Row>
            <Row className='mb-4 gx-5'>
              <FormGroup 
                name = "Price"
                id = "price"
                type = "number"
              />
              <FormGroup 
                name = "Wheel Size"
                id = "wheelSize"
                type = "text"
              />
              <FormGroup 
                name = "Categories"
                id = "categories"
                type = "text"
              />
            </Row>
            <div className='d-flex justify-content-end'>
              <Link to='/bikes' className='btn btn-secondary m-1 px-3 rounded-4'>
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

export default AddEditBike;
