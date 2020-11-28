import React from 'react';
import './Footer.css'
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
                <h1>Bla1</h1>
            </div>
            <div className="footer-center">
                <ShuffleIcon className="footer-shuffle" />
                <SkipPreviousIcon className="footer-previous" />
                <PlayCircleOutlineIcon className="footer-play" fontSize="Large"/>
                <SkipNextIcon className="footer-next" />
                <RepeatIcon className="footer-repeat" />
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