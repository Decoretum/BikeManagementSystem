import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import PageTitle from '../PageTitle';



function Orders() {
    const orderQuery = useQuery({
    queryKey: ['orderomer'],
    queryFn: async () => {
        return axios.get('http://localhost:8000/api/getAllOrders')
        .then(res => {return res.data})
    }
    })

    if (orderQuery.isFetching && orderQuery.isRefetching && !orderQuery.isError){
        return (
            <h3 className='m-4'>Loading data...</h3>
        )
    }

    if (orderQuery.data?.length >= 1)
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
            <tr>
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
              orderQuery.data?.map((order) =>
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.dateOfPurchase}</td>
                  <td>{order.customer.name}</td>
                  <td>{order.description}</td>
                  <td>{order.totalcost}</td>
                  <td>{order.finished}</td>
                  <td>
                    <div className='d-flex'>
                      <Link to={`/orders/${order.id}/Edit`} className='d-flex btn btn-edit m-1 rounded-4'>Edit</Link>
                      <Link to={`/orders/${order.id}`} className='d-flex btn btn-danger m-1 rounded-4'>Delete</Link>
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