import { Avatar, Container, Typography, Box, Chip } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { deepOrange, deepPurple } from '@mui/material/colors';
import axios from "axios"
import Link from "next/link";
import { useRouter } from "next/router";

export default function home(){

    const testQuery = useQuery({
        queryKey: ['test'],
        queryFn: async () => {
            return axios.get('http://localhost:8000/api/test')
            .then(res => {return res.data})
        }
    })

    const handleClick = (e) => {
        e.preventDefault();
        router.push('https://github.com/Decoretum')
    } 

    const router = useRouter();

    return(
        <>
            <Container style={{boxShadow: '0px 0px 10px', padding: '15px', backgroundColor: '#DE8F5F', borderRadius: '9px', marginTop: '15vh', minWidth: '500px', width: '50vw'}}>
                <Typography variant='h4' style={{fontWeight: '100'}}> Bisikleta para sa Atenista </Typography>
                <Typography variant='h6' style={{fontWeight: '100'}}> Bike Management System </Typography>
                    <Typography variant='subtitle2' style={{display: 'flex', marginTop: '5vh'}}>
                        <Avatar style={{backgroundColor: 'green', color: 'white', padding: '10px'}}> GE </Avatar>
                        <Typography style={{marginTop: '0.75vh', marginLeft: '1vw', fontWeight: '300'}}> Gael Estrera </Typography>
                        <Chip label="Software Developer" onClick={handleClick} style={{marginLeft: '2vw', color: 'white', backgroundColor: '#113946'}} />
                    </Typography>

                <Typography variant='h6' style={{marginTop: '6vh'}}> <i>Overview</i> </Typography>
                <Typography variant='subtitle1' style={{marginTop: '6vh'}}>
                    Hi there! This is Gael Estrera, a senior MIS student from Ateneo de Manila University. This system was created inline
                    with the requirements for <i>CSCI 180.05 - Special Topics in Languages: Enterprise Systems Programming</i>. However
                    this system can still be integrated into any clients that may need this. <br/><br/>

                    This is an application geared towards managing the inventory and orders pertaining to Bicycles. This system is able to do
                    the following functions: <br/><br/>
                    <li> Do CRUD (Create, Read, Update, and Delete) Bicycle Information in the Database </li>
                    <li> Handle orders / transactions relating to Bicycles in the database </li>
                    <li> Categorize bicycles and do transactions upon them </li>
                    <li> Update stock of bicycles based on transaction </li>
                    <li> Update prices </li>
                </Typography>
                
            </Container>
        </>
    )
}
