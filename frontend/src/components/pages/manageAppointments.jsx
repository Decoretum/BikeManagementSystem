import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import PageTitle from '../PageTitle';


function Appointments() {
  const [apps, setApps] = useState([]);
  const history = useNavigate();

    const appQuery = useQuery({
    queryKey: ['appointment'],
    queryFn: async () => {
        return axios.get('http://localhost:8000/api/getAllAppointments')
        .then(res => {
          setApps(res.data)
          return res.data})
    }
    })

    //delete app
    const deleteAppointment = (appID) => {
      let newArray = appQuery?.data?.filter((cust) => cust.id !== appID);
      setApps(newArray);

      axios.delete(`http://localhost:8000/api/deleteAppointment?id=${appID}`).then(() => {
        history('/appointments')
      })
    }

    if (appQuery.isFetching && appQuery.isRefetching && !appQuery.isError){
        return (
            <h3 className='m-4'>Loading data...</h3>
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
                <td>{app.customer.name}</td>
                <td>{app.dateTimeAppointed}</td>
                <td>{Number(app.cost).toFixed(2)}</td>
                <td>{app.ongoing === true ? 'true' : 'false'}</td>
                <td>
                  <div className='d-flex'>
                    <Link to={`/appointments/${app.id}/View`} className='d-flex btn btn-main m-1 rounded-4'>View</Link>
                    <Link to={`/appointments/${app.id}/Edit`} className='d-flex btn btn-edit m-1 rounded-4'>Edit</Link>
                    <Link onClick={() => {deleteAppointment(app.id)}} className='d-flex btn btn-danger m-1 rounded-4'>Delete</Link>
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