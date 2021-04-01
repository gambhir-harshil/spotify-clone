import React from 'react';
import logo from './logo.png';
import './Login.css';
import { loginUrl } from './spotify'

function Login() {
    return (
        <div className='login' >
            <img  className='logo' src={logo} alt="logo"/>
            <a href={loginUrl}> LOGIN WITH SPOTIFY </a>
        </div>
    )
}

export default Login;
