import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import PageTitle from '../PageTitle';


function Rentals() {
    const rentQuery = useQuery({
    queryKey: ['rentedBike'],
    queryFn: async () => {
        return axios.get('http://localhost:8000/api/getAllRentals')
        .then(res => {return res.data})
    }
    })

    if (rentQuery.isFetching && rentQuery.isRefetching && !rentQuery.isError){
        return (
            <h3 className='m-4'>Loading data...</h3>
        )
    }

    if (rentQuery.data?.length >= 1)

    return (
      <>
          <Container>
              <PageTitle
                page = "Manage rentals"
                link = "/rentals/Add"
                button = "Add rental" 
              />

              <Table className='open-sans' striped hover>
                <thead>
                  <tr className='inter'>
                    <th></th>
                    <th>Date Rented</th>
                    <th>Bike Name</th>
                    <th>Customer Name</th>
                    <th>Rental Duration</th>
                    <th></th>
                  </tr>
                  
                </thead>
               
                <tbody>
                    {
                      rentQuery.data?.map((rb) =>
                        <tr key={rb.id}>
                            <td>{rb.id}</td>
                            <td>{rb.dateRented}</td>
                            <td>{rb.bike.name}</td>
                            <td>{rb.customer.name}</td>
                            <td>{rb.rentalDuration}</td>
                            <td>
                              <div className='d-flex'>
                                <Link to={`/rentals/${rb.id}/View`} className='d-flex btn btn-main m-1 rounded-4'>View</Link>
                                {/* the button below should also set the bike.canBeBorrowed = true */}
                                <Link to={`/rentals/bikes/return/${rb.id}`} className='d-flex btn btn-edit m-1 rounded-4'>Returned</Link> 
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
  
  export default Rentals;