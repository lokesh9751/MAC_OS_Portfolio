import React from 'react'
import "./style.scss";
import Dock from './components/Dock';
import Navbar from './components/Navbar';
import MoveWindows from './components/tabs/MoveWindows';
import Github from './components/tabs/Github';
import Notes from './components/tabs/Notes';
import Resume from './components/tabs/Resume';
import Spotify from './components/tabs/Spotify';

function App() {
  return (
    <main>
      <Navbar />
      <Dock />
      <Github />
      <Notes />
      <Resume />
      <Spotify />
    </main>
  )
}

export default App