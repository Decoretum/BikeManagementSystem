import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import PageTitle from '../PageTitle';




function Customers() {
    const custQuery = useQuery({
    queryKey: ['customer'],
    queryFn: async () => {
        return axios.get('http://localhost:8000/api/getAllCustomer')
        .then(res => {return res.data})
    }
    })

    if (custQuery.isFetching && custQuery.isRefetching && !custQuery.isError){
        return (
            <h3 className='m-4'>Loading data...</h3>
        )
    }

    if (custQuery.data?.length >= 1)
    return (
      <>
          <Container>
              <PageTitle
                page = "Manage customers"
                link = "/customers/Add"
                button = "Add customer" 
              />

              <Table className='open-sans' striped hover>
              <thead>
                <tr>
                  <th></th>
                  <th>ID Number</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact Number</th>
                  <th>Classification</th>
                  <th>Balance</th>
                  <th></th> 
                </tr>
              </thead>
              <tbody>
                { custQuery.data?.map((cust) =>
                    <tr key={cust.id}>
                      <td>{cust.id}</td>
                      <td>{cust.idNumber}</td>
                      <td>{cust.name}</td>
                      <td>{cust.email}</td>
                      <td>{cust.contactNumber}</td>
                      <td>{cust.classification}</td>
                      <td>{cust.balance}</td>
                      <td>
                        <div className='d-flex'>
                          <Link to={`/customers/${cust.id}/Edit`} className='d-flex btn btn-edit m-1 rounded-4'>Edit</Link>
                          <Link to={`/customers/${cust.id}`} className='d-flex btn btn-danger m-1 rounded-4'>Delete</Link>
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

    else {
      return (
          <>
              <Container>
              <PageTitle 
                  page = "Manage customers"
                  link = "/customers/Add"
                  button = "Add customer" 
              />
              <h2>No customers added in the application.</h2>
              </Container>
          </>
      )
    }
  }
  
  export default Customers;