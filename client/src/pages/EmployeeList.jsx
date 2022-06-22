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
        setEmployees(data)
        setIsLoading(false)
      })
      .catch(err => setErrors(err))
    }, [])

    const renderEmployees = employees.map(employee => <Employee employee={employee} key={employee.id} />)
  return (
    <div>
      <h2>Employee List</h2>
      {isLoading ? <p>Loading...</p> : renderEmployees}
      
      {errors ? errors.map(error => <p key={error}>{error}</p>) : null}
    </div>
  )
}

export default EmployeeList