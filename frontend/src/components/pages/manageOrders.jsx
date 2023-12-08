import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import PageTitle from '../PageTitle';



function Orders() { 
  
  const [orders, setOrders] = useState([]);

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

      setOrders(newArray);
      return axios.delete(`http://localhost:8000/api/removeOrder?id=${Number(orderID)}`)
    } 

    if (orderQuery.isFetching && orderQuery.isRefetching && !orderQuery.isError){
        return (
            <h3 className='m-4'>Loading data...</h3>
        )
    }

    if (orders.length >= 1)
    return (
      <>
          <Container>
          <PageTitle
                page = "Manage orders"
                link = "/orders/Add"
                button = "Add order" 
              />

          <Table className='open-sans' striped hover>
          <thead>
            <tr className='inter'>
              <th></th>
              <th>Purchase Date</th>
              <th>Customer</th>
              <th>Description</th>
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
                  <td>{order.customer.name}</td>
                  <td>{order.description}</td>
                  <td>P{(order.totalcost).toFixed(2)}</td>
                  <td>{order.finished === true ? 'True' : 'False'}</td>
                  <td>
                    <div className='d-flex'>
                      <Link to={`/orders/${order.id}/Edit`} className='d-flex btn btn-edit m-1 rounded-4'>Edit</Link>
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