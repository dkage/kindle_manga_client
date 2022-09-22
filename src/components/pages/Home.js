import React from "react";
import TopBar from "../menu/TopBar";
import { useTheme } from '@mui/material/styles';


function Home() {
    const theme = useTheme();

    return (
        <div>
            <TopBar name="test" theme={theme}/>

        </div>
    )
}

export default Home;