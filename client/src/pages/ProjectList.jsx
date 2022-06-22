import React, {useState, useEffect} from 'react'
import Project from '../components/Project'

const ProjectList = ({user, clients, employees, projects, onDeleteProject, onUpdateProject}) => {
  // const [projects, setProjects] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  // const [errors, setErrors] = useState([])
  
  // useEffect(() => {
  //   fetch('/projects')
  //     .then(r => r.json())
  //     .then(data => {
  //       setProjects(data)
  //       setIsLoading(false)})
  //       .catch(err => setErrors(err))
  //     }, [])

  const renderProjects = projects.map(project => <Project key={project.id} project={project} clients={clients} employees={employees} onDeleteProject={onDeleteProject} onUpdateProject={onUpdateProject}/>)

  return (
    <div>
      <h2>Project List</h2>
      {projects ? renderProjects : <p>Loading...</p>}   
      
      {/* {projects.map(project => <li key={project.id}>{project.name}, employee: {project.employee.name}, {project.employee.title}, client: {project.client.name}</li>)} */}
      {/* {errors ? errors.map(error => <p key={error}>{error}</p>) : null}   */}
    
    </div>
  )
}

export default ProjectList;