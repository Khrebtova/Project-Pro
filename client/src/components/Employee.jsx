import React from 'react'

const Employee = ({employee}) => {
  const [showProjects, setShowProjects] = useState(false)
  const listOfProjects = employee.projects.map(project => <li key={project.id}>{project.name}</li>)

  return (
    <div onClick={()=>{setShowProjects(!showProjects)}}>
      <h4>{employee.name}</h4>
      {employee.projects_count === 1 ? <p>{employee.projects_count} project:</p> : <p>{employee.projects_count} projects:</p>}      
      {showProjects ? listOfProjects : null}        
    </div>
  )
}

export default Employee