import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Employee = ({employee, onDeleteEmployee}) => {
  const [showProjects, setShowProjects] = useState(false)
  const listOfProjects = employee.projects.map(project => project.completed ? <li key={project.id}>{project.name}, COMPLETED</li> : <li key={project.id}>{project.name}, IN PROGRESS</li>)
  const navigate = useNavigate()

  const handleDelete = () =>{
    fetch(`/api/employees/${employee.id}`, {method: 'DELETE'})
    .then(res => {
      if(res.ok) {
        onDeleteEmployee(employee.id)
      }else{
        console.log('error: ', res.errors)
      }
    }) 
  }

  const handleShowEmployee =() => {    
    navigate('/employees/' + employee.id)
  }

  return (
    <div onClick={()=>{setShowProjects(!showProjects)}} className='clientCard'>      
      <h4>{employee.name}, {employee.title}</h4>
      
      {employee.projects_count === 1 ? <p> 1 project ↓</p> : <p>{employee.projects_count} projects ↓</p>}      
      {showProjects ? listOfProjects : null} 
      {employee.projects_count === 0 ? <button onClick={handleDelete}>Delete</button> : null} 
      <button onClick={handleShowEmployee}>Go to Employee page</button>      
    </div>
  )
}

export default Employee