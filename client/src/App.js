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
import NewClientForm from './components/NewClientForm';
import NewEmployeeForm from './components/NewEmployeeForm';
import Logout from './pages/Logout';
import ShowFormButtons from './components/ShowFormButtons';
import ClientPage from './pages/ClientPage';
import EmployeePage from './pages/EmployeePage';
import UserProfile from './pages/UserProfile';

function App() {
  const [user, setUser] = useState(null);
  const [clients, setClients] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [projects, setProjects] = useState([]);  
  const [showForm, setShowForm] = useState(false);
  const [showFormClient, setShowFormClient] = useState(false);
  const [showFormEmployee, setShowFormEmployee] = useState(false);


//auto login if user is logged in
  useEffect(() => {
    document.title = 'Project Tracker';
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((data) => setUser(data));
      }
    });
  }, []);

// fetching clients, employees, and projects
  useEffect(()=>{    
    fetch('/employees')    
    .then(r => r.json())
    .then(data => {      
      setEmployees(data)
      })
    .catch(err => console.log(err))

    fetch('/clients')
    .then(r => r.json())
    .then(data => {
      setClients(data)
      })
    .catch(err => console.log(err))  
  }, [user, projects]) 

  useEffect(()=>{    
     fetch('/projects')
    .then(r => r.json())
    .then(data => {
      setProjects(data)})
    .catch(err => console.log(err))
  }, [user])

  const deleteProject = (id) => {
    const newlist = projects.filter(project => project.id !== id)
    setProjects(newlist)
  }

  const updateProject = (updatedProject) => {
    const newlist = projects.map(project => project.id === updatedProject.id ? updatedProject : project)
    setProjects(newlist)

  }

  const addProject = (newProject) => {    
    const newlist = [...projects, newProject]
    setProjects(newlist)
  }

  const addClient = (newClient) => {    
    const newlist = [...clients, newClient]
    setClients(newlist)
  }

  const deleteClient = (id) => {
    const newlist = clients.filter(client => client.id !== id)
    setClients(newlist)
  }

  const addEmployee = (newEmployee) => {
    const newList = [...employees, newEmployee]
    setEmployees(newList)
  }

  const deleteEmployee = (id) => {
    const newList = employees.filter(employee => employee.id !== id)
    setEmployees(newList)
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
      <NavBar user={user} /> 
      {showFormClient ? <NewClientForm onSetShowFormClient={setShowFormClient} onAddClient={addClient}/> : null}
      {showFormEmployee? <NewEmployeeForm onSetShowFormEmployee={setShowFormEmployee} onAddEmployee={addEmployee}/> : null }  
      {showForm ? <NewProjectForm setShowForm = {setShowForm} clients={clients} employees={employees} onAddProject={addProject}/> : null}      
      <ShowFormButtons onSetShowForm={setShowForm} onSetShowFormClient={setShowFormClient} onSetShowFormEmployee={setShowFormEmployee}/>
        <Routes>
          <Route path="/" element={<Home user={user} clients={clients} employees={employees} projects={projects}/>} />
          <Route path="/logout" element={<Logout onLogout={setUser} />} />
          <Route path="/employees" element={<EmployeeList employees={employees} onDeleteEmployee={deleteEmployee} />} />
          <Route path="/clients" element={<ClientList clients={clients} onDeleteClient={deleteClient} />} />
          <Route path="/clients/:id" element={<ClientPage />} />
          <Route path="/employees/:id" element={<EmployeePage />} />
          <Route path="/projects" element={<ProjectList projects={projects} onUpdateProject={updateProject} onDeleteProject={deleteProject} clients={clients} employees={employees}/>} />          
          <Route path="/user" element={<UserProfile user={user}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
