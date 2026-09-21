import React, { useEffect,useState } from 'react'
import Markdown from 'react-markdown'
import MoveWindows from './MoveWindows'
import './Note.scss'
import { anOldHope, docco, xt256 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Notes = ({tab_naam,setWindowState}) => {
    const [markdown, setMarkdown] = useState(null)
    useEffect(() => {
      fetch("/note.txt")
        .then(res => res.text())
        .then(text => setMarkdown(text))
    }, [])
    
  return (
    <div>
        <MoveWindows tab_naam={tab_naam} setWindowState={setWindowState} tab_name={'lokesh - notes'}>
            <div className="note-window">
                {markdown ? <SyntaxHighlighter language="javascript" style={xt256}>{markdown}</SyntaxHighlighter> : <p>Loading.......</p>}
            </div>
        </MoveWindows>
    </div>
  )
}

export default Notes