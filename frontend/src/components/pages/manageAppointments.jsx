import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import PageTitle from '../PageTitle';
import { Modal } from 'react-bootstrap';


function Appointments() {
  const [apps, setApps] = useState([]);
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);
  const history = useNavigate();

    const appQuery = useQuery({
    queryKey: ['appointment'],
    queryFn: async () => {
        return axios.get('http://localhost:8000/api/getAllAppointments')
        .then(res => {
          console.log(res.data);
          setApps(res.data)
          return res.data})
    }
    })

    //delete appointment
    const deleteAppointment = (appID) => {
      axios.delete(`http://localhost:8000/api/deleteAppointment?id=${appID}`).then(() => {
        history('/appointments')
      }).then((res) => {
        console.log(res.data);
        let newArray = appQuery?.data?.filter((cust) => cust.id !== appID);
        setApps(newArray);
        }
      )
    }

    //Confirm appointment
    const confirmAppointment = (appID) => {
      axios.put(`http://localhost:8000/api/confirmAppointment?appID=${appID}`)
      .then((res) => {
        if (res.data === 'success!'){
          setName(appID);
          let newArray = [];
          for (let i of apps){
            if (i.id === appID){
              i.ongoing = false;
            }
            newArray.push(i);
          }
          //modal
          setShow(true);
          setApps(newArray);
        }
      })
    }

    if ((appQuery.isFetching || appQuery.isRefetching) && !appQuery.isError){
        return (
            <h3 className='m-4'>Loading data...</h3>
        )
    }

    if (appQuery.isError){
      return(
        <h3 className='m-4'>Error fetching Appointment Data</h3>
      )
    }

    if (appQuery.data?.length >= 1)
    return (
      <>
          <Container>
          <PageTitle
                page = "Manage appointments"
                link = "/appointments/Add"
                button = "Add appointment" 
              />

          {/* Modal */}
          <Modal show={show} onHide={() => {setShow(false)}}>
            <Modal.Header closeButton>
              <Modal.Title> Appointment Confirmation </Modal.Title>
            </Modal.Header>
            <Modal.Body> Appointment {name} has been confirmed </Modal.Body>
          </Modal>

          <Table className='open-sans' striped hover>
          <thead>
            <tr className='inter'>
              <th></th>
              <th>Date Created</th>
              <th>Category</th>
              <th>Customer</th>
              <th>Appointment Date</th>
              <th>Cost</th>
              <th>Ongoing</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              apps.map((app) =>
              <tr key={app.id}>
                <td>{app.id}</td>
                <td>{app.dateTimeCreated}</td>
                <td>{app.category}</td>
                <td>{app.customer !== null ? app.customer.name : 'No Customer'}</td>
                <td>{app.dateTimeAppointed}</td>
                <td>{Number(app.cost).toFixed(2)}</td>
                <td>{app.ongoing === true ? 'true' : 'false'}</td>
                <td>
                  <div className='d-flex'>
                    <Link to={`/appointments/${app.id}/View`} className='d-flex btn btn-main m-1 rounded-4'>View</Link>
                    {
                      app.customer === null || app.customer.deleted !== true ? (
                        <Link to={`/appointments/${app.id}/Edit`} className='d-flex btn btn-edit m-1 rounded-4'>Edit</Link>
                        ) : (<></>)
                    }
                    <Link onClick={() => {deleteAppointment(app.id)}} className='d-flex btn btn-danger m-1 rounded-4'>Delete</Link>
                    {
                      app.ongoing !== false && app.customer !== null ? (
                        <i onClick={() => {confirmAppointment(app.id)}} className={"d-flex btn btn-success m-1 rounded-4 bi bi-check2-square"} style={{fontSize: '1.5rem'}}></i>
                        ) : (<></>)
                    }
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
                  page = "Manage appointments"
                  link = "/appointments/Add"
                  button = "Add appointment" 
              />
              <h2>No appointments stored in the application.</h2>
              </Container>
          </>
      )
    }
  }
  
  export default Appointments;