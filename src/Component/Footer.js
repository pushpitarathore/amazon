import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

/**
* @author
* @class Footer
**/

class Footer extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>


        <footer>
          <a href="#" className="btn btn-success border-0 rounded-0 lh-lg w-100" style={{ backgroundColor: '#37475a', height: '47px' }}>Back to Top</a>

          <div className=" p_footer_top pb-5">
            <div className="container pt-5">
              <div className="  row text-white  " style={{ fontSize: '13px' }}>
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
            <hr className="text-secondary" />
            <div>
              <ul class="nav justify-content-center">
                <li class="nav-item">
                <span className=" float-start me-5   p_home_a_box  p_a_logo p_logo_position"></span>

                </li>
                <li className="nav-item ">
                  <button type="button" className="btn btn-outline-secondary p_footer_eng">
                    <span className="flag_sheet mt-1 d-block float-start p_globe_pos"></span>
                    <span className="float-start pt-0 p-0 ms-2">English</span>
                    <span className="p_updown_arw_pos amazonlogo  d-block float-end ms-2 mt-1"></span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="mt-3 " style={{ fontSize: '12px' }}>
              <ul className="nav justify-content-center container">
                <li className="nav-item me-3">
                  <a className="nav-link " href="#">Australia</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">Brazil</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">Canada</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#" >Chaina</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#" >France</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#" >Germany</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#" >Italy</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#" >Japan</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#" >Maxico</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#" >Netherlands</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#" >Poland</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#" >Singapore</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#" >Spain</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#" >Turkey</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#" >United Arab Emirates</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#" >United Kingdom</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#" >United States</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="p_footer_bottom ">
            <div className="container pt-4">
              <div className="row m-0 text-center p_footer_ul ">
                <div className="col">
                  <ul className="nav flex-column ">
                    <li className="nav-item">
                      <a className="nav-link " href="#">
                        AbeBooks
                        Books, art
                        &amp; collectibles</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Shopbop
                        Designer
                        Fashion Brands
                      </a>
                    </li>

                  </ul>
                </div>
                <div className="col">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link " href="#">Amazon Web Services
                        Scalable Cloud
                        Computing Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Amazon Business
                        Everything For
                        Your Business</a>
                    </li>

                  </ul>
                </div>
                <div className="col">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link " href="#">Audible
                        Download
                        Audio Books</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Prime Now
                        2-Hour Delivery
                        on Everyday Items</a>
                    </li>

                  </ul>
                </div>
                <div className="col">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link " href="#">DPReview
                        Digital
                        Photography</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Amazon Prime Music
                        70 million songs, ad-free
                        Over 9 million podcast episodes

                      </a>
                    </li>

                  </ul>
                </div>
                <div className="col">
                  <ul>
                    <li className="nav-item">
                      <a className="nav-link " href="#">IMDb
                        Movies, TV
                        &amp; Celebrities</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <ul className="nav justify-content-center">
                  <li className="nav-item me-3">
                    <a className="nav-link " href="#">Condition of Use &amp; Sale</a>
                  </li>
                  <li className="nav-item me-3">
                    <a className="nav-link" href="#">Privacy Notice</a>
                  </li>
                  <li className="nav-item me-3">
                    <a className="nav-link" href="#">Interest-Based ads</a>
                  </li>
                  <li className="nav-item me-3">
                    <span className="text-white float-start" style={{ fontSize: '12px' }}>© 1996-2021, Amazon.com, Inc. or its affiliates</span>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </footer>


      </React.Fragment>
    )
  }
}


Footer.propTypes = {}
export default Footer