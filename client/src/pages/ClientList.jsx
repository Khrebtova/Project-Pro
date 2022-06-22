import React , {useEffect, useState}from 'react'
import Client from '../components/Client'

const ClientList = ({user}) => {
  const [clients, setClients] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    fetch('/clients')    
      .then(r => r.json())
      .then(data => {        
        setClients(data)
        setIsLoading(false)
      })
      .catch(err => setErrors(err))
    }, [])
    
  const renderClients = clients.map(client => <Client client={client} key={client.id} />)
  

  return (
    <div>
      <h2>Client List</h2>
      {isLoading ? <p>Loading...</p> : renderClients}      
      {errors ? errors.map(error => <p key={error}>{error}</p>) : null}
    </div>
  )
}

export default ClientList