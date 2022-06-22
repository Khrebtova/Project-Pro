import React , {useEffect, useState}from 'react'
import Client from '../components/Client'

const ClientList = ({user, clients}) => {
  // const [clients, setClients] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errors, setErrors] = useState([])

  // useEffect(() => {
  //   fetch('/clients')    
  //     .then(r => r.json())
  //     .then(data => {        
  //       setClients(data)
  //       setIsLoading(false)
  //     })
  //     .catch(err => setErrors(err))
  //   }, [])
    console.log(clients)

  return (
    <div>
      <h2>Client List</h2>
      {isLoading ? <p>Loading...</p> : null}
      <Client />
      {clients.map(client => <li key={client.id}>{client.name}, projects: {client.projects_count}</li>)}
      {errors ? errors.map(error => <p key={error}>{error}</p>) : null}
    </div>
  )
}

export default ClientList