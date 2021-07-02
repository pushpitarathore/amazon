import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class Footer
**/

class Footer extends Component {
 state = {}
 render() {
  return(
   <React.Fragment>
       

<footer>
  <a href="#" className="btn btn-success border-0  lh-lg w-100" style={{ backgroundColor: '#37475a', height: '47px' }}>Back to Top</a>

  <div className=" p_footer_top pb-5">
    <div className="container pt-5">
      <div className="  row text-white  ">
        <div className="col-3">
          <h6 className="fw-bolder">Get to Know Us</h6>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link " >About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Careers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Press Releases</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" >Amazon Cares</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" >Gift a Smile</a>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h6 className="fw-bolder">Connect with Us</h6>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link " >Facebook</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Twitter</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h6 className="fw-bolder">Make Money with Us</h6>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link " >Sell on Amazon</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sell under Amazon Accelerator</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Amazon Global Selling</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Become an Affiliate</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Fulfilment by Amazon</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Advertise Your Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Amazon Pay on Merchants</a>
            </li>

          </ul>
        </div>
        <div className="col-3">
          <h6 className="fw-bolder">Let Us Help You</h6>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link " >COVID-19 and Amazon</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Your Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Returns Centre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Returns Centre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">100% Purchase Protection</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Amazon App Download</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Amazon Assistant Download</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Help</a>
            </li>

          </ul>
        </div>
      </div>

    </div>

  </div>
  <div className="p_footer_bottom"></div>
</footer>


   </React.Fragment>
    )
   }
 }


Footer.propTypes = {}
export default Footer