

import React  from 'react'
import {useNavigate} from 'react-router-dom'

const Home = ({user, clients, employees, projects}) => {
  const navigate = useNavigate()
  const loggedInPage = () => {
      return (
        <div>
          <h2>Welcome {user.first_name} {user.last_name}! You have:</h2>
          <h4 onClick={()=>navigate('/employees')}>{employees.length} employees</h4>
          <h4 onClick={()=>navigate('/clients')}>{clients.length} clients</h4>
          <h4 onClick={()=>navigate('/projects')}>{projects.length} projects</h4>
          <h4 onClick={()=>navigate('/user')}>{user.todos.length} items in your todo list</h4>          
        </div>
      )
    }

    return (
      <div>
        {user ? loggedInPage() : <h2>Please Sign Up or Login</h2>}
      </div>
  )
}

export default Home