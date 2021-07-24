import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../Component/Layout'

/**
* @author
* @class YourAccount
**/

class YourAccount extends Component {
  //1. properties
  state = {}
  //2. contructor
  //3.method
  render() {
    return (
      <Layout>
        <div className="p_account_main bg-white pb-5">
          <div className="container pb-4 " style={{ fontSize: '14px' }}>
            <h2>Your Account</h2>
            <div className="row m-0 mt-3  ">
              <div className="col-4  p-4">
                <a href="#" className="text-decoration-none text-dark ">
                  <div className="row m-0 border p-3 rounded-3">
                    <div className="col-3 p-0 ">
                      <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png" />
                    </div>
                    <div className="col-9  p-1">

                      <h5 className="m-0">Your Orders</h5>
                      <span>track,return or buy things again</span>

                    </div>
                  </div>
                </a>
              </div>
              <div className="col-4 p-3  ">
                <a href="#" className="text-decoration-none text-dark">
                  <div className="row m-0 border  rounded-3 p-3">
                    <div className="col-3 p-0 ps-0">
                      <img className="img-fluid tbdr" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png" />
                    </div>
                    <div className="col-9 p-0">

                      <h5 className="m-0">Login &amp; Security</h5>
                      <span>Edit login,name,and mobile number</span>

                    </div>
                  </div>
                </a>
              </div>
              <div className="col-4 p-3 ">
                <a href="#" className="text-decoration-none text-dark">
                  <div className="row m-0 border rounded-3 p-3">
                    <div className="col-3 p-0 ">
                      <img className="img-fluid tbdr" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/rc_prime._CB485926807_.png" />
                    </div>
                    <div className="col-9 p-0">

                      <h5 className="m-0">Prime</h5>
                      <span>View benifits and payment settings</span>

                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="row m-0  mb-3 border-bottom ">
              <div className="col-4 p-3 ">
                <a href="#" className="text-decoration-none text-dark">
                  <div className="row m-0 border rounded-3 p-3">
                    <div className="col-3 p-0 ">
                      <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png" />
                    </div>
                    <div className="col-9  p-1">

                      <h5 className="m-0">Your addresses</h5>
                      <span>edit addresses for orders and gifts</span>

                    </div>
                  </div>
                </a>
              </div>
              <div className="col-4 p-3 ">
                <a href="#" className="text-decoration-none text-dark">
                  <div className="row m-0 border rounded-3 p-3">
                    <div className="col-3 p-0">
                      <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/Payments._CB485926359_.png" />
                    </div>
                    <div className="col-9 p-1">

                      <h5 className="m-0">Payment Option</h5>
                      <span>Edit or add payment methods</span>

                    </div>
                  </div>
                </a>
              </div>
              <div className="col-4 p-3  ">
                <a href="#" className="text-decoration-none text-dark">
                  <div className="row m-0 border rounded-3 p-3">
                    <div className="col-3 p-0">
                      <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/amazon_pay._CB485946857_.png" />
                    </div>
                    <div className="col-9 p-1">

                      <h5 className="m-0">Amazon pay balance</h5>
                      <span>add money to your balance</span>

                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="row m-0 pb-5">
              <div className="col-4 border p-3 rounded-3">
                <h6 className="fw-bold ">Digital content and devices</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link p-0 " href="#">Apps and more</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Content and devices</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Digital gifts you've received</a>
                  </li>
                </ul>
              </div>
              <div className="col-4 border p-3 rounded-3">
                <h6 className="fw-bold ">Email alerts, messages, and ads</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Advertising preferences</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Communication preferences</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">SMS alert preferences</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Message center</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Alexa shopping notifications</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Deals Notifications</a>
                  </li>
                </ul>
              </div>
              <div className="col-4 border p-3 rounded-3">
                <h6 className="fw-bold ">More ways to pay</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Default Purchase Settings</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Amazon Pay</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Bank accounts for refunds</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Coupons</a>
                  </li>
                </ul>
              </div>
              <div className="col-4 border p-3 rounded-3">
                <h6 className="fw-bold ">Ordering and shopping preferences</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Leave packaging feedback</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Lists</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Photo ID proofs</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Language settings</a>
                  </li>
                </ul>
              </div>
              <div className="col-4 border p-3 rounded-3">
                <h6 className="fw-bold ">Other accounts</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Account Linking</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Amazon Business registration</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Seller account</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Amazon Web Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Login with Amazon</a>
                  </li>
                </ul>
              </div>
              <div className="col-4 border p-3 rounded-3">
                <h6 className="fw-bold ">Shopping programs and rentals</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Manage Your Profiles</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Subscribe &amp; Save</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Shop the Kids' Store by age</a>
                  </li>
                </ul>
              </div>
              <div className="col-4 border p-3 rounded-3">
                <h6 className="fw-bold ">Subscriptions</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Email</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#">Memberships &amp; Subscriptions</a>
                  </li>
                </ul>
              </div>
            </div>
           
          </div>
          <div className="d-flex justify-content-center pt-4 border-bottom  border-top pb-4 ">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span>See personalized recommendations</span>
                </li>
                <li class="nav-item">
                 <button className="btn btn-sm amznbtn w-100">signin</button>
                </li>
                <li class="nav-item">
                  <span className="float-start">new customer?</span>
                  <a class="nav-link float-start p-0 ms-2" href="#">start here.</a>
                </li>
              </ul>
            </div>

        </div>
      </Layout>
    )
  }
}


YourAccount.propTypes = {}
export default YourAccount