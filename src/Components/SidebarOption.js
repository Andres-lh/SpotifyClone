import React from 'react'
import './Styles/SidebarOption.css'
import {useDataLayerValue} from '../Data/DataLayer';

function SidebarOption({spotify, title, Icon, id}) {

    const [{}, dispatch] = useDataLayerValue();

    const changePlaylist = (id, e) => {
        dispatch({
            type: 'SET_CURRENT_PLAYLIST',
            id: id
        });

    }


    return (
        <div className="sidebar-option">
            {Icon && <Icon className="sidebar-option-icon"/>}
            {Icon ? <span>{title}</span> : <p onClick={(e)=> changePlaylist(id, e )}>{title}</p> }
        </div>
    )
}

export default SidebarOption
