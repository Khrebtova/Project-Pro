import React, {useState} from 'react'

const Project = ({project, clients, employees}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(project.name)
  const [clientId, setClientId] = useState(project.client.id)
  const [employeeId, setEmployeeId] = useState(project.employee.id)
  const [completed, setCompleted] = useState(project.completed)
  const [errors, setErrors] = useState([])
  
  const handleDelete = () => {
    console.log('delete', project.name)
    fetch(`/projects/${project.id}`, { method: 'DELETE' }).then((res)=> {if (res.ok){
      console.log('deleted')
    }})
  }

  const dropDownClients = () => {
    return clients.map(client => <option key={client.id} value={client.id}>{client.name}</option>)
  }
  const dropDownEmployees = () => {
      return employees.map(employee => <option key={employee.id} value={employee.id}>{employee.name}, {employee.title}</option>)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedProject = {
      name: name,
      client_id: clientId,
      employee_id: employeeId,
      completed: completed
    }
    console.log(updatedProject)
    fetch(`/projects/${project.id}`, {
      method: 'PATCH',
      headers: {'content-type': 'application/json','accept': 'application/json'},
      body: JSON.stringify(updatedProject)
    })
    .then(res => {
            if(res.ok) {
                res.json().then(data => {
                    console.log(data)
                    setIsEditing(false)                    
                })
            } else {
                res.json().then(data => setErrors(data.errors))
            }
    })
    .catch(err => console.log(err)) 
  }

  const editProject = () => {
    return(      
      <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            id="projectname"
            autoComplete="off"
            value = {name}
            placeholder = "Project name"
            onChange = {(e) => setName(e.target.value)}
        />
        
        <select  value={clientId} onChange={(e) => setClientId(e.target.value)}>
            <option value="">Select a client</option>
            {dropDownClients()}
        </select>
        
        <select value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}>
            <option value="">Select a employee</option>
            {dropDownEmployees()}
        </select>
        <label htmlFor='completed'>Completed</label>
        <input id='completed' type={'checkbox'} checked={completed} onChange={(e) => setCompleted(e.target.checked)}/>
        {errors? errors.map(error => <p key={error}>{error}</p>) : null}
        <button type="submit">Save</button>
    </form>
    
    )
  }

  const showProject =()=>{
    return(
      <div>
        <h4>{project.name.toUpperCase()}</h4>
        {project.completed ? <p>PROJECT COMPLETED!</p> : <p>PROJECT IN PROGRESS</p>}
        <p>Client: {project.client.name}</p>
        <p>Employee: {project.employee.name}, {project.employee.title}</p>
        <button onClick={()=> {setIsEditing(!isEditing)}}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    )
  }
  return (
    <div>
      {isEditing ? editProject() : showProject()}
    </div>
  )
}

export default Project