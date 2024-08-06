import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Form({users, setUsers}) {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name : "",
        username : ""
    })

    const handleOnchange = (event)=>{
        const name = event.target.name
        const value = event.target.value

        // updating state

        setFormData({
            ...formData, [name]: value
        })
    }

const handleSubmit =(e)=> {
    e.preventDefault()

    fetch("http://localhost:3000/users", {
        method : "POST",
        headers : {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body : JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(user => setUsers([user, ...users]))

    setFormData({
        name : "",
        username : ""
    })

    navigate("/")
}

  return (
    <div className='form-submit'>
        <div className='form-wrapper'>
        <div>
            <h1>Post User</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' name='name' placeholder='Enter Name' value={formData.name} onChange={handleOnchange}/>
            </div>
            <div>
                <input type='text' name='username' placeholder='Enter username' value={formData.username} onChange={handleOnchange}/>
            </div>
            <div>
                <input type='submit' value="Submit"/>
            </div>

        </form>
    </div>
    </div>
  )
}

export default Form