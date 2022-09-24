import React from "react";
import TopBar from "../menu/TopBar";
import { useTheme } from '@mui/material/styles';
import NavDrawer from "../menu/NavDrawer";
import Box from "@mui/material/Box";


function Home() {
    const theme = useTheme();

    return (
        <div>
            <Box sx={{flexGrow: 1}}>

                <TopBar name="top_bar" theme={theme}/>
                <NavDrawer name="nav_bar" theme={theme}/>

            </Box>
        </div>
    )
}

export default Home;