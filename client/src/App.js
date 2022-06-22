import './App.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';
import ClientList from './pages/ClientList';
import ProjectList from './pages/ProjectList';
import NewProjectForm from './components/NewProjectForm';


function App() {
  const [user, setUser] = useState(null);
  const [clients, setClients] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [projects, setProjects] = useState([]);
  const [errors, setErrors] = useState([]);
  const [showForm, setShowForm] = useState(false);

  console.log({user})

  useEffect(() => {
    document.title = 'Project Tracker';
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

// fetching clients, employees, and projects
  useEffect(()=>{
    fetch('/employees')    
    .then(r => r.json())
    .then(data => {      
      console.log("employees:", data)
      setEmployees(data)
      })
    .catch(err => setErrors([...errors, err]))

    fetch('/clients')
    .then(r => r.json())
    .then(data => {
      console.log("clients:", data)
      setClients(data)
      })
    .catch(err => setErrors([...errors, err]))

    fetch('/projects')
    .then(r => r.json())
    .then(data => {
      console.log("projects:", data)
      setProjects(data)})
    .catch(err => setErrors([...errors, err]))
  }, [errors])

  // if (!user) return <LoginForm onLogin={setUser} />;

  return (
    <div className="App">
      <Router>
      <NavBar user={user} onLogout={setUser} />      
      {showForm ? <NewProjectForm setShowForm = {setShowForm} user={user} clients={clients} employees={employees}/> : null}
      {showForm ? <button onClick={() => setShowForm(false)}>Cancel</button> : <button onClick={() => setShowForm(true)}>New Project</button>}
        <Routes>
          <Route path="/signup" element={<SignUpForm onLogin={setUser}/>} />
          <Route path="/login" element={<LoginForm onLogin={setUser}/>} />
          <Route path="/" element={<Home user={user} clients={clients} employees={employees} projects={projects}/>} />
          <Route path="/employees" element={<EmployeeList user={user}/>} />
          <Route path="/clients" element={<ClientList user={user}/>} />
          <Route path="/projects" element={<ProjectList user={user} clients={clients} employees={employees}/>} />          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
