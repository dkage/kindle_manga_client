import React, {useEffect} from "react";
import {useCookies} from "react-cookie";
import logo from './logo.svg';
import './App.css';


function App() {
    const [cookies, setCookies, removeCookies] = useCookies(['auth-token']);

    // This checks if token auth exists, validate if logged in
    useEffect( () => {
        // TODO should I add a API check here to verify token value?
        if(!cookies['auth-token']) window.location.href = '/login';
    }, [cookies]);


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload...
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
