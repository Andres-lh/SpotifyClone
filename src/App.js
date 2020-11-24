import React, { useEffect, useState } from 'react';
import './App.css';
import Login from  './Login'
import Player from './Player';
import { getHashFromUrl } from './spotify';
import { useDataLayerValue } from './DataLayer';
import SpotifyWebApi from 'spotify-web-api-js';


const spotify = new SpotifyWebApi();

function App() {
  
 
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect( () =>{
    const hash = getHashFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token);

      spotify.getMe().then((user)=>{
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })


    }

    

  }, [] );

  console.log('user: ', user)
  console.log('token: ', token)
  return (
    <div className="app">
      {
        token ? <Player/> : (<Login/>)
      }
      
    </div>
  );
}

export default App;
