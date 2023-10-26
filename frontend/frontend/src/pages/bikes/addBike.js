import { Box, Button, Container, Input, Modal, Typography } from '@mui/material';
import {useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
export default function addBike(){
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => console.log(data);

    //MODAL
    const [ error, setError ] = useState(<></>)
    const [ open, setOpen ] = useState(true);
    const [check, setCheck ] = useState(['']);
    const [modal, setModal] = useState(false);

    //Getting Query of Categories
    const catQuery = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            return axios.get("http://localhost:8000/api/getCategories")
            .then(res => {return res.data})
        }
    })

    console.log(catQuery.data);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Container style={{marginTop: '15vh', border: 'solid', width: '50vw', maxWidth: '50vw'}}>
                <Typography variant='h6'>
                    Name
                </Typography>
                <Input {...register("name")} />

                <Typography variant='h6' style={{marginTop: '3vh'}}>
                    Description
                </Typography>
                <Input {...register("description")} />

                <Typography variant='h6' style={{marginTop: '3vh'}}>
                    Price
                </Typography>
                <Input {...register("price")} />

                <Typography variant='h6' style={{marginTop: '3vh'}}>
                   Stock
                </Typography>
                <Input {...register("stock")} />

                <Typography variant='h6' style={{marginTop: '3vh'}}>
                    Wheel Size
                </Typography>
                <Input {...register("wheelSize")} />

                <Modal
                open={modal === true}
                onClose = {() => setModal(false)}
                >
                    <Box>
                        {

                        }
                    </Box>

                </Modal>

                <br/><br/>
                <Button type='submit' variant='contained'> Create </Button>
            </Container>
        </form>
    )
}