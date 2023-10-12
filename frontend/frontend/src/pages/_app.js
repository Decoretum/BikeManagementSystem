import { AppBar, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from "react";
import Head from 'next/head'
import '../../styles/globals.css'

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
                <AppBar style={{height: '10vh'}}>
                    <Toolbar>
                        <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        onClick={setAnchor}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" style={{ marginLeft: '2vw' }}> QC Bike Management System </Typography>

                    </Toolbar>
                </AppBar>

                <Menu
                keepMounted
                open={anchored}
                anchorEl = {open}
                onClose={() => {setOpen(null)}}
                >
                    <MenuItem>
                        Haha
                    </MenuItem>
                </Menu>

                    <div style={{maxHeight: '100%', maxWidth: '100%', fontFamily: 'Roboto'}}>
                        <QueryClientProvider client={client}>
                            <Component {...pageProps} />
                        </QueryClientProvider>
                    </div>
                </>

    )
}