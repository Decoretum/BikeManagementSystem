import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import PageTitle from '../PageTitle';


function Bikes() {
    const [bikes, setBikes] = useState([]);

    const bikeQuery = useQuery({
        queryKey: ['bike'],
        queryFn: async () => {
            return axios.get('http://localhost:8000/api/getBikes')
            .then(res => {
                console.log(res.data)
                let bikeArray = res.data.filter(filterFunc);
                setBikes(bikeArray);
                return res.data
            })
        }
    })

    const filterFunc = (bike) => {
        return bike.removed === false;
    }

    const deleteBike = (bikeID) => {
        let newArray = [];
        for (let bike of bikes){
            if (bike.id !== bikeID){
                newArray.push(bike);
            }
        }
        setBikes(newArray);
        return axios.delete(`http://localhost:8000/api/deleteBike?bikeID=${Number(bikeID)}`)
    }


    if (bikeQuery.isFetching && bikeQuery.isRefetching && !bikeQuery.isError){
        return (
            <h3 className='m-4'>Loading data...</h3>
        )
    }

    if (bikes.length >= 1)
    return (
        <>  

            <Container>
                <PageTitle 
                page = "Manage bikes"
                link = "/bikes/Add"
                button = "Add bike"
                />
                
                <div className='d-flex'>
                {
                    bikes.map((bike) => 
                        <Card className='card-style mx-2 open-sans'>
                            <Card.Body>
                                <Card.Title className='inter'><b>{bike.name}</b></Card.Title>
                                <Card.Text>
                                {bike.bikeCategories.length} categories <br />
                                {bike.bikeColors.length} colors
                                </Card.Text>
                            </Card.Body>
                            <div className='d-flex justify-content-center'>
                                <Link to={`/bikes/${bike.id}/View`} className='d-flex btn btn-view m-1 rounded-4'>View</Link>
                                <Link to={`/bikes/${bike.id}/Edit`} className='d-flex btn btn-edit m-1 rounded-4'>Edit</Link>
                                <Link onClick={() => {deleteBike(bike.id)}} className='d-flex btn btn-danger m-1 rounded-4'>Delete</Link>
                            </div>
                            
                        </Card>
                    )
                }
                    
                </div>

            </Container>

        </>
    )
    else {
        return (
            <>
                <Container>
                <PageTitle 
                    page = "Manage bikes"
                    link = "/bikes/bike/Add"
                    button = "Add bike"
                />
                <h2>No bikes stored in the application.</h2>
                </Container>
            </>
        )
    }
}

export default Bikes;
