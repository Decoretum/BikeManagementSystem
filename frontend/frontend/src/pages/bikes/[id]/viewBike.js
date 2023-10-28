import { Box, Checkbox, Button, Container, FormControlLabel, FormGroup, Input, Modal, TextField, Typography, Alert, List, ListItem, Chip, Grid } from '@mui/material';
import {useForm, SubmitHandler } from 'react-hook-form'
import { Fragment, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import '@/styles/addBike.css'
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

export default function addBike(){

    const router = useRouter();
    const pathName = usePathname();
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = (data) => {  
        const newArray = check.filter((n) => n !== ''); 

        //adding state to JS Object
        data.category = newArray;

        //String to array
        let oldColors = data['colors'];
        let newColors = oldColors.split(", ")
        data.colors = newColors;

        //Fixing Color array
        const newArray2 = data['colors'].filter((n) => n !== '');
        data.colors = newArray2;
    

        //Fields that cannot be handled by Spring Boot Validation
         if (data.category.length === 0 || data.colors.length === 0){
            let errorArray = [];
            errorArray.push("No chosen Categories or Colors for the Bike!")
            displayResults(errorArray);
            setError(true);
            return;
         }

        //  console.log(data);
        //  return


        axios.put("http://localhost:8000/api/editBike", data)
        .then(res => {
            console.log(res.data.result);
        
             if (!res.data.result.includes("Successfully")){
                displayResults(res.data.result);
                setError(true);
                return;
            }
            else {
                console.log('good');
                router.push("http://localhost:3000/bikes")
                return;
            }
            
        })
    }

    //MODAL
    const [check, setCheck ] = useState([]);
    const [modal, setModal] = useState(false);
    const [result, setResult] = useState(<></>);
    const [error, setError] = useState(false);
    const [object, setObject] = useState({});


    //Get Bike Object
    const bikeQuery = useQuery({
        queryKey: ['bike'],
        enabled: JSON.stringify(router.query) !== '{}',
        queryFn: async () => {
            return axios.get(`http://localhost:8000/api/getBike?bikeID=${Number.parseInt(router.query.id)}`)
            .then(res => {
                let arrayColors = res.data.bikeColors;
                let colorString = "";
                for (let i of arrayColors){
                    colorString += `${i.name}, `
                }
                colorString = colorString.slice(0, colorString.length - 2);

                let defaultValues = {
                    colors: colorString,
                    description: res.data.description,
                    id: res.data.id,
                    name: res.data.name,
                    price: res.data.price,
                    stock: res.data.stock,
                    wheelSize: res.data.wheelSize
                }  

                setObject(defaultValues);
                setCheck([]);
                 
                for (let i of res.data.bikeCategories){
                    setCheck(check => [i.categories['name'], ...check]) 
                }

                reset({...defaultValues});
                
                return res.data
            })
        }
    })



    //Getting Query of Categories
    const catQuery = useQuery({
        queryKey: ['categories'],
        enabled: check.length !== 0,
        queryFn: async () => {
            return axios.get("http://localhost:8000/api/getCategories")
            .then(res => {return res.data})
        }
    })

    console.log(bikeQuery.data);

    if (bikeQuery.isFetching && !bikeQuery.isError){
        return (
            <Typography variant='h3'> Loading Bike Data </Typography>
        )
    }

    //handling checkbox
    function checkChange(value, isChecked){
        if (isChecked){
            setCheck([...check, value])
        } else {
            setCheck(check.filter((category) => category != value))
        }
    }
    
    //For results of POST
    function displayResults(data){
        console.log(data)
        let displayString = <></>;
        displayString = 
                
                data?.map((errors) => {
                    return <>
                    <br/>
                        <Alert severity='error' style={{margin: 'auto', maxWidth: '50vw'}}> {errors} </Alert>
                    </>
                })
                
        
        setResult(displayString);
    }

    return(
        <>
        
        <Modal
        // className='modal'
        disableScrollLock={true}
        open = {error === true}
        onClose={() => {setError(false)}}
        >
            <Container>
                {result}
            </Container>
        </Modal>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <Container style={{marginTop: '15vh', width: '50vw', maxWidth: '50vw'}}>
                <Typography variant='h4'> Bike Information </Typography>
                <Typography variant='h6' style={{marginTop: '3vh'}}>
                    Name
                </Typography> <br/>

                <Typography variant='body1' style={{minWidth: '40vw'}}> {object.name} </Typography>

                <Typography variant='h6' style={{marginTop: '3vh'}}>
                    Description
                </Typography> <br/>

                <Typography rows={2} multiline variant='body1' label="Description about the bike" style={{minWidth: '40vw'}}> {object.description} </Typography>

                <Typography variant='h6' style={{marginTop: '3vh'}}>
                    Price
                </Typography><br/>
                <Typography style={{minWidth: '40vw'}}> {object.price} </Typography>

                <Typography variant='h6' style={{marginTop: '3vh'}}>
                   Stock
                </Typography><br/>
                <Typography style={{minWidth: '40vw'}}> {object.stock} </Typography>

                <Typography variant='h6' style={{marginTop: '3vh'}}>
                    Wheel Size
                </Typography><br/>
                <Typography {...register("wheelSize")} style={{minWidth: '40vw'}}> {object.wheelSize} </Typography>

                <Typography variant='h6' style={{marginTop: '3vh'}}>
                    Available Colors
                </Typography><br/>
                <Typography style={{minWidth: '40vw'}}> {object.colors} </Typography><br/>

                <Typography variant='h6' style={{marginTop: '3vh'}}> Categories </Typography>
                
                <Grid container>
                    {
                        check.map((category) => {
                            return (
                                <Grid item style={{marginRight: '2vw'}}> 
                                    <Chip label={category} style={{backgroundColor: 'lightgreen'}} /> 
                                </Grid>
                            )
                        })
                    }
                </Grid>

                <Button variant='contained' onClick={() => {router.push("http://localhost:3000/bikes")}} style={{float: 'right', marginRight: '2vw', backgroundColor: 'red'}}> Back </Button>
                

                <br/><br/>
            </Container>
        </form>
        <br/> <br/>
        </>
    )
}