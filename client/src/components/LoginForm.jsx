import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({onLogin}) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    console.log(username, password)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("trying to login")
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          }).then((r) => {            
            if (r.ok) {
                r.json().then((user) => {
                    onLogin(user)
                    navigate('/')                    
                });
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
          });
    }

    return (
        <div>
            <h2> Already have an account? Please log In</h2>
            <form onSubmit={handleSubmit}>
                
                <input type="text" id="username" placeholder="username"  autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" id="password" placeholder="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
                {errors? errors.map(error => <p key={error}>{error}</p>) : null}
            </form>
            <h2>Or create new account</h2>
            <button onClick={()=>navigate('/signup')}>Sign Up</button>
        </div>
  )
}

export default LoginForm