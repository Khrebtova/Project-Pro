import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';
import ClientList from './pages/ClientList';
import ProjectList from './pages/ProjectList';


function App() {
  const [user, setUser] = React.useState(null);
  
  console.log({user})

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <LoginForm onLogin={setUser} />;

  return (
    <div className="App">
      <Router>
      <NavBar user={user} onLogout={setUser}/>
      <h1>Project Pro application for assigning projects to your epmloyees</h1>
        <Routes>
          <Route path="/signup" element={<SignUpForm onLogin={setUser}/>} />
          <Route path="/login" element={<LoginForm onLogin={setUser}/>} />
          <Route path="/" element={<Home user={user}/>} />
          <Route path="/employees" element={<EmployeeList user={user}/>} />
          <Route path="/clients" element={<ClientList user={user}/>} />
          <Route path="/projects" element={<ProjectList user={user}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
