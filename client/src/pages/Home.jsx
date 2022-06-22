import React  from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({user, clients, employees, projects}) => {
  const navigate = useNavigate()  
  const loggedInPage = () => {
      return (
        <div>
          <h2>Welcome {user.first_name} {user.last_name}! You have:</h2>
          <h4>{employees.length} employees</h4>
          <h4>{clients.length} clients</h4>
          <h4>{projects.length} projects</h4>
          <button onClick = {() => navigate('/projects/new')}>Assign new project</button>
        </div>
      )
    }
    return (
    <div>
      <h1>Project Tracker</h1>
       {user ?  loggedInPage() : "please login"}

    </div>
  )
}

export default Home