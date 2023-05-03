import { useFormik } from 'formik'
import React, { useState } from 'react'

const FormikSignup = () => {
  const [error, seterror] = useState({})
  let formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      terms: false
    },
    onSubmit: (values) => {
      console.log(values)
      // console.log(errors);
    },
    validate: (values) => {
        let errors = {}
        if (values.firstName == '') {
          errors.firstName = "First name is required"
        } else if (values.lastName == '') {
          errors.lastName = "Last name is required"
        } else if (values.email == '') {
          errors.email = "Email is required"
        } else if (values.password == '') {
          errors.password = "Password is required"
        }
        seterror(errors)
    }
  })
  // console.log(formik.values);
  return (
    <>
        <section className="vh-100" style={{backgroundColor: '#eee'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: '25px'}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4" onSubmit={formik.handleSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name='firstName' onChange={formik.handleChange} id="form3Example1c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">First Name</label>
                    </div>
                  </div>
                  <small>{error.firstName}</small>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name='lastName' onChange={formik.handleChange} id="form3Example1c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">Last Name</label>
                    </div>
                  </div>
                  <small>{error.lastName}</small>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" name='email'  onChange={formik.handleChange} id="form3Example3c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                  </div>
                  <small>{error.email}</small>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" name='password'  onChange={formik.handleChange} id="form3Example4c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>
                  <small>{error.password}</small>

                  {/* <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div> */}

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" name='terms'  onChange={formik.handleChange} type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default FormikSignup