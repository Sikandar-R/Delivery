import React from 'react'
import { useState } from 'react'
import Index from './components/Home/Index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Sidenave from './components/Sidenave'
import Login from './components/Login'
import Dashboard from './components/User/Dashboard'
import AdminDashboard from './components/Admin/AdminDashboard'


const App = () => {
 //state for editing the data of Doctors Field
 const [Getid, SetGetid]= useState()
 const empty={
  "name": "",
  "email": "",
  "gender": "",
  "phone": ""
 }

 //state for handling input
 const [handle, setHandle]=useState(empty) 

 // function for handle the input fields
const handler=(e)=>{
  const {name,value}=e.target;
  setHandle({...handle,[name]:value})
  console.log(handle)
 }

 // function for creating the Api data
const createApi=()=>{
  fetch("http://localhost:6000/doctors",{
    method:'POST',
    headers:{
     "content-Type": "application/json",
    },
    body:JSON.stringify(handle)
  })
  }

  // function for editing the Api
 const editApi=async(id)=>{
  var data= await fetch(`http://localhost:6000/doctors/${id}`);
  data=await data.json()
  console.log(data)
  setHandle(data)
  SetGetid(id)
    }

    // function for updating the Api
const updateApi=()=>{
  fetch(`http://localhost:6000/doctors/${Getid}`,{
    method:'PUT',
    headers:{
      "content-Type": "application/json",
     },
     body:JSON.stringify(handle)
     
  })
}
  return (
    <div>
    <Router>
     <Routes>
        <Route path="/" element={ <Index/> } />
        <Route path="Login" element={ <Login/> } />
        <Route path="Signup" element={ <Signup/> } />
        <Route path="Dashboard" element={ <Dashboard/> } />
        <Route path="Admin" element={ <AdminDashboard/> } />
      </Routes>
    </Router>
    </div>
  )
}

export default App
