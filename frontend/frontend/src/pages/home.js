import { Avatar, Container, Typography, Box } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { deepOrange, deepPurple } from '@mui/material/colors';
import axios from "axios"
import Link from "next/link";

export default function home(){

    const testQuery = useQuery({
        queryKey: ['test'],
        queryFn: async () => {
            return axios.get('http://localhost:8000/api/test')
            .then(res => {return res.data})
        }
    })

    return(
        <>
            <Container style={{boxShadow: '0px 0px 10px', padding: '15px', backgroundColor: '#D6D46D', borderRadius: '9px', marginTop: '15vh', width: '100vh'}}>
                <Typography variant='h4'> QC Bike Management System </Typography>
                <Link href="https://github.com/Decoretum" target="blank">
                    <Typography variant='subtitle2' style={{display: 'flex', marginTop: '5vh'}}>
                        <Avatar style={{backgroundColor: 'darkblue', color: 'white', padding: '10px'}}> GE </Avatar>
                        <Typography style={{marginTop: '0.75vh', marginLeft: '1vw'}}> Gael Estrera </Typography>
                    </Typography>
                </Link>

                <Typography variant='h6' style={{marginTop: '6vh'}}> <i>Overview</i> </Typography>
                <Typography variant='subtitle1' style={{marginTop: '6vh'}}>
                    Hi there! This is Gael Estrera, a senior MIS student from Ateneo de Manila University. This system was created inline
                    with the requirements for CSCI 180.05 - Special Topics in Languages: Enterprise Systems Programming. <br/><br/>

                    This is an application geared towards managing the inventory and orders pertaining to Bicycles.
                </Typography>
                
            </Container>
        </>
    )
}
