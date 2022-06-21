import React, {useState, useEffect} from 'react'

import Project from '../components/Project'
import NewProjectForm from '../components/NewProjectForm'

const ProjectList = () => {
  
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errors, setErrors] = useState([])
  const [addProject, setAddProject] = useState(false)

  useEffect(() => {
    fetch('/projects')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setProjects(data)
        setIsLoading(false)})
        .catch(err => setErrors(err))
      }, [])

  return (
    <div>
      <h2>Project List</h2>
      <Project />
      {addProject ? <NewProjectForm onSetAddProject = {setAddProject}/> : null}
      {isLoading ? <p>Loading...</p> : null}
      {projects.map(project => <li key={project.id}>{project.name}, employee: {project.employee.name}, {project.employee.title}, client: {project.client.name}</li>)}
      {errors ? errors.map(error => <p key={error}>{error}</p>) : null}
      <button onClick={() => setAddProject(true)}>Assign New Project Project</button>
    </div>
  )
}

export default ProjectList;