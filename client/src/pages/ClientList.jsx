import React from 'react'
import Client from '../components/Client'

const ClientList = ({clients, onDeleteClient}) => {
   
  const renderClients = clients.map(client => <Client client={client} onDeleteClient={onDeleteClient} key={client.id} />)
  
  return (
    <div>
      <h2>Client List</h2>
      {clients ? renderClients : <p>Can't find clients</p>}      
    </div>
  )
}

export default ClientList