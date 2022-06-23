import React from 'react'
import Employee from '../components/Employee'

const EmployeeList = ({employees, onDeleteEmployee}) => {
  const renderEmployees = employees.map(employee => <Employee employee={employee} key={employee.id} onDeleteEmployee={onDeleteEmployee}/>)
  
  return (
    <div>
      <h2>Employee List</h2>      
      {employees ? renderEmployees : <p>Can't find employees</p>}      
    </div>
  )
}

export default EmployeeList