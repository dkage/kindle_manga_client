import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import SettingsIcon from '@mui/icons-material/Settings';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const drawerWidth = 240;

export default function NavDrawer() {

    const drawerStyle = {
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', borderRight: 'none' },
    }

    const listStyle = {
        [`& .MuiListItem-root`]: {padding: '0px'},
        [`& .MuiListItemText-primary`]: {fontSize: '14px'},
    }

    return (

        <Drawer variant="permanent" sx={drawerStyle}>
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List sx={listStyle}>

                    <ListItem key={'home'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary='Home' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key={'hot'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <WhatshotIcon sx={{color: 'darkorange'}} />
                            </ListItemIcon>
                            <ListItemText primary='Hot' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key={'series'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LocalLibraryIcon />
                            </ListItemIcon>
                            <ListItemText primary='Series' />
                        </ListItemButton>
                    </ListItem>

                </List>

                <Divider />

                <List sx={listStyle}>

                    <ListItem key={'subscriptions'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LoyaltyIcon />
                            </ListItemIcon>
                            <ListItemText primary='Subscriptions' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key={'my_kindle'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ChromeReaderModeIcon />
                            </ListItemIcon>
                            <ListItemText primary='My Kindle' />
                        </ListItemButton>
                    </ListItem>

                </List>

                <Divider />

                <List sx={listStyle}>

                    <ListItem key={'settings'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary='Settings' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>

    );
}