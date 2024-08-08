import React, { useState } from 'react'

function UpdateUser({user, setUser}) {
    

    const [formData, setFormData] = useState({
        name : user.name,
        username: user.username
    })

    const handleOnchange =  (e) =>{
        const name = e.target.name
        const value = e.target.value

        setFormData({
            ...formData, [name]: value
        })

    }
    

    // Updating user

    const handleUpdate = () => {
        fetch(`http://localhost:3000/users/${user.id}`,{
            method : "PATCH",
            headers : {
                "Content-Type" : "application/json",
                "ACCEPT" : "application/json"
            },

            body : JSON.stringify(formData)
        })
        .then(res =>  res.json())
        .then(user => setUser(user))
        .catch(error => console.log(error))
    }

  return (
    <div className='update-user-inputs'>
                <h3>Update User</h3>
                <div>
                    <input 
                    type='text'
                    name='name'
                    value={formData.name}
                     onChange={handleOnchange}
                     />
                </div>
                <div>
                    <input 
                    type='text'
                    name='username'
                    value={formData.username}
                    onChange={handleOnchange}
                     />
                </div>

                <div>
                    <button type='button' onClick={handleUpdate}>Update</button>
                </div>

            </div>
  )
}

export default UpdateUser