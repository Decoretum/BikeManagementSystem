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
      {
        props.viewType === 'View' ? (
          <Form.Control defaultValue={props.content} type={props.type} placeholder="" />
          ) : props.viewType === 'Edit' (
            <Form.Control defaultValue={props.content} type={props.type} placeholder="" required/>
            )
      }
    </Form.Group>
  )
}

function AddEditBike() {
  const params = useParams();
  const bikeID = params.id;
  const viewType = params.mode;

  //if ()

  return (
    <>  
        <Container className='open-sans'>
        <h1 className='page-title my-5'>{params.mode} bike</h1>

        <div className='form-style'>
          <Form>
            <Row className='mb-4 gx-5'>
              <FormGroup 
                name = "Name"
                id = "name"
                type = "text"
                content = ''
                viewType = {viewType}
              />
              <FormGroup 
                name = "Stock"
                id = "stock"
                type = "number"
                content = ''
                viewType = {viewType}
              />
            </Row>
            <Row className='mb-4 gx-5'>
              <FormGroup 
                name = "Description"
                id = "description"
                type = "text"
                content = ''
                viewType = {viewType}
              />
              <FormGroup 
                name = "Colors"
                id = "colors"
                type = "text"
                content = ''
                viewType = {viewType}
              />
          
            </Row>
            <Row className='mb-4 gx-5'>
              <FormGroup 
                name = "Price"
                id = "price"
                type = "number"
                content = ''
                viewType = {viewType}
              />
              <FormGroup 
                name = "Wheel Size"
                id = "wheelSize"
                type = "text"
                content = ''
                viewType = {viewType}
              />
              <FormGroup 
                name = "Categories"
                id = "categories"
                type = "text"
                content = ''
                viewType = {viewType}
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
