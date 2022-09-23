import * as React from 'react';
import {AppBar} from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useTheme from "@mui/material/styles/useTheme";
import { styled } from '@mui/material/styles';


export default function TopBar() {
    const theme = useTheme();

    // const AppBar = styled(AppBarDefault)(
    //     ({ theme }) => `
    //         box-shadow: none;
    //         `)

    return (

        <Box sx={{flexGrow: 1}}>

            <AppBar color="inherit" sx={{boxShadow: 'none'}}>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        KindleManga
                    </Typography>
                    <Button color="inherit" variant="outlined" sx={{mr:2}}>Create Account</Button>
                    <Button color="inherit" variant="outlined">Login</Button>
                </Toolbar>
            </AppBar>

        </Box>

    );
}