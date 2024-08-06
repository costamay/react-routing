import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div>
            <NavLink to='/'>Home</NavLink>
        </div>
        <div>
            <NavLink to='/about'>About</NavLink>
        </div>
        <div>
            <NavLink to='/users/add'>Post User</NavLink>
        </div>

    </div>
  )
}

export default Navbar