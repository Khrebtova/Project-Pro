import React, {useState} from 'react'

const Employee = ({employee, onDeleteEmployee}) => {
  const [showProjects, setShowProjects] = useState(false)
  const listOfProjects = employee.projects.map(project => project.completed ? <li key={project.id}>{project.name}, COMPLETED</li> : <li key={project.id}>{project.name}, IN PROGRESS</li>)

  const handleDelete = () =>{
    fetch(`/employees/${employee.id}`, {method: 'DELETE'})
    .then(res => {
      if(res.ok) {
        onDeleteEmployee(employee.id)
      }else{
        console.log('error: ', res.errors)
      }
    }) 
  }

  return (
    <div onClick={()=>{setShowProjects(!showProjects)}}>
      <h4>{employee.name}</h4>
      {employee.projects_count === 1 ? <p>{employee.projects_count} project:</p> : <p>{employee.projects_count} projects:</p>}      
      {showProjects ? listOfProjects : null} 
      {employee.projects_count === 0 ? <button onClick={handleDelete}>Delete</button> : null}       
    </div>
  )
}

export default Employee