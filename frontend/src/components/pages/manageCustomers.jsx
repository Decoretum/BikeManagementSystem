import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import PageTitle from '../PageTitle';




function Customers() {
  const [customers, setCustomers] = useState([]);
  const history = useNavigate();

    const custQuery = useQuery({
    queryKey: ['customer'],
    queryFn: async () => {
        return axios.get('http://localhost:8000/api/getAllCustomer')
        .then(res => {
          setCustomers(res.data);
          return res.data})
    }
    })

    //delete customer
    const deleteCustomer = (customerID) => {
      let newArray = custQuery?.data?.filter((cust) => cust.id !== customerID);
      setCustomers(newArray);

      axios.delete(`http://localhost:8000/api/deleteCustomer?customerID=${customerID}`)
      .then((res) => {
        if (res.result === 'success!'){
          history('/customers');
        }
      })
    }

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
                <tr className='inter'>
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
                { customers.map((cust) =>
                    <tr key={cust.id}>
                      <td>{cust.id}</td>
                      <td>{cust.idNumber}</td>
                      <td>{cust.name}</td>
                      <td>{cust.email}</td>
                      <td>{cust.contactNumber}</td>
                      <td>{cust.classification}</td>
                      <td>{cust.balance === null ? 0 : cust.balance}</td>
                      <td>
                        <div className='d-flex'>
                          <Link to={`/customers/${cust.id}/Edit`} className='d-flex btn btn-edit m-1 rounded-4'>Edit</Link>
                          <Link onClick={() => deleteCustomer(cust.id)} className='d-flex btn btn-danger m-1 rounded-4'>Delete</Link>
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