import React, {useState} from 'react'

const Client = ({client}) => {
  const [showProjects, setShowProjects] = useState(false)
  const listOfProjects = client.projects.map(project => project.completed ? <li key={project.id}>{project.name}, COMPLETED</li> : <li key={project.id}>{project.name}, IN PROGRESS</li>)

  return (
    <div onClick={()=>{setShowProjects(!showProjects)}}>
      <h4>{client.name}</h4>
      {client.projects_count === 1 ? <p>{client.projects_count} project:</p> : <p>{client.projects_count} projects:</p>}      
      {showProjects ? listOfProjects : null}        
    </div>
  )
}

export default Client