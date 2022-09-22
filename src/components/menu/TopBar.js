import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useTheme from "@mui/material/styles/useTheme";
import styled from "@mui/material";


// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//   },
//   topBar: {
//     boxShadow: 'none',
//   }
// }))


export default function TopBar() {
  const theme = useTheme();

  // const useStyles = makeStyles((theme) => ({
  //   appBar: {
  //     boxShadow: 'none',
  //   },
  // }));

  // const classes = useStyles();

  return (

      <Box sx={{flexGrow: 1}}>

        <AppBar color="inherit">
          <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{mr: 2}}
            >
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              KindleManga
            </Typography>
            {/*<Button color="inherit">Create Account</Button>*/}
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

      </Box>

  );
}