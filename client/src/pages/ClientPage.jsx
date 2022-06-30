import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';

const ClientPage = () => {
  const {id} = useParams();
  console.log(id);

  const [client, setClient] = useState(null)
  console.log(client)
  
  useEffect(() => {
    fetch(`/clients/${id}`)
    .then(res =>{
      if (res.ok) {
        res.json().then(data=>setClient(data))
      }else{
        res.json().then(data=>console.log(data.errors))
    }
  })
}, [id])

if (!client) {
  return <div>Loading...</div>
}


  return (
    <div>
      Client page        
        <h1>{client.name}</h1>
        <h4>Works with: </h4>
        {client.employees.map(employee => <li id={employee.id} key={employee.id}>{employee.name}, {employee.title}</li>)}
        <h4>Project list: </h4>
        {client.projects.map(project => <li id={project.id} key={project.id}>{project.name}</li>)}
    </div>
  )
}

export default ClientPage