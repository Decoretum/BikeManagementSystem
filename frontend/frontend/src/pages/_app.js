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
                    Bisikleta para sa Atenista
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
                        <Link href={'/'}>
                            <Typography variant="h6" style={{ marginLeft: '2vw' }}> Bisikleta para sa Atenista </Typography>
                        </Link>
                    </Toolbar>
                </AppBar>

                <Menu
                keepMounted
                open={anchored}
                anchorEl = {open}
                onClose={() => {setOpen(null)}}
                disableScrollLock = {true}
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
                    <div style={{maxHeight: '100%', maxWidth: '100%', fontFamily: 'Roboto', fontWeight: '100'}}>
                        <QueryClientProvider client={client}>
                            <Component {...pageProps} />
                        </QueryClientProvider>
                    </div>
                </>

    )
}