import React, {useState} from 'react'
import Employee from '../components/Employee'

const EmployeeList = ({employees, onDeleteEmployee}) => {
  const [search, setSearch] = useState('')
  let employeeList = employees.filter(employee => employee.name.toLowerCase().includes(search) || employee.title.toLowerCase().includes(search))
  const renderEmployees = employeeList.map(employee => <Employee employee={employee} key={employee.id} onDeleteEmployee={onDeleteEmployee} />)
  
  
  return (
    <>
      <h2>Employee List  <input type='text' placeholder=' 🔍 SEARCH' onChange={(e)=>setSearch(e.target.value.toLowerCase())}/></h2>
      
      <div className='clientCardContainer'>      
        {employees ? renderEmployees : <p>Can't find employees</p>} 
      </div>       
    </>
  )
}

export default EmployeeList