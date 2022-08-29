import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/auth/auth";
import App from "./App";
import {CookiesProvider} from "react-cookie";


function Routing() {

    const [token, setToken] = useState('');

    return (
        <Routes>

            {/* App Routes */}
            <Route exact path="/" element={<App/>} />

            {/* Auth Routes */}
            <Route exact path="/login" element={<Auth/>} />

        </Routes>
    );
}

export default Routing;