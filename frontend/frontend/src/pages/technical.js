import { Container, Typography } from "@mui/material";

export default function technical(){
    return(
        <Container style={{boxShadow: '0px 0px 10px', padding: '15px', backgroundColor: '#DE8F5F', borderRadius: '9px', marginTop: '15vh', width: '50vw'}}>
            <Typography variant='h4' style={{fontWeight: '100'}}> System Specifications </Typography>
            
            <Typography variant='h6' style={{marginTop: '4vh'}}> Front-end </Typography>

            <Typography variant='subtitle1' style={{marginTop: '2vh'}}>
                NextJS was used as the front-end framework. Packages such as Tanstack Query and React Hook Form were
                also used.  
            </Typography>

            <Typography variant='h6' style={{marginTop: '4vh'}}> Back-end </Typography>

            <Typography variant='subtitle1' style={{marginTop: '2vh'}}>
                Java Spring Boot was used as the back-end framework. This enabled Object-Relational Mapping between
                Java objects to persist as well as handle functional logic for the application. Validation was also integrated used here.
            </Typography>

            <Typography variant='h6' style={{marginTop: '4vh'}}> Database System </Typography>

            <Typography variant='subtitle1' style={{marginTop: '2vh'}}>
                MySQL was used as the Relational Database Management System for the application. XAMPP was never used by Gael Estrera for any projects.
            </Typography>
            <br/>
        </Container>
        
    )
}