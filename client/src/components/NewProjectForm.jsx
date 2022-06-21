import React, { useState} from 'react'

const NewProjectForm = ({onSetAddProject}) => {
    const [name, setName] = useState('')
    const [clientId, setClientId] = useState('')
    const [employeeId, setEmployeeId] = useState('')
    // const [errors, setErrors] = useState([])
    // const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newProject = {
            name: name,
            client_id: clientId,
            employee_id: employeeId
        }
        console.log(newProject)
        onSetAddProject(false)
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='projectname'>Name of new project:</label>
        <input 
            type="text" 
            id="projectname"
            autoComplete="off"
            value = {name}
            onChange = {(e) => setName(e.target.value)}
        />
        <label>Choose Client:</label>
        <select value={clientId} onChange={e => setClientId(e.target.value)}>
            <option value="">Select a client</option>
            <option value={1}>Client 1</option>
            <option value={2}>Client 2</option>
            <option value={3}>Client 3</option>
        </select>
        <label>Choose Employee:</label>
        <select value={employeeId} onChange={e => setEmployeeId(e.target.value)}>
            <option value="">Select a employee</option>
            <option value={1}>Employee 1</option>
            <option value={2}>Employee 2</option>
            <option value={3}>Employee 3</option>
        </select>
        <button type="submit">Submit</button>
    </form>
  )
}

export default NewProjectForm