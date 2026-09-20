import React from 'react'
import MoveWindows from './MoveWindows'
import github from '../../assests/github.json'
import './github.scss'

const Gitcard = ({data = {id:1,image:"",title:"",description:"",tags:[],repoLink:"",demoLink:""}}) =>{
    return (
        <div className="card">
            <img src={data.image} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <div className="tags">
                {
                    data.tags.map(tag => <p className='tags-indi' key={tag}>{tag}</p>)
                }
            </div>

            <div className="links">
                <a target='_blank' href={data.repoLink}>Repo</a>
                <a target='_blank' href={data.demoLink}>Demo</a>
            </div>
        </div>
    )
}

const Github = () => {
  return (
    <MoveWindows>
        <div className="cards">
            {github.map(project => {
                return <Gitcard key={project.id} data={project}/>   
            })}
        </div>
    </MoveWindows>
  )
}

export default Github