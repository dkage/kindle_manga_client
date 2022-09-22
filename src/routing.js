import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import App from "./App";
import {CookiesProvider} from "react-cookie";


function Routing() {

    const [token, setToken] = useState('');

    return (
        <Routes>

            {/* App Routes */}
            <Route exact path="/" element={<App/>} />

            {/* Auth Routes */}
            <Route exact path="/login" element={<Login/>} />

        </Routes>
    );
}

export default Routing;