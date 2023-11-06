import { Button, Card, CardContent, Chip, Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Router, useRouter } from "next/router";

export default function index(){
    const router = useRouter();
    const testQuery = useQuery({
        queryKey: ['test'],
        queryFn: async () => {
            return axios.get('http://localhost:8000/api/getBikes')
            .then(res => {return res.data})
        }
    })

    if (testQuery.isFetching && testQuery.isRefetching && !testQuery.isError){
        return (
            <Typography>
                Loading Data
            </Typography>
        )
    }

    if (testQuery.data?.length >= 1)
    return (
        <>
            <Container style={{ margin: 'auto', width: '50vw', maxWidth: '50vw', marginTop: '15vh'}}> 
                <Button onClick={() => router.push("/bikes/addBike")} variant='contained'> Add Bike </Button>
                <br/><br/>
                {
                    testQuery.data?.map((bike) => 
                        <Card sx ={{ maxWidth: 300 }} key={bike.name} style={{marginTop: '2vh'}}>
                            <CardContent>
                                <Typography variant='h5'>
                                    {bike.name}
                                </Typography>
                                <Typography style={{marginTop: '2vh'}} color='text.secondary'>
                                    {bike.bikeCategories.length} categories
                                </Typography>
                                <Typography color='text.secondary'>
                                    {bike.bikeColors.length} colors
                                </Typography>

                                <Chip label="View"
                                style={{marginTop: '1vh', backgroundColor: 'lightblue'}}
                                onClick = {() => {router.push(`http://localhost:3000/bikes/${bike.id}/viewBike`)}}
                                />

                                <Chip label="Edit"
                                style={{marginTop: '1vh', marginLeft:'1.5vw', backgroundColor: 'lightblue'}}
                                onClick = {() => {router.push(`http://localhost:3000/bikes/${bike.id}/editBike`)}}
                                />
                            </CardContent>
                        </Card>
                    )
                }

            </Container> <br/><br/>
        </>
    )

    else{
        return(
            <Container style={{margin: 'auto', width: '50vw', marginTop: '15vh'}}>
                <Typography variant="h5">
                No Bikes Stored in the Application
                </Typography>
                <Button variant='contained' onClick={() => router.push("/bikes/addBike")} style={{marginTop: '4vh'}}> Add Bike </Button>
            </Container>
        )
    }
}