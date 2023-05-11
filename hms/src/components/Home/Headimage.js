import React from 'react'
import '../../App.css'


const Headimage = () => {
  return (
    < >
        <div className='container'>
        <div className='d-flex col-12' id='headImage'>
        <div className='align-left col-6' style={{
          width: '50%',
          height: '90vh',
          backgroundSize: 'cover',
          backgroundImage: 'url("./Image/Home.png")'
          }}></div>
        <div className='col-6 text-center' id='WelcomeNote'>
          <h1>Welcome to HealthDoc</h1><br/><h1>The Trust-Worthy Plateform to solve all your health problems</h1>
        <div/>
        </div>
        </div>
      
      </div>
  </>
  )
}

export default Headimage
