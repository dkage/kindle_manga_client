import React from "react";
import TopBar from "../layout/menu/TopBar";
import { useTheme } from '@mui/material/styles';
import NavDrawer from "../layout/menu/NavDrawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MainContent from "../content/MainContent";


function Home() {

    return (
        <div>
            <Box sx={{flexGrow: 1}}>

                <TopBar name="top_bar" />

                <Box sx={{ display: 'flex', zIndex: '-1' }}>
                    <NavDrawer name="nav_bar" />

                        <Toolbar />
                        <MainContent />

                </Box>
            </Box>
        </div>
    )
}

export default Home;