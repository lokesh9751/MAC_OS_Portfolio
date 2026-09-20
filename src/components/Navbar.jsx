import React from 'react'
import './navbar.scss'
import DateTime from './DateTime'
const Navbar = () => {
  return (
    <nav>
        <div className="left">
            <div className="apple_logo"><img src="navbar-icons/apple.svg"/></div>
            <div className="nav-item"><p>Lokesh Harbola</p></div>
            <div className="nav-item"><p>File</p></div>
            <div className="nav-item"><p>Window</p></div>
            <div className="nav-item"><p>Terminal</p></div>
        </div>
        <div className="right">
            <div className="apple_logo"><img src="navbar-icons/wifi.svg"/></div>
            <div className="nav-item"><DateTime /></div>
        </div>
    </nav>
    
  )
}

export default Navbar