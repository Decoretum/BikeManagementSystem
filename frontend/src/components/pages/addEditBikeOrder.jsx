import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';

function FormGroup(props) {
  return (
    <Form.Group as={Col} controlId={props.id}>
      <Form.Label><b>{props.name}</b></Form.Label>
      <Form.Control type={props.type} placeholder={props.ph} required/>
    </Form.Group>
  )
}


function AddEditBikeOrder() {
  const params = useParams();
  const orderUUID = params.uuid;

  const [bikeName, setBikeName] = useState('Select Bike Name');

  const operation = params.mode;
  console.log(orderUUID);
  console.log(params.mode);

  const bikesQuery = useQuery({
    queryKey: ['bikesQuery'],
    queryFn: async () => {
      return axios.get('http://localhost:8000/api/getBikes')
      .then((res) => {
        console.log(res.data);
        return res.data})
    }
  })


  return (
    <>  
        <Container>
        <h1 className='page-title my-5'>{params.mode} bike order</h1>

        <div className='w-50 mx-auto'>
        <Form>
            <Row className='mb-4'>
            <p className='page-title' style={{marginTop: '2em'}}> Bike </p>
              <Dropdown className='mt-1'> 
                <Dropdown.Toggle variant='success'>
                  {bikeName}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {
                    bikesQuery?.data?.map((bike) => {
                    return <Dropdown.Item onClick={(e) => {
                      setBikeName(e.target.innerHTML);
                        }
                      }
                    > 
                      {bike.name}
                      </Dropdown.Item>
                    })
                  }
                </Dropdown.Menu>
              </Dropdown>
            </Row>
            <Row className='mb-4'>
              <FormGroup 
                name = "Quantity"
                id = "quantity"
                type = "number"
              />
            </Row>
            <Row className='mb-4'>
              <FormGroup 
                name = "Cost"
                id = "cost"
                type = "number"
              />
            </Row>
            <Row className='mb-4'>
              <FormGroup 
                name = "Bike Color"
                id = "bike_color"
                type = "text"
              />
            </Row>
            <div className='d-flex justify-content-end'>
              <Link to={`/orders/${orderUUID}/Edit`} className='btn btn-secondary m-1 px-3 rounded-4'>
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

export default AddEditBikeOrder;



