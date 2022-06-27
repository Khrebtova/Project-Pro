
import React  from 'react'

const Home = ({user, clients, employees, projects}) => {
  
  const loggedInPage = () => {
      return (
        <div>
          <h2>Welcome {user.first_name} {user.last_name}! You have:</h2>
          <h4>{employees.length} employees</h4>
          <h4>{clients.length} clients</h4>
          <h4>{projects.length} projects</h4>          
        </div>
      )
    }

    return (
      <div>
        {user ? loggedInPage() : null}
      </div>
  )
}

export default Home