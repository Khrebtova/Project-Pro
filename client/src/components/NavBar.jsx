import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = ({user, onLogout}) => {
    const navigate = useNavigate()
    
    const handleLogout = () => {
        console.log("logout")
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(() => {
            onLogout(null)
            navigate('/login')
        })        
    }
    
  return (
    <div> 
        {user ? `welcome ${user.username}` : "please login"}
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick= {() => navigate('/signup')} >Create an account</button>
      <button onClick= {() => navigate('/login')}>Log in</button>
      <button onClick= {handleLogout}>Log out</button> 
    </div>
  )
}

export default NavBar;
