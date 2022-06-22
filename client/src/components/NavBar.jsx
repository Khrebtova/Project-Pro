import React from 'react'
import { useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

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
            <div>                               
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={()=> navigate('/employees')}>Employees</button>
                <button onClick={()=> navigate('/clients')}>Clients</button>
                <button onClick={()=>navigate('/projects')}>Projects</button>                
                <button onClick= {handleLogout}>Log out</button> 
            </div>
        )
    }
    
    const loggedOutButtons = () => {
        return (
            <div>
                <button onClick= {() => navigate('/signup')} >Create an account</button>
                <button onClick= {() => navigate('/login')}>Log in</button>
            </div>
        )
    }

  return (
    <div>
        <header>
            {user ? loggedinButtons() : loggedOutButtons()}
        </header>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
   
  )
}

export default NavBar;
