import React from 'react'
import Sidenave from '../Sidenave'

const Dashboard = () => {
  return (
    <div>
      <div className='row col-12'>
      <div className='col-3 bg-secondary'>
      <Sidenave/>
      </div>
      <div className='col-9' id='Dashboard'> 
        <div className='bg-info mt-2'><h1>User Dashboard</h1></div>
      </div>
      </div>
      
    </div>
  )
}

export default Dashboard
