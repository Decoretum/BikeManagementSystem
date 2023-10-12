import { AppBar, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from "react";
import Head from 'next/head'
import Link from "next/link";
import '../../styles/globals.css'
import Image from "next/image";

// import '@fontsource/roboto'

export default function myApp({Component, pageProps}){
    let client = new QueryClient();
    const [open, setOpen] = useState(null);
    const anchored = Boolean(open);

    function setAnchor(event){
        event.preventDefault();
        setOpen(event.currentTarget);
    }
    return(
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>
                    QC Bike Management System
                </title>
            </Head> 
                <AppBar style={{height: '10vh', backgroundColor: '#9A4444'}}>
                    <Toolbar>
                        <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        onClick={setAnchor}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link href={'/home'}>
                            <Typography variant="h6" style={{ marginLeft: '2vw' }}> QC Bike Management System </Typography>
                        </Link>
                    </Toolbar>
                </AppBar>

                <Menu
                keepMounted
                open={anchored}
                anchorEl = {open}
                onClose={() => {setOpen(null)}}
                >
                    <MenuItem>
                        <Link href={'/bikes'}>
                            Bicycle Inventory
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href={'/technical'}>
                            System Specifications
                        </Link>
                    </MenuItem>
                </Menu>
                <Image src={'/bike1.avif'} style={{position: 'absolute', left: '2vw', top: '13vh', borderRadius: '9px'}} width={250} height={300} priority />
                <Image src={'/bike2.avif'} style={{position: 'absolute', left: '78vw', bottom: '8vh', borderRadius: '9px'}} width={250} height={300} priority />
                <Image src={'/bike3.avif'} style={{position: 'absolute', left: '2vw', top: '70vh', borderRadius: '9px'}} width={250} height={300} priority />
                    <div style={{maxHeight: '100%', maxWidth: '100%', fontFamily: 'Roboto', fontWeight: '100'}}>
                        <QueryClientProvider client={client}>
                            <Component {...pageProps} />
                        </QueryClientProvider>
                    </div>
                </>

    )
}