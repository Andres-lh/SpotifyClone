import React from 'react';
import Header from './Header'
import './Body.css'
import { useDataLayerValue } from './DataLayer';


function Body({spotify}){

    const [{playlist_tracks}, dispatch] = useDataLayerValue(); 

    return(
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body-info">
                <img src={playlist_tracks?.images[0].url} alt="playlist-image"/>
                <div className="body-infotext">
                    <p>PLAYLIST</p>
                    <h1>Name</h1>
                    <p>{playlist_tracks?.description}</p>
                </div>
            </div>

        </div>
        
    )
}

export default Body;