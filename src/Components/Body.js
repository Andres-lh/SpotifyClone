import React from 'react';
import Header from './Header';
import './Styles/Body.css';
import { useDataLayerValue } from '../Data/DataLayer';
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
                    <h1>{playlist_tracks?.name}</h1>
                    <p>{playlist_tracks?.description}</p>
                </div>
            </div>

            <div className="body-icons">
                    <PlayCircleFilledIcon className="body-play"/>
                    <FavoriteIcone/>
                    <MoreHorizIcon/>
            </div>


            <div className="songs-view">
               <div className="songs-view-header">
                   <div  className="songs-view-title">
                        <span>TITLE</span>
                   </div>
                   <div  className="songs-view-album">
                        <span>ALBUM</span>
                   </div>
                   <div  className="songs-view-time">
                        <span>TIME</span>
                   </div>
               </div>
               <hr/>
                {playlist_tracks?.tracks.items.map((item) => (
                    <SongRow track={item.track} />
                ))}
            </div>

        </div>

        
        
    )
}

export default Body;