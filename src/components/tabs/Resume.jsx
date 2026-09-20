import React from 'react'
import MoveWindows from './MoveWindows'
import './resume.scss'
const Resume = () => {
  return (
    <MoveWindows>
        <div className='resume-tab'>
            <iframe  src="/resume.pdf"></iframe>
        </div>
    </MoveWindows>
  )
}

export default Resume