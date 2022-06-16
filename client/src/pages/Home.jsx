import React from 'react'

const Home = ({user}) => {
    console.log(user)
    
    return (
    <div>
       {user ?  `Its your Home PAGE ${user.first_name} ${user.last_name}!` : "please login"}
    </div>
  )
}

export default Home