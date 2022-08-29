import React, {useEffect, useState} from "react";
import { API } from '../../API/api-service'
import {useCookies} from "react-cookie";


function Auth() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [cookies, setCookies, removeCookies] = useCookies(['auth-token']);  // the Cookies name here are just to specify which Cookies name that when changed will trigger a re-render of the page.

    useEffect( () => {
        // TODO add loading spinner gif/svg while this check is running on page load, to hide login form for 2seconds
        console.log(cookies);
        if(cookies["auth-token"]) window.location.href = '/';
    }, [cookies]);

    const loginClicked = () => {
        API.loginUser({username, password})
            .then( resp => resp.json())
            .then(data => setCookies('auth-token', data.token)) // TODO add validation here for return, to check if contains 'token'
            .catch( err => console.log(err) );
    };

    return (

        <div>
            <label htmlFor="username">Username</label>

            <br/>

            <input id="username" type="text" placeholder="username" value={username}
                   onChange={ evt => setUsername(evt.target.value) }/>

            <br/><br/>

            <label htmlFor="password">Password</label>

            <br/>

            <input id="password" type="password" placeholder="password" value={password}
                   onChange={ evt => setPassword(evt.target.value) }/>

           <br/><br/>
           <button onClick={loginClicked}>Login</button>
        </div>

    )
}


export default Auth;
