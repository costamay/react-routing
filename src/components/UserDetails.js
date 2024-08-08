import React, { useEffect, useState } from 'react'
import { json, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import UpdateUser from './UpdateUser'

function UserDetails() {
    const [user, setUser] = useState({})
    
    const { id } = useParams()

    const navigate = useNavigate()
    

    useEffect(()=>{
        fetch(`http://localhost:3000/users/${id}`)
        .then(res => res.json())
        .then(user => setUser(user))
        .catch(error => console.log(error))
    },[id])

    

    




    // Delete user
    const handleDelete =()=>{
        fetch(`http://localhost:3000/users/${id}`,{
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(res =>  res.json())
        .then(console.log("user deleted"))
        .catch(error => console.log(error))

        Swal.fire({
            title: "Success!",
            text: "User deleted successfully",
            icon: "success"
          });

        navigate("/")
    }

    

    // console.log(user)

    if(!user.name){
        return <div>Loading......</div>
    }

  return (
    <div className='user-details'>
        <div className='details'>
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
        <button type="button" onClick={handleDelete}>Delete</button>

        </div>
        <div className='update-user'>
            <UpdateUser user={user} setUser={setUser}/>
        </div>
       
    </div>
  )
}

export default UserDetails