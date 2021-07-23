import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class Register
**/

class Register extends Component {
  state = {}
  render() {
    return (
      <>

        <div className=" row m-0  justify-content-center signincont">
          <div className="col-3 p-0 ">
            <a href="#" className="d-block mx-auto position-relative m-3 p_amzn_logo_box p_amznlogo amazonlogo   ">
              <div className="position-absolute p_in_box  amazonlogo  "></div>

            </a>
            <form className="border p-3 p_anch_dec">
              <h3>Create Account</h3>
              <div class="mb-2">
                <label for="yourname" class="form-label fw-bold">Your Name</label>
                <input type="email" class="form-control form-control-sm" id="yourname" placeholder="" />
              </div>
              <div class="row mb-2">
                <label for="mobileno" class="form-label fw-bold">Mobile number</label>
                <div class="col-4 pe-0">

                  <input type="text" class="form-control form-control-sm bg-light "   />
                </div>
                <div class="col-8">
                  <input type="text" class="form-control form-control-sm bg-light" id="mobileno" />
                </div>
              </div>
              <div class="mb-2">
                <label for="email" class="form-label fw-bold">Email (optional)</label>
                <input type="email" class="form-control form-control-sm" id="email" placeholder="" />
              </div>
              <div class="mb-2">
                <label for="password" class="form-label fw-bold">password</label>
                <input type="email" class="form-control form-control-sm bg-light" id="password" placeholder="" />
              </div>
              <span className="d-block mb-3">Passwords must be at least 6 characters.</span>
              <p>We will send you a text to verify your phone.
                Message and Data rates may apply.</p>
              <button className="btn amznbtn  btn-sm w-100">Continue</button>

              <footer className="" style={{ fontSize: '14px' }}>
                <div className="p_gradient  mt-4 pt-2">
                  <p className="m-1">Already have an account? <a href="#">Sign in</a></p>
                  <p className="m-1">Buying for work? <a href="#">Create a free business account</a></p>
                </div>

              </footer>

            </form>

          </div>
        </div>

      </>
    )
  }
}


Register.propTypes = {}
export default Register