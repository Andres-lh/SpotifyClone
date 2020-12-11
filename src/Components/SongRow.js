import React from 'react';
import './Styles/SongRow.css';

function SongRow({track, added}) {

    function fixDuration(ms) {
        var minutes = Math.floor(ms/ 60000);
        var seconds = ((ms % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }
      
    return (
        
        <div className="song-row"> 
            <div className="song-row-left">
                <img className="song-row-image" src={track.album.images[0].url} alt=""/>
                <div>
                    <h4 className="track-name">{track.name}</h4>
                    <p>
                        {track.artists.map((artist)=> artist.name).join(", ")}
                    </p>
                </div>   
            </div>
           
            <div className="song-row-album">
                <p>{track.album.name}</p>
                
            </div>
            <div className="song-time">
                <p>{fixDuration(track.duration_ms)}</p>
            </div>
        </div>
    )
}

export default SongRow
