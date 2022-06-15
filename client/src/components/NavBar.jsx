import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    
  return (
    <div>        
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick= {() => navigate('/signup')} >Create an account</button>
      <button onClick= {() => navigate('/login')}>Log in</button>
      <button onClick= {() => console.log('logout!')}>Log out</button> 
    </div>
  )
}

export default NavBar
