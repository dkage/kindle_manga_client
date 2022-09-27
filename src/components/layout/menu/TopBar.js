import * as React from 'react';
import {AppBar} from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useTheme from "@mui/material/styles/useTheme";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function TopBar() {
    const theme = useTheme();

    // const AppBar = styled(AppBarDefault)(
    //     ({ theme }) => `
    //         box-shadow: none;
    //         `)
    // const IconButtonOutlined = styled(IconButton) (
        // ({theme} => `
        //
        // )
    // )

    return (

            <AppBar color="inherit" sx={{boxShadow: 'none', zIndex: (theme) => theme.zIndex.drawer + 2}}>

                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        KindleManga
                    </Typography>
                    {/*<IconButton color="inherit" variant="outlined" sx={{mr:2, border: 'solid 1px', borderRadius: '10px'}} edge='start'><AccountCircleIcon fontSize="small" sx={{margin: 0}} /></IconButton>*/}
                    <Button startIcon={<AccountCircleIcon />} color="inherit" variant="outlined">Login</Button>
                </Toolbar>

            </AppBar>

    );
}