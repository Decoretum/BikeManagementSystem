import React from 'react';
import { Link } from 'react-router-dom';
import moment from "moment";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useParams } from 'react-router-dom';

const currentDate = moment().utcOffset('+08:00').format('MM/DD/YYYY');

function BreadcrumbBar() {
  const params = useParams();
  return (
    <Breadcrumb className='mt-4'>
        <Link to="/appointments" className="breadcrumb-item">Appointments</Link>
        <Link to="#" className="breadcrumb-item active">{params.mode} appointment</Link>
    </Breadcrumb>
  );
}

function FormGroup(props) {
  return (
    <Form.Group as={Col} controlId={props.id}>
      <Form.Label><b>{props.name}</b></Form.Label>
      <Form.Control type={props.type} placeholder={props.ph} value={props.value} required/>
    </Form.Group>
  )
}


function AddEditAppointment() {
  const params = useParams();

  return (
    <>  
    <Container>
    <BreadcrumbBar />
    <h1 className='page-title mt-1 mb-5'>{params.mode} appointment</h1>

    <div className='form-style'>
      <Row className='mb-4 gx-5'>
        <FormGroup 
          name = "Customer Name"
          id = "customerName"
          type = "text"
        />
        <FormGroup 
          name = "Category"
          id = "category"
          type = "text"
        />
      </Row>
      <Row className='mb-4 gx-5'>
        <FormGroup 
          name = "Bike Name"
          id = "bikeName"
          type = "text"
        />
        <FormGroup 
          name = "Name"
          id = "name"
          type = "text"
        />
      </Row>
      <Row className='mb-4 gx-5'>
        <FormGroup 
          name = "Description"
          id = "description"
          type = "text"
        />
        <FormGroup 
          name = "Appointment Date"
          id = "dateTimeAppointed"
          type = "date"
        />
        <FormGroup 
          name = "Cost"
          id = "cost"
          type = "number"
        />
      </Row>
      <div className='d-flex justify-content-end'>
          <Link to='/appointments' className='btn btn-secondary m-1 px-3 rounded-4'>
            <i className='bi-arrow-left me-1'></i>
            Back
            </Link>
          <Button type='submit' className='btn-view m-1 px-3 rounded-4'>
            Submit
            </Button>
          
      </div>
    </div>

    </Container>

    </>
  )
}

export default AddEditAppointment;
