import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'

const NewProjectForm = ({setShowForm, user, clients, employees, onAddProject}) => {
    
    const navigate = useNavigate()    
    const [name, setName] = useState('')
    const [clientId, setClientId] = useState('')
    const [employeeId, setEmployeeId] = useState('')
    const [errors, setErrors] = useState([])
    // const [isLoading, setIsLoading] = useState(false)

    const dropDownClients = () => {
        return clients.map(client => <option key={client.id} value={client.id}>{client.name}</option>)
    }
    const dropDownEmployees = () => {
        return employees.map(employee => <option key={employee.id} value={employee.id}>{employee.name}, {employee.title}</option>)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newProject = {
            name: name,
            client_id: clientId,
            employee_id: employeeId
        }
        console.log(newProject)
        fetch('/projects', {
            method: 'POST',
            headers: {'content-type': 'application/json', 'accept': 'application/json'},
            body: JSON.stringify(newProject)
        })
        .then(res => {
                if(res.ok) {
                    res.json().then(data => {
                        onAddProject(data)
                        setShowForm(false)
                        navigate('/projects')
                    })
                } else {
                    res.json().then(data => {
                        setErrors(data.errors)                        
                    })
                }
        })
        .catch(err => console.log(err))        
    }

  return (
    <form className='App-project-form' onSubmit={handleSubmit}>
        <h3>New Project</h3>
        <input 
            type="text" 
            id="projectname"
            autoComplete="off"
            value = {name}
            placeholder = "Project name"
            onChange = {(e) => setName(e.target.value)}
        />
        
        <select  onChange={(e) => setClientId(e.target.value)}>
            <option value="">Select a client</option>
            {dropDownClients()}
        </select>
        
        <select  onChange={(e) => setEmployeeId(e.target.value)}>
            <option value="">Select a employee</option>
            {dropDownEmployees()}
        </select>
        {errors? errors.map(error => <p key={error}>{error}</p>) : null}
        <button type="submit">Submit</button>
    </form>
  )
}

export default NewProjectForm