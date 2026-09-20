import React from 'react'
import { Rnd } from "react-rnd";
import './moveWindow.scss'
const MoveWindows = ({ children }) => {
    return (
        <Rnd default={{
            x: 450,
            y: 100,
            width: "40vw",
            height: "80vh",
        }}
            minWidth={300}
            minHeight={200}>
            <div className="main-content">
                <div className="nav">
                    <div className="small-buttons">
                        <div className="buttons red"></div>
                        <div className="buttons yellow"></div>
                        <div className="buttons green"></div>
                    </div>
                    <div className="terminal_location"><p>lokesh_harbola - zsh</p></div>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MoveWindows