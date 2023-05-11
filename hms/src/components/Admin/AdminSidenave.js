import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidenave = () => {
  return (
    <div>
      <div id='Sidenave'>
    <div>
    <a className="navbar-brand" href="/"><img className='d-flex' src='Image/Dasboard.png' alt='Dashboard' id='Dashboardlogo'/></a>
    </div>
      <div className='navebar' id='navlinks'>
      <ul className='navebar' id='navelist'>
        <li className='nave-item'>
            <Link className='nave-link color-white' to={"/"}>Dashboard</Link>
        </li>
        <li className='nave-item'>
            <Link className='nave-link' to={"/"}>All Doctors</Link>
        </li>
        <li className='nave-item'>
            <Link className='nave-link' to={"/"}>All Patients</Link>
        </li>
        <li className='nave-item'>
            <Link className='nave-link' to={"/"}>Approve Appointments</Link>
        </li>
      </ul>

      </div>
    </div>
    </div>
  )
}

export default AdminSidenave
