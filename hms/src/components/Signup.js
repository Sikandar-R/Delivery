import React, { useState } from 'react'

const Signup = () => {
  //state for handling the inputs
  const empty={
    name: "",
    email: "",
    date: "",
    password: "",
    phone: "",
    address: ""
  }

  const [handle, setHandle] = useState(empty)
  const accountHandler=(e)=>{
    const {name, value} = e.target;
    setHandle({...handle,[name]: value})
    console.log(handle)
  }
  const createUser=async()=>{
    if(handle.name==""||handle.email==""||handle.password=="")
    {
      alert("Alert! Please Fill the Input Fields First")
    }else{
      let record = await fetch("http://localhost:6000/signup",
      {
        method: "POST",
        headers:{
          "content-Type": "application/json",
        },
        body:JSON.stringify(handle)
      })
      record = await record.json()
      if(record=="Email Already Exist")
            {
                alert("Email Already Exist")
            }else{
                alert("User Created Successfully")

            }
    }
  }
  return (
    <>
<div style={{
    backgroundImage: 'url("./Image/Background.jpg")',
    backgroundSize: 'cover',
}}>
    <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7 ">
        <div className="card shadow-2-strong card-registration" style={{borderradius: '35px', backgroundColor: '#c1e5fd'}}>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Sign Up as Patient</h3>
            <form>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div class="form-outline">
                    <input type="text" name='name' onChange={accountHandler} id="firstName" class="form-control form-control-lg" />
                    <label className="form-label" for="firstName">Full Name</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="email" name='email' onChange={accountHandler} id="emailAddress" class="form-control form-control-lg" />
                    <label className="form-label" for="emailAddress">Email</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">

                  <div className="form-outline datepicker w-100">
                    <input type="date" name='date' onChange={accountHandler} class="form-control form-control-lg" id="birthdayDate" />
                    <label for="birthdayDate" class="form-label">Birthday</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <h6 className="mb-2 pb-1">Gender: </h6>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" onChange={accountHandler} name="gender" id="femaleGender"
                      value="option1" checked />
                    <label className="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input className="form-check-input" type="radio" onChange={accountHandler} name="gender" id="maleGender"
                      value="option2" />
                    <label className="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" onChange={accountHandler} name="gender" id="otherGender"
                      value="option3" />
                    <label className="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="password" name='password' onChange={accountHandler} id="password" class="form-control form-control-lg" />
                    <label class="form-label" for="password">Password</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="tel" name='phone' onChange={accountHandler} id="phoneNumber" class="form-control form-control-lg" />
                    <label className="form-label" for="phoneNumber">Phone Number</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="form-otline">
                    <input type="text" name='address' onChange={accountHandler} id="address" class="form-control form-control-lg" />
                    <label className="form-label" for="phoneNumber">Address</label>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2">
                <input onClick={createUser} className="btn btn-primary btn-lg" type="submit" value="Submit" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    </>
  )
}

export default Signup
