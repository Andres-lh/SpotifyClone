import React from 'react'
import './Styles/SidebarOption.css'

function SidebarOption({title, Icon}) {
    return (
        <div className="sidebar-option">
            {Icon && <Icon className="sidebar-option-icon"/>}
            { Icon ? <span>{title}</span> : <p>{title}</p> }
        </div>
    )
}

export default SidebarOption
