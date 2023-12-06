import React from 'react';
import { Link } from 'react-router-dom';
import moment from "moment";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';


const currentDate = moment().utcOffset('+08:00').format('MM/DD/YYYY hh:mm:ss a');

function FormGroup(props) {
  return (
    <Form.Group as={Col} controlId={props.id}>
      <Form.Label><b>{props.name}</b></Form.Label>
      <Form.Control type={props.type} placeholder="" value={props.value} required/>
    </Form.Group>
  )
}


function AddOrder() {
  const params = useParams();
  
  return (
    <>  
        <Container>
        <h1 className='page-title my-5'>{params.mode} order</h1>

        <div className='form-style'>
        <Form>
          <Row className='mb-4 gx-5'>
                <FormGroup 
                  name = "Date of Purchase"
                  id = "dateOfPurchase"
                  type = "text"
                  value = {currentDate}
                />
                <FormGroup 
                  name = "Description"
                  id = "description"
                  type = "text"
                />
          </Row>
          <Row className='mb-4 gx-5'>
              <FormGroup 
                name = "Customer Name"
                id = "customer"
                type = "text"
              />
              <FormGroup 
                name = "Total Cost"
                id = "totalcost"
                type = "number"
              />
          </Row>
          {/* <div className='d-flex justify-content-end'>
              <Link to='/orders' className='btn btn-secondary m-1 px-3 rounded-4'>
                <i className='bi-arrow-left me-1'></i>
                Back
                </Link>
              <Button type='submit' className='btn-view m-1 px-3 rounded-4'>
                Submit
                </Button>
          </div>   */}
        </Form>
        
        {/* Bike order entries */}
        <div className='d-flex justify-content-between'>
          <h3 className='page-title my-4'>Bike orders</h3>
          <div className='d-flex align-items-center'>
            <Link to='/orders/bike-order/Add' className='btn btn-md btn-main'>
                <i className='me-1 bi-plus-lg'></i>
                Add bike order
            </Link>
        </div>
        </div>
        

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
            <tr>
              <td>0</td>
              <td>Empty</td>
              <td>Empty</td>
              <td>Empty</td>
              <td>Empty</td>
              <td>
                <div className='d-flex'>
                  {/* Replace 0 with ${border.id} */}
                    <Link to={`/orders/bike-order/0/Edit`} className='d-flex btn btn-edit m-1 rounded-4'>Edit</Link>
                    <Link to={`/orders/bike-order/bo/delete/0`} className='d-flex btn btn-danger m-1 rounded-4'>Delete</Link>
                  </div>
              </td>
            </tr>
          </tbody>
        </Table>

        </div>
            
        </Container>
    
    </>
  )
}

export default AddOrder;
