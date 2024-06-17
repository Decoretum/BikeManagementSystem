import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import PageTitle from '../PageTitle';
import { Button, Modal } from 'react-bootstrap';



function Orders() { 
  
  const [orders, setOrders] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const history = useNavigate();

  useEffect(() => {
    setShow(false);
    setName('');
    setOrders([])
  }, [])

  //Querying all Orders
    const orderQuery = useQuery({
    queryKey: ['order'],
    queryFn: async () => {
        return axios.get('http://localhost:8000/api/getAllOrders')
        .then(res => {
          console.log(res.data)
          setOrders(res.data);
          return res.data})
    }
    })

    //Deleting an order
    const deleteOrder = (orderID) => {
      let newArray = [];
      for (let order of orders){
        if (order.id !== orderID){
          newArray.push(order);
        }
      }
      axios.delete(`http://localhost:8000/api/removeOrder?id=${Number(orderID)}`)
      setOrders(newArray);
    } 

    //Confirming an order
    const confirmOrder = (orderID) => {
      axios.post(`http://localhost:8000/api/confirmOrder?orderID=${orderID}`)
      .then((res) => {
        console.log(res.data.result)
        console.log(res.data.errors)
        if (res?.data?.result !== null && res?.data?.errors === undefined){
          let newArray = []
          for (let o of orders){
            if (orderID === o.id){
              o.finished = true;
            }
            newArray.push(o);
            }
        
          setName(res?.data?.result);
          setOrders(newArray);
          setShow(true);
        } else {
          let errorMessage = res?.data?.errors;
          setShow(true);
          setName(errorMessage);
        }
      })
    }

    if ((orderQuery.isFetching || orderQuery.isRefetching) && !orderQuery.isError){
        return (
            <h3 className='m-4'>Loading data...</h3>
        )
    }

    if (orderQuery.isError){
      return (
        <h3 className='m-4'>Error fetching Order data</h3>
      )
    }

    if (orders.length < 1){
      return(
                <>
                  <h3 className='m-4'>No Orders in the Application!</h3>
                  <Button style={{marginLeft: '3em'}} onClick={() => {history('/orders/add')}}> Add an Order </Button>
                </>
      )
    }

    if (orders.length >= 1)
    return (
      <>
          <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Order Confirmation</Modal.Title>
            </Modal.Header>
              <Modal.Body> {name} </Modal.Body>
          </Modal>
          <Container>
          <PageTitle
                page = "Manage orders"
                link = "/orders/add"
                button = "Add order" 
              />

          <Table className='open-sans' striped hover>
          <thead>
            <tr className='inter'>
              <th></th>
              <th>Purchase Date</th>
              <th>Customer</th>
              <th>Total Cost</th>
              <th>Finished</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order) =>
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.dateOfPurchase}</td>
                  <td>{order.customer === null ? 'No Customer' : order.customer.name}</td>
                  <td>P{(order.totalcost).toFixed(2)}</td>
                  <td>{order.finished === true ? 'True' : 'False'}</td>
                  <td>
                    <div className='d-flex'>
                      <Link to={`/orders/${order.id}/Edit`} className='d-flex btn btn-edit m-1 rounded-4'>{order.finished === true ? 'View' : 'Edit'}</Link>
                      {
                        order.finished !== true ? (
                          <Link onClick={() => {confirmOrder(order.id)}} className='d-flex btn btn-success m-1 rounded-4'>Confirm</Link>
                          ) : (<></>)
                      }
                      <Link onClick={() => {deleteOrder(order.id)}} className='d-flex btn btn-danger m-1 rounded-4'>Delete</Link>                   
                    </div>
                  </td>
                </tr>
              )
            }
          </tbody>
          </Table>
  
          </Container>
  
      </>
    )
  }
  
  export default Orders;