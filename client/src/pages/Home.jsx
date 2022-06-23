import React  from 'react'

const Home = ({user, clients, employees, projects}) => {
  console.log(user)
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
        {user ? loggedInPage() : <h2>Please log in</h2>}
      </div>
  )
}

export default Home