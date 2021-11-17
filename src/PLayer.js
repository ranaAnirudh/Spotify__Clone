import React from 'react'
import Body from './Body'
import './player.css'
import Sidebar from "./Sidebar"
import Footer from "./Footer"
function PLayer({spotify}) {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar/>
                <Body/>
            </div>
           <Footer/>
        </div>
    )
}

export default PLayer
