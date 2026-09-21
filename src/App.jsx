import React, { useState } from 'react'
import "./style.scss";
import Dock from './components/Dock';
import Navbar from './components/Navbar';
import Github from './components/tabs/Github';
import Notes from './components/tabs/Notes';
import Resume from './components/tabs/Resume';
import Spotify from './components/tabs/Spotify';
import Terminalcli from './components/tabs/Terminalcli';


function App() {
  const [windowState, setWindowState] = useState({
    Github:false,
    Notes:false,
    Resume:false,
    Spotify:false,
    Terminalcli:false
  })
  return (
    <main>
      <Navbar />
      <Dock windowState={windowState} setWindowState={setWindowState}/>

      {windowState.Github && <Github tab_naam='Github' setWindowState={setWindowState}/>}
      {windowState.Notes && <Notes tab_naam='Notes' setWindowState={setWindowState}/>}
      {windowState.Resume && <Resume tab_naam='Resume' setWindowState={setWindowState}/>}
      {windowState.Spotify && <Spotify tab_naam='Spotify' setWindowState={setWindowState}/>}
      {windowState.Terminalcli && <Terminalcli tab_naam='Terminalcli' setWindowState={setWindowState}/>}
    </main>
  )
}

export default App