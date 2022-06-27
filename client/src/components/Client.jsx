import React, {useState} from 'react'

const Client = ({client, onDeleteClient}) => {
  const [showProjects, setShowProjects] = useState(false)
  const listOfProjects = client.projects.map(project => project.completed ? <li key={project.id}>{project.name}, COMPLETED</li> : <li key={project.id}>{project.name}, IN PROGRESS</li>)

  const handleDelete = () =>{    
    fetch(`/clients/${client.id}`, {method: 'DELETE'})
    .then(res => {
      if(res.ok) {
        onDeleteClient(client.id)
      }else{
        console.log('error: ', res.errors)
      }
    })  
  }

  
  return (
    <div  onClick={()=>{setShowProjects(!showProjects)}} className='clientCard'>    
      <h3>{client.name}</h3>
      {client.projects_count === 1 ? <p> 1 project ↓</p> : <p>{client.projects_count} projects ↓</p>}
      {showProjects ? listOfProjects : null}
      {client.projects_count === 0 ? <button onClick={handleDelete}>Delete</button> : null}      
    </div>
  )
}

export default Client