import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../Component/Layout'

/**
* @author
* @class SignIn
**/

class SignIn extends Component {
    state = {}
    render() {
        return (
            <>
        
                <div className=" row m-0 justify-content-center signincont">
                    <div className="col-3  ">
                    <a href="#" className="d-block m-3mx-auto  position-relative">
                    <div className="mx-auto position-absolute spritesheet"></div>
                    </a>
                        <form className="border p-3">
                            <h3>Sign-In</h3>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label ">Email or mobile phone number</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>
                            <button type="submit" className="btn btn-warning  w-100 mb-3 border">Continue</button>
                            <p style={{ fontSize: '13px' }}>By continuing, you agree to Amazon's<a href="#"> Conditions of Use </a>and <a href="#">Privacy Notice.</a></p>
                            <a style={{ fontSize: '13px' }} href="#">Need help?</a>
                        </form>
                        <hr/>
                        <button className="btn-outline-light text-dark  btn btn-light w-100 border border-secondary mb-4">Create your Amazon Account</button>
                    </div>
                </div>
                <footer style={{fontSize:'12px'}}>
                    <ul class="nav justify-content-center mt-4">
                        <li class="nav-item">
                            <a class="nav-link"  href="#"> Conditions of Use </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> Privacy Notice </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">help</a>
                        </li>
                        
                    </ul>
                    <span className=" d-block text-center">© 1996-2021, Amazon.com, Inc. or its affiliates</span>
                </footer>
            </>

        )
    }
}


SignIn.propTypes = {}
export default SignIn