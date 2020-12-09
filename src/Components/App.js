import React, { useEffect, useState } from 'react';
import './Styles/App.css';
import Login from  './Login'
import Player from './Player';
import { getHashFromUrl } from '../Data/spotify';
import { useDataLayerValue } from '../Data/DataLayer';
import SpotifyWebApi from 'spotify-web-api-js';


const spotify = new SpotifyWebApi();

function App() {
  
 
  const [{user, token, recommendations}, dispatch] = useDataLayerValue();

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

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: "SET_PLAYLISTS", 
          playlists: playlists
        })
      })

      spotify.getPlaylist('37i9dQZF1DWVYJEcbief4b').then(res =>{
        dispatch({
          type: "SET_PLAYLIST_TRACKS",
          playlist_tracks: res,

        })
      })

      spotify.getMyRecentlyPlayedTracks().then(res =>{
        dispatch({
          type: "SET_START",
          recently: res,
        })
      })
    }

  }, [] );

  
  return (
    <div className="app">
      {
        token ? <Player spotify={spotify}/> : (<Login/>)
      }
      
    </div>
  );
}

export default App;
