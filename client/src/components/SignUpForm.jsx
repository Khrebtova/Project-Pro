import React, { useState } from 'react'

const SignUpForm = ({onLogin}) => {
    const defaultData = {
        "username": '',
        "password": '',
        "passwordConfirmation": '',
        "firstName": '',
        "lastName": '',
        "role": '',
    }
    const [newUser, setNewUser] = useState(defaultData)
    
    const handleChange = (e) => {
        let key = e.target.id
        let value = e.target.value
        let formData = {...newUser, [key]: value}
        console.log(formData)
        setNewUser(formData)}
    

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [passwordConfirmation, setPasswordConfirmation] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [role, setRole] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        // setIsLoading(true);
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: newUser.username,
            password: newUser.password,
            password_confirmation: newUser.passwordConfirmation,
            first_name: newUser.firstName,
            last_name: newUser.lastName,
            role: newUser.role,
          }),
        }).then((r) => { 
        //   setIsLoading(false);
          
          if (r.created) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }
    
  return (
    <form onSubmit={handleSubmit}>
      
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={newUser.username}
        //   onChange={(e) => setUsername(e.target.value)}
        onChange={handleChange}
        />
      
      
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={newUser.password}
        //   onChange={(e) => setPassword(e.target.value)}
          onChange={handleChange}
          autoComplete="current-password"
        />
      
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="passwordConfirmation"
          value={newUser.passwordConfirmation}
          onChange={handleChange}
        //   onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={newUser.firstName}
          onChange={handleChange}
          // onChange={(e) => setFirstName(e.target.value)}
        />
      
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={newUser.lastName}
          onChange={handleChange}
        //   onChange={(e) => setLastName(e.target.value)}
        />
     
        <label htmlFor="role">Your role</label>
        <input 
        type="text"         
          id="role"
          value={newUser.role}
          onChange={handleChange}
          // onChange={(e) => setRole(e.target.value)}
        />
     
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>     
      
        {errors.map((err) => (<h2 key={err}>{err}</h2>))}
      
    </form>

  )
}

export default SignUpForm