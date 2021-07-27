import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../Component/Layout'
import { Link } from 'react-router-dom'

/**
* @author
* @class SignIn
**/

class SignIn extends Component {
    state = {}
    render() {
        return (
            <>
        
                <div className=" row m-0  justify-content-center signincont">
                    <div className="col-3  ">
                    <a href="#" className="d-block mx-auto position-relative m-3 p_amzn_logo_box  amazonlogo   ">
                        <div className="position-absolute p_in_box  amazonlogo  "></div>
                    
                    </a>
                        <form className="border p-3">
                            <h3>Sign-In</h3>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label ">Email or mobile phone number</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>
                            <button type="submit" className="btn amznbtn  w-100 mb-3 border">Continue</button>
                            <p style={{ fontSize: '13px' }}>By continuing, you agree to Amazon's<a href="#"> Conditions of Use </a>and <a href="#">Privacy Notice.</a></p>
                            <a style={{ fontSize: '13px' }} href="#">Need help?</a>
                        </form>
                        <hr/>
                        <Link to="/register" className="btn-outline-light text-dark  btn btn-light w-100 border border-secondary mb-4">Create your Amazon Account</Link>
                    </div>
                </div>
                <footer className="" style={{fontSize:'12px'}}>
                        <div className="p_gradient  mt-4"></div>
                        <div>
                            <ul class="nav justify-content-center">
                                <li class="nav-item border-end me-2">
                                    <a class="nav-link p-0 me-2 " href="#">Condition of Use</a>
                                </li>
                                <li class="nav-item border-end me-2 ">
                                    <a class="nav-link p-0 me-2" href="#">Privecy otice</a>
                                </li>
                                <li class="nav-item">
                                <span className="">© 2012-2020, Amazon.com, Inc. and its affiliates</span>
                                </li>
                                
                            </ul>
                        </div>
                    </footer>
            </>

        )
    }
}


SignIn.propTypes = {}
export default SignIn