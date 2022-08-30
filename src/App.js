import React, {useEffect} from "react";
import {useCookies} from "react-cookie";
import logo from './logo.svg';
import './App.css';
import Footer from "./components/footer";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


function App() {
    const [cookies, setCookies, removeCookies] = useCookies(['auth-token']);

    // This checks if token auth exists, validate if logged in
    useEffect( () => {
        // TODO should I add a API check here to verify token value?
        if(!cookies['auth-token']) window.location.href = '/login';
    }, [cookies]);


    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload...
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <Footer/>
            </div>
        </ThemeProvider>
    );
}

export default App;
