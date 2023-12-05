import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import PageTitle from '../PageTitle';


function Rentals() {
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
                  <th></th>
                  <th>Date Rented</th>
                  <th>Bike Name</th>
                  <th>Customer Name</th>
                  <th>Rental Duration</th>
                  <th></th>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className='d-flex'>
                        <Link to={`/rentals/View`} className='d-flex btn btn-main m-1 rounded-4'>View</Link>
                        <Link to={`/rentals`} className='d-flex btn btn-edit m-1 rounded-4'>Returned</Link>
                      </div>
                      
                    </td>
                  </tr>
                </tbody>

              </Table>
  
          </Container>
  
      </>
    )
  }
  
  export default Rentals;