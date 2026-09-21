import React, { useState } from 'react'
import { Rnd } from "react-rnd";
import './moveWindow.scss'
const MoveWindows = ({ children, tab_name, tab_naam, setWindowState }) => {
    const [CheckMinimize, setCheckMinimize] = useState({
        Github:false,
        Notes:false,
        Resume:false,
        Spotify:false,
        Terminalcli:false
    })
    return (
        <Rnd default={{
            x: 450,
            y: 25,
            width: "40vw",
            height: "80vh",
        }}
            minWidth={300}
            minHeight={200}>
            <div className="main-content">
                <div className="nav">
                    <div className="small-buttons">
                        <div onClick={() => setWindowState(state => ({ ...state, [tab_naam]: false }))} className="buttons red">
                            <div className='redclose'></div>
                        </div>
                        <div onClick={() => setWindowState(state => ({ ...state, [tab_naam]: false }))} className="buttons yellow">
                            <div className='yellowmini'></div>
                        </div>
                        <p className="buttons green">
                            <div className='greenmaxi'></div>
                        </p>
                    </div>
                    <div className="terminal_location"><p>{tab_name}</p></div>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MoveWindows