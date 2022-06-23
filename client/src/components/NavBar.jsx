import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Box, Button, Stack } from '@mui/material'
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const NavBar = ({user, onLogout}) => {
    const navigate = useNavigate()
    
    const handleLogout = () => {
        fetch('/logout', {method: 'DELETE'})
        .then((res) => {
            if (res.ok) {
                onLogout(null)
                navigate('/login')
            }
        })        
    }

    const loggedinButtons = () => {
        return (
            <header className='App-header'>
                <h3 onClick={() => navigate('/')}>Project Tracker</h3>                       
                <button onClick={()=> navigate('/employees')}>Employees</button>
                <button onClick={()=> navigate('/clients')}>Clients</button>
                <button onClick={()=>navigate('/projects')}>Projects</button>                
                <button onClick= {handleLogout}>Log out</button> 
            </header>
        )
    }
    
    const loggedOutButtons = () => {
        return (
            <header className='App-header'>
                <h3 onClick={() => navigate('/')}>Project Tracker</h3>  
                <button onClick= {() => navigate('/signup')} >Create an account</button>
                <button onClick= {() => navigate('/login')}>Log in</button>
            </header>
        )
    }

  return (
    <>        
        {user ? loggedinButtons() : loggedOutButtons()}    
    </>
   
  )
}

export default NavBar;
