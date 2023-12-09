import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import PageTitle from '../PageTitle';
import { Alert, Modal } from 'react-bootstrap';


function Rentals() {
    const [rents, setRents] = useState([]);
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');

    const rentQuery = useQuery({
    queryKey: ['rentedBike'],
    queryFn: async () => {
        return axios.get('http://localhost:8000/api/getAllRentals')
        .then(res => {
          setRents(res.data);
          console.log(res.data);
          return res.data})
    }
    })

    const confirmRent = (rentID) => {
      axios.post(`http://localhost:8000/api/confirmRental?rentID=${rentID}`)
      .then((res) => {
        if (res.data.result === 'Success!'){
          let newArray = []
          for (let rent of rents){
            if (rent.id === rentID){
              rent.finished = true;
              setName(rent.customer.name);
          }
        newArray.push(rent);
      }
      setShow(true);
      setRents(newArray);
        }
      })
      
    }

    if (rentQuery.isFetching && rentQuery.isRefetching && !rentQuery.isError){
        return (
            <h3 className='m-4'>Loading data...</h3>
        )
    }

    if (rentQuery.isError){
      return(
        <h3 className='m-4'>Error fetching bike rentals</h3>
      )
    }

    if (rentQuery.data?.length === 0){
      return(
        <Container className='open-sans'>
        <div className='form-style'>
          <h1 className='page-title my-5'> No Bike Rentals </h1>
        </div>
      </Container>
      )
    }


    return (
      <>  
        <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Bike Rental Update</Modal.Title>
        </Modal.Header>
          <Modal.Body> {name} has been added balance for the rental </Modal.Body>
        </Modal>

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
                    <th>Finished</th>
                    <th></th>
                  </tr>
                  
                </thead>
               
                <tbody>
                    {
                      rents.map((rb) =>
                        <tr key={rb.id}>
                            <td>{rb.id}</td>
                            <td>{rb.dateRented}</td>
                            <td>{rb.bike.name}</td>
                            <td>{rb.customer.name}</td>
                            <td>{rb.rentalDuration}</td>
                            <td>{rb.finished === true ? 'true' : 'false'}</td>
                            <td>
                              <div className='d-flex'>
                                <Link to={`/rentals/${rb.id}/View`} className='d-flex btn btn-main m-1 rounded-4'>View</Link>
                                {/* the button below should also set the bike.canBeBorrowed = true */}
                                <Link onClick={() => {confirmRent(rb.id)}} className='d-flex btn btn-edit m-1 rounded-4'>Confirm</Link> 
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