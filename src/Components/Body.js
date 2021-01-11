import React from 'react';
import Header from './Header';
import './Styles/Body.css';
import { useDataLayerValue } from '../Data/DataLayer';
import SongRow from './SongRow';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcone from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


function Body({spotify}){

    const [{recently}, dispatch] = useDataLayerValue(); 
    console.log(recently)
    return(
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body-info">
                <div className="body-infotext">
                    <p>PLAYLIST</p>
                    <h1>{recently?.name}</h1>
                    <p>{recently?.description}</p>
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
                {recently?.items.map((item) => (
                    <SongRow track={item.track} />
                ))}
            </div>

        </div>
        
    )
}

export default Body;