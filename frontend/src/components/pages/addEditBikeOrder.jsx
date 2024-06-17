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
import { Dropdown } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


function AddEditBikeOrder() {
  const params = useParams();
  const orderID = params.id;
  const navigate = useNavigate();

  const [bikeName, setBikeName] = useState('Select Bike Name');
  const [bike, setBike] = useState({});
  const [totalcost, setTotalCost] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [bikes, setBikes] = useState([]);
  const [quantityArray, setQuantityArray] = useState([]);
  const [colorArray, setColorArray] = useState([]);
  const [color, setColor] = useState('Select a Color');

  const {handleSubmit} = useForm();
  const operation = params.mode;

  //Submit Data
  const onSubmit = () => {
    const data = {};
    data.id = orderID;
    data.quantity = quantity;
    data.cost = totalcost;
    data.bikeName = bikeName;
    data.bike_color = color;

    axios.post('http://localhost:8000/api/makeBikeOrder', data)
    .then((res) => {
      if (res.data.result === 'Success!')
        navigate(`/orders/${orderID}/Edit`)
      })
  }

  //Bike Query
  const bikesQuery = useQuery({
    queryKey: ['bikesQuery'],
    queryFn: async () => {
      return axios.get('http://localhost:8000/api/getBikes')
      .then((res) => {
        let filteredBikes = res.data.filter((bike) => bike.stock >= 1 && bike.removed === false)
        setBikes(filteredBikes);
        console.log(res.data);
        return res.data})
    }
  })

  const FormGroup = (props) => {
    let q = props.id === 'quantity';
    let c = props.id === 'cost';
    let colors = [];
    return (
      <Form.Group as={Col} controlId={props.id}>
        <Form.Label><b>{props.name}</b></Form.Label>
        <Form.Control
        onChange={(e) => {
        }}
        readOnly={q ? false : c ? true : true}
        defaultValue={props.content} 
        value={q ? quantity : c ? totalcost : 'none'}
        type={props.type} 
        placeholder={props.ph} 
        required/>
      </Form.Group>
    )
  }


  return (
    <>  
        <Container>
        <h1 className='page-title my-5'>{params.mode} bike order</h1>

        <div className='w-50 mx-auto'>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className='mb-4'>
            <p className='page-title' style={{marginTop: '2em'}}> Bike </p>

              {/* Dropdown For the Bike names */}
              <Dropdown className='mt-1'> 
                <Dropdown.Toggle variant='success'>
                  {bikeName}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {
                    bikes.map((bike) => {
                    return <Dropdown.Item onClick={(e) => {
                      //Dynamic processing for all data
                      setBikeName(e.target.innerHTML);
                      for (let bike of bikes){
                        if (bike.name === e.target.innerHTML){
                          let qArray = [];
                          let cArray = [];
                          setBike(bike);
                          setQuantity(bike.stock);
                          for (let i = 1; i <= bike.stock; i++){
                            qArray.push(i);
                          }
                          for (let i = 0; i < bike.bikeColors.length; i++){
                            cArray.push(bike.bikeColors[i].name);
                          }
                          
                          setColorArray(cArray);
                          setQuantityArray(qArray);
                          setTotalCost((bike.price * bike.stock).toFixed(2));
                            }
                          }
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
            <Row className='mb-4 mt-1'>
            
            <p className='page-title'> Quantity </p>
              {/* Dropdown for quantity  */}
            <Dropdown className='mt-0.2' drop='down'> 
                <Dropdown.Toggle variant='success'>
                  {quantity}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{maxHeight: '10em', overflowY: 'scroll'}}>
                  {
                    quantityArray.map((number) => {
                    return <Dropdown.Item onClick={(e) => {
                      //Dynamic processing of quantity data
                      setQuantity(number);
                      setTotalCost((number * bike.price).toFixed(2));
                        }
                      }
                      > {number} </Dropdown.Item>
                    })
                  }
                </Dropdown.Menu>

              </Dropdown>

            </Row>
            <Row className='mb-4'>
              <FormGroup 
                name = "Cost"
                id = "cost"
                type = "number"
                content = {totalcost}
              />
            </Row>
            <Row className='mb-4'>

            <p className='page-title'> Bike Colors </p>
              {/* Dropdown for Colors  */}
            <Dropdown className='mt-0.2' drop='down'> 
                <Dropdown.Toggle variant='success'>
                  {color}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{maxHeight: '10em', overflowY: 'scroll'}}>
                  {
                    colorArray.map((color) => {
                    return <Dropdown.Item onClick={(e) => {
                      //Dynamic processing of quantity data
                      setColor(color);
                        }
                      }
                      > {color} </Dropdown.Item>
                    })
                  }
                </Dropdown.Menu>

              </Dropdown>

            </Row>
            <div className='d-flex justify-content-end'>
              <Link to={`/orders/${orderID}/Edit`} className='btn btn-secondary m-1 px-3 rounded-4'>
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



