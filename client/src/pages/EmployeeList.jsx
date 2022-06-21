import React, {useEffect, useState} from 'react'
import Employee from '../components/Employee'

const EmployeeList = () => {
  const [employees, setEmployees] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    fetch('/employees')    
      .then(r => r.json())
      .then(data => {      
        console.log(data)
        setEmployees(data)
        setIsLoading(false)
      })
      .catch(err => setErrors(err))
    }, [])


  return (
    <div>
      <h2>Employee List</h2>
      {isLoading ? <p>Loading...</p> : null}
      <Employee />
      {employees.map(employee => <li key={employee.id}>{employee.name}, projects: {employee.projects_count}</li>)}
      {errors ? errors.map(error => <p key={error}>{error}</p>) : null}
    </div>
  )
}

export default EmployeeList