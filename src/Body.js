import React from 'react';
import Header from './Header';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import SongRow from './SongRow';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcone from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


function Body({spotify}){

    const [{playlist_tracks, recently}, dispatch] = useDataLayerValue(); 

    return(
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body-info">
                <img src={playlist_tracks?.images[0].url} alt="playlist"/>
                <div className="body-infotext">
                    <p>PLAYLIST</p>
                    <h1>Name</h1>
                    <p>{playlist_tracks?.description}</p>
                </div>
            </div>

            <div className="songs-view">
                <div className="body-icons">
                    <PlayCircleFilledIcon className="body-play"/>
                    <FavoriteIcone/>
                    <MoreHorizIcon/>

                </div>

                {playlist_tracks?.tracks.items.map((item) => (
                    <SongRow track={item.track} />
                ))}
            </div>

        </div>

        
        
    )
}

export default Body;