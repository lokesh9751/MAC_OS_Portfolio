import React from 'react'
import './dock.scss'
const Dock = ({ windowState, setWindowState }) => {
  
  return (
    <footer className='dock'>
      <div
        onClick={() => { setWindowState(state => ({ ...state, Github: true })) }}
        className="icons github"><img src="/doc-icons/github.svg" alt="" /><p className='about'>Github</p></div>
      <div
        onClick={()=>{window.open("mailto:lokeshharbola350@gmail.com","_blank")}}
        className="icons mail"><img src="/doc-icons/mail.svg" alt="" /><p className='about'>Mail</p></div>
      <div
        onClick={()=>{window.open("https://calendar.google.com/calendar","_blank")}}
        className="icons calender"><img src="/doc-icons/calender.svg" alt="" /><p className='about'>Calender</p></div>
      <div
        onClick={() => { setWindowState(state => ({ ...state, Terminalcli: true })) }}
        className="icons cli"><img src="/doc-icons/cli.svg" alt="" /><p className='about'>Terminal</p></div>
      <div className="icons link"><img src="/doc-icons/link.svg" alt="" /><p className='about'>Link</p></div>
      <div
        onClick={() => { setWindowState(state => ({ ...state, Notes: true })) }}
        className="icons note"><img src="/doc-icons/note.svg" alt="" /><p className='about'>Notes</p></div>
      <div
        onClick={() => { setWindowState(state => ({ ...state, Resume: true })) }}
        className="icons pdf"><img src="/doc-icons/pdf.svg" alt="" /><p className='about'>Resume</p></div>
      <div
        onClick={() => { setWindowState(state => ({ ...state, Spotify: true })) }}
        className="icons spotify"><img src="/doc-icons/spotify.svg" alt="" /><p className='about'>Spotify</p></div>

    </footer>
  )
}

export default Dock