import React from 'react';
import './Styles/Footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import {Grid, Slider} from "@material-ui/core";


function Footer(){
    return(
        <div className="footer">
            <div className="footer-left">
                <img className="footer-album-logo"
                src="https://yt3.ggpht.com/ytc/AAUvwnjheQ_52iOyoeS1wXVZKlO1BZBPL_kUUjJH9iOtNQ=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                <div className="footer-songinfo">
                    <h4>Song</h4>
                    <p>Radiohead</p>
                </div>
            </div>
            <div className="footer-center">
                <ShuffleIcon className="footer-icon" />
                <SkipPreviousIcon className="footer-icon" />
                <PlayCircleOutlineIcon className="footer-icon" fontSize="Large"/>
                <SkipNextIcon className="footer-icon" />
                <RepeatIcon className="footer-icon"/>
            </div>

            <div className="footer-right">
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon />
                </Grid>
             <Grid item>
                 <VolumeDownIcon />
             </Grid>
            <Grid item xs>
                <Slider />
            </Grid>
            </Grid>
      
            </div>

        </div>
    )
}

export default Footer;