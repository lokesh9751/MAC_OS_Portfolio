import React from 'react'
import MoveWindows from './MoveWindows'
import './resume.scss'
const Resume = ({tab_naam,setWindowState}) => {
  return (
    <MoveWindows tab_naam={tab_naam} setWindowState={setWindowState} tab_name={'lokesh - resume'}>
        <div className='resume-tab'>
            <iframe  src="/resume.pdf"></iframe>
        </div>
    </MoveWindows>
  )
}

export default Resume