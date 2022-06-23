import React from 'react'
import Client from '../components/Client'

const ClientList = ({clients}) => {
   
  const renderClients = clients.map(client => <Client client={client} key={client.id} />)
  
  return (
    <div>
      <h2>Client List</h2>
      {clients ? renderClients : <p>Can't find clients</p>}      
    </div>
  )
}

export default ClientList