import React from 'react'
import AdminSidenave from './AdminSidenave'

const AdminDashboard = () => {
  return (
    <div>
      <div className='row col-12'>
      <div className='col-3 bg-secondary'>
      <AdminSidenave/>
      </div>
      <div className='col-9' id='Dashboard'> 
        <div className='bg-info mt-2'><h1>Admin Dashboard</h1></div>
      </div>
      </div>
    </div>
  )
}

export default AdminDashboard
