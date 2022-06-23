import React from 'react'
import { useNavigate, Link} from 'react-router-dom'

const NavBar = ({user}) => {
    const navigate = useNavigate()   

    const loggedinButtons = () => {
        return (
            <header className='App-header'>
                <h3 className='App-logo' onClick={() => navigate('/')}>Project Tracker</h3>
                <div style={{justifySelf: 'center', marginRight: '100px'}}>
                    <Link style={{color: "white", marginLeft: '20px', marginRight: '20px'}} to='/clients'>Clients</Link>
                    <Link style={{color: "white", marginLeft: '20px', marginRight: '20px'}} to='/projects'>Projects</Link>
                    <Link style={{color: "white", marginLeft: '20px', marginRight: '20px'}} to='/employees'>Employees</Link>                       
                </div>
                <Link style={{color: "white", marginRight: '20px'}} to='/logout' >Log Out</Link>                
            </header>
        )
    }
    
    const loggedOutButtons = () => {
        return (
            <header className='App-header'>
                <h3 className='App-logo' onClick={() => navigate('/')}>Project Tracker</h3>                
                <Link style={{color: "white"}} to='/login'>Log In</Link>
                <Link style={{color: "white"}} to='/signup'>Create an account</Link>                 
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
