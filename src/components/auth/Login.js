import React, {useEffect, useState} from "react";
import { API } from '../../API/api-service'
import {useCookies} from "react-cookie";
import Footer from "../layout/Footer";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid2 from "@mui/material/Unstable_Grid2";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [cookies, setCookies, removeCookies] = useCookies(['auth-token']);  // the Cookies name here are just to specify which Cookies name that when changed will trigger a re-render of the page.

    useEffect( () => {
        // TODO add loading spinner gif/svg while this check is running on page load, to hide login form for 2seconds
        if(cookies["auth-token"]) window.location.href = '/';
    }, [cookies]);

    const loginClicked = () => {
        API.loginUser({username, password})
            .then( resp => resp.json())
            .then(data => setCookies('auth-token', data.token)) // TODO add validation here for return, to check if contains 'token'
            .catch( err => console.log(err) );
    };

    return (

        <React.Fragment>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />

                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{ minHeight: '95vh', }}
                >
                    <Grid item container direction="column" style={{maxWidth: '300px'}}>

                        <Grid item>
                            <Typography align="center" variant="h4" component="h1" gutterBottom>
                                TEST
                            </Typography>
                        </Grid>

                        <Grid
                            item
                            container
                            direction="column"
                            spacing={2}
                            style={{margin: '90px 0'}}
                        >

                            <Grid item>
                                <TextField
                                    style={{width: '100%'}}
                                    id="username"
                                    label="Username"
                                    value={username}
                                    onChange={ evt => setUsername(evt.target.value) }
                                />
                            </Grid>

                            <Grid item>
                                <TextField
                                    style={{width: '100%'}}
                                    id="password"
                                    label="Password"
                                    type="password"
                                    variant="filled"
                                    onChange={ evt => setPassword(evt.target.value) }
                                />
                            </Grid>

                            <Grid
                                item
                                container
                                spacing={1}
                            >
                                <Grid xs={12} md={6} item>
                                    <Button style={{width: '100%'}} variant="contained" onClick={loginClicked}>Login</Button>
                                </Grid>



                                <Grid xs={12} md={6} item>
                                    <Button style={{width: '100%'}} variant="contained" >Register</Button>
                                </Grid>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>


                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{ minHeight: '5vh' }}
                >
                    <Footer/>
                </Grid>

            </ThemeProvider>
        </React.Fragment>
    )
}


export default Login;
