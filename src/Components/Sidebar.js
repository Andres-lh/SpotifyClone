
import React from 'react';
import './Styles/Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from '../Data/DataLayer';

function Sidebar(){

    const [{playlists}, dispatch] = useDataLayerValue();

    return(
        <div className="sidebar">
            <img className="sidebar-logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Logo" />
            <SidebarOption Icon={HomeIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>

            <br/>
            <p className="sidebar-title">PLAYLISTS</p>
            <hr />

            {playlists?.items?.map(playlist=>(
                <SidebarOption  title={playlist.name}/>
                
            ))}

        </div>
        
    )
}

export default Sidebar;
