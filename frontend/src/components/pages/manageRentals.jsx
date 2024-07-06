import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import PageTitle from '../PageTitle';
import { Alert, Button, Modal } from 'react-bootstrap';


function Rentals() {
    const [rents, setRents] = useState([]);
    const [show, setShow] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [queryNow, setQueryNow] = useState(false);
    const history = useNavigate()

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

   const queryClient = useQueryClient();

    const confirmRent = (rentID) => {
      axios.post(`http://localhost:8000/api/confirmRental?rentID=${rentID}`)
      .then((res) => {
        if (res.data === 'success!'){
         queryClient.invalidateQueries({queryKey: ['rentedBike']})
          let tempName = "";
          let newArray = []
          for (let rent of rents){
            if (rent.id === rentID){
              tempName = rent.customer.name;
              setModalContent("Customer " + tempName + ' has been added balance for the rental');
          }
        newArray.push(rent);
      }
      setShow(true);
      setRents(newArray);
        }
      }) 
    }

    const deleteRent = (rentID) => {
      axios.delete(`http://localhost:8000/api/deleteRentedBike?rentedBikeID=${rentID}`)
      .then((res) => {
        let result = res.data;
        if (result === 'success!'){
          let newArray = rents.filter((rent) => rent.id !== rentID);
          setRents(newArray);
          setModalContent('Bike Rental ID ' + rentID + " has been deleted");
        } else {
          setShow(true);
          setModalContent(res.data);

        }
        
      })
    }

    if ((rentQuery.isFetching || rentQuery.isRefetching) && !rentQuery.isError){
        return (
            <h3 className='m-4'>Loading data...</h3>
        )
    }

    if (rentQuery.isError){
      return(
        <>
        <h3 className='m-4'>Error fetching bike rentals</h3>
        </>
      )
    }

    if (rents.length === 0){
      return(
        <Container className='open-sans'>
        <div className='form-style'>
          <h1 className='page-title my-5'> No Bike Rentals </h1>
          <Button onClick={() => {history('/rentals/Add')}}> Add a Bike Rental </Button>

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
          <Modal.Body> {modalContent} </Modal.Body>
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
                    <th>Date Confirmed</th>
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
                            <td>{rb.dateConfirmed}</td>
                            <td>{rb.bike.name}</td>
                            <td>{rb.customer !== null ? rb.customer.name : 'No Customer'}</td>
                            <td>{rb.rentalDuration} hours</td>
                            <td>{rb.finished === true ? 'true' : 'false'}</td>
                            <td>
                              <div className='d-flex'>
                                <Link to={`/rentals/${rb.id}/View`} className='d-flex btn btn-main m-1 rounded-4'>View</Link>
                                {
                                  rb.finished !== true && rb.customer !== null ? (
                                    <Link onClick={() => {confirmRent(rb.id)}} className='d-flex btn btn-edit m-1 rounded-4'>Confirm</Link> 
                                    ) : (<></>)
                                }
                                <Link onClick={() => {deleteRent(rb.id)}} className='d-flex btn btn-danger m-1 rounded-4'>Delete</Link>
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