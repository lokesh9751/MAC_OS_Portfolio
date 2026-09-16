import React from 'react'
import MoveWindows from './MoveWindows'
import github from '../../assests/github.json'
import './github.scss'

const Gitcard = ({data = {id:1,image:"",title:"",description:"",tags:[],repoLink:"",demoLink:""}}) =>{
    return (
        <div className="card">
            <img src={data.image} />
            <p>{data.title}</p>
            <p>{data.description}</p>

            <div className="tags">
                {
                    data.tags.map(tag => <p className='tags-        indi'>{tag}</p>)
                }
            </div>

            <div className="links">
                <a href={data.repoLink}></a>
                <a href={data.demoLink}></a>
            </div>
        </div>
    )
}

const Github = () => {
  return (
    <MoveWindows>
        <div className="cards">
            {github.map(project => {
                return <Gitcard data={project}/>   
            })}
        </div>
    </MoveWindows>
  )
}

export default Github