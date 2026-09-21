import React, { useState } from 'react'
import { Rnd } from "react-rnd";
import './moveWindow.scss'

const isMobile = () => window.innerWidth <= 767;

const MoveWindows = ({ children, tab_name, tab_naam, setWindowState }) => {
    const [CheckMinimize, setCheckMinimize] = useState({
        Github:false,
        Notes:false,
        Resume:false,
        Spotify:false,
        Terminalcli:false
    })
    const mobile = isMobile();
    return (
        <Rnd default={{
            x: mobile ? 0 : 450,
            y: mobile ? 30 : 25,
            width: mobile ? "100vw" : "40vw",
            height: mobile ? "85vh" : "80vh",
        }}
            minWidth={mobile ? window.innerWidth : 300}
            minHeight={200}
            disableDragging={mobile}
            enableResizing={!mobile}
            bounds="parent">
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