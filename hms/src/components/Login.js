import React from 'react'

const Login = () => {
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
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Login as Patient</h3>
            <form>

              <div className="row">
                <div className="col-12">

                  <div className="form-outline">
                    <input type="email" id="emailAddress" class="form-control form-control-lg" />
                    <label class="form-label" for="emailAddress">Email</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="form-otline">
                    <input type="password" id="password" class="form-control form-control-lg" />
                    <label className="form-label" for="password">Password</label>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2">
                <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
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

export default Login
