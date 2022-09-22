import React, {useEffect} from "react";
import {useCookies} from "react-cookie";
import logo from './logo.svg';
import './App.css';
import Footer from "./components/layout/Footer";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {AppBar, Box, Button, Toolbar, Typography, IconButton } from "@mui/material";
import Home from "./components/pages/Home"


function App() {
    const [cookies, setCookies, removeCookies] = useCookies(['auth-token']);

    // This checks if token auth exists, validate if logged in
    // useEffect( () => {
    //     // TODO should I add a API check here to verify token value?
    //     if(!cookies['auth-token']) window.location.href = '/login';
    // }, [cookies]);


    // Custom Theme
    const theme = createTheme({});


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Home/>
        </ThemeProvider>
    );
}

export default App;
