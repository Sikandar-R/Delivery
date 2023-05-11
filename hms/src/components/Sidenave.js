import React from 'react'
import { Link } from 'react-router-dom'

const Sidenave = () => {
  return (
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
            <Link className='nave-link' to={"/"}>Doctors</Link>
        </li>
        <li className='nave-item'>
            <Link className='nave-link' to={"/"}>All Appointments</Link>
        </li>
      </ul>

      </div>
    </div>
  )
}

export default Sidenave
