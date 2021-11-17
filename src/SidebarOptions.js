import React from 'react'
import'./sidebar.css'
function SidebarOptions({title,Icon}) {
    return (
        <div className="sidebaroption">
        {Icon &&<Icon className="sidebaroption__icon"/>}
           {Icon? <h4>{title}</h4>:<p>{title}</p>}
        </div>
    )
}

export default SidebarOptions
