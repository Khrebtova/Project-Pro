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

//auto login if user is logged in
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
  }, [user, errors])

  const deleteProject = (id) => {
    const newlist = projects.filter(project => project.id !== id)
    setProjects(newlist)
  }

  const updateProject = (updatedProject) => {
    const newlist = projects.map(project => project.id === updatedProject.id ? updatedProject : project)
    setProjects(newlist)
  }

  const addProject = (newProject) => {
    console.log("newProject:", newProject)
    const newlist = [...projects, newProject]
    setProjects(newlist)
  }

  if (!user) return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home user={user}/>} />
            <Route path="/signup" element={<SignUpForm onLogin={setUser}/>} />
            <Route path="/login" element={<LoginForm onLogin={setUser}/>} />          
        </Routes>
      </Router>
    </div>
  )

  return (
    <div className="App">
      <Router>
      <NavBar user={user} onLogout={setUser} />      
      {showForm ? <NewProjectForm setShowForm = {setShowForm} user={user} clients={clients} employees={employees} onAddProject={addProject}/> : null}
      {showForm ? <button onClick={() => setShowForm(false)}>Cancel</button> : <button onClick={() => setShowForm(true)}>New Project</button>}
        <Routes>
          <Route path="/signup" element={<SignUpForm onLogin={setUser}/>} />
          <Route path="/login" element={<LoginForm onLogin={setUser}/>} />
          <Route path="/" element={<Home user={user} clients={clients} employees={employees} projects={projects}/>} />
          <Route path="/employees" element={<EmployeeList user={user}/>} />
          <Route path="/clients" element={<ClientList user={user} clients={clients}/>} />
          <Route path="/projects" element={<ProjectList user={user} projects={projects} onUpdateProject={updateProject} onDeleteProject={deleteProject} clients={clients} employees={employees}/>} />          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
