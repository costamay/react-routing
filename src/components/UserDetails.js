import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const [user, setUser] = useState({})

    const { id } = useParams()
    

    useEffect(()=>{
        fetch(`http://localhost:3000/users/${id}`)
        .then(res => res.json())
        .then(user => setUser(user))
        .catch(error => console.log(error))
    },[id])

    // console.log(user)

    if(!user.name){
        return <div>Loading......</div>
    }

  return (
    <div>
        <h1>UserDetails</h1>
        <h1>Name: {user.name}</h1>
        <h3>Username: {user.username}</h3>
        <h5>Phone: {user.phone}</h5>
        <h3>Company: {user.company.name}</h3>
        <div>
            <div>
                <h3>Address:</h3>
                <h5>Street: {user.address.street}</h5>
                <hr />
                <h5>City: {user.address.city}</h5>
            </div>
        </div>

    </div>
  )
}

export default UserDetails