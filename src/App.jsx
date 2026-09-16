import React from 'react'
import "./style.scss";
import Dock from './components/Dock';
import Navbar from './components/Navbar';
import MoveWindows from './components/tabs/MoveWindows';
import Github from './components/tabs/Github';

function App() {
  return (
    <main>
      <Navbar />
      <Dock />
      <Github />
    </main>
  )
}

export default App