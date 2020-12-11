import React from 'react';
import './Styles/Header.css' ;
import SearchICon from "@material-ui/icons/Search";
import {Avatar} from "@material-ui/core"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useDataLayerValue } from '../Data/DataLayer';

function Header() {

    const [{user}, dispatch] = useDataLayerValue();

    return (
        <div className='header'>
            <div className='header-left'>
                <SearchICon/>
                <input 
                    placeholder="Search for Artist, Songs, or Podcasts"
                    type="text"
                />
            </div>

            <div className='header-right'>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
