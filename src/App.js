// import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';
import Form from './components/Form';
import Error from './components/Error';

function App() {
  const [users, setUsers] = useState([])

    useEffect(() =>{
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(users => setUsers(users))
        .catch(error => console.log(error))
    },[])

  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<Home users={users}/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/users/:id' element={<UserDetails />} />
        <Route path='/users/add' element={<Form users={users} setUsers={setUsers}/>} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
