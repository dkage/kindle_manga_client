import React from "react";
import TopBar from "../menu/TopBar";
import { useTheme } from '@mui/material/styles';


function Home() {
    const theme = useTheme();

    return (
        <div>
            <TopBar theme={theme}/>

        </div>
    )
}

export default Home;