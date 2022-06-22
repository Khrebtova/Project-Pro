import React from 'react'
import Project from '../components/Project'

const ProjectList = ({user, clients, employees, projects, onDeleteProject, onUpdateProject}) => {
  const renderProjects = projects.map(project => <Project key={project.id} project={project} clients={clients} employees={employees} onDeleteProject={onDeleteProject} onUpdateProject={onUpdateProject}/>)

  return (
    <div>
      <h2>Project List</h2>
      {projects ? renderProjects : <p>No projects so far</p>}            
    </div>
  )
}

export default ProjectList;