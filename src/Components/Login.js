import React from 'react';
import './Styles/Login.css';
import { loginUrl } from '../Data/spotify';

function Login(){
    return(
        <div className="login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg" alt=""/>
            <a href= {loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login