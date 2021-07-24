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
        <div className="p_account_main bg-white">
          <div className="container  border-bottom pb- ">
            <h2>Your Account</h2>
            <div className="row m-0 mt-3 mb-2 ">
              <div className="col-4 p-3 ">
                <a href="#" className="text-decoration-none text-dark">
                  <div className="row m-0 border p-3">
                    <div className="col-3 p-0 ">
                      <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png" />
                    </div>
                    <div className="col-9  p-2">

                      <h5 className="m-0">Your Orders</h5>
                      <span>track,return or buy things again</span>

                    </div>
                  </div>
                </a>
              </div>
              <div className="col-4 p-3 ">
                <a href="#" className="text-decoration-none text-dark">
                  <div className="row m-0 border p-3">
                    <div className="col-3 p-0">
                      <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png" />
                    </div>
                    <div className="col-9 p-2">

                      <h5 className="m-0">Login &amp; Security</h5>
                      <span>Edit login,name,and mobile number</span>

                    </div>
                  </div>
                </a>
              </div>
              <div className="col-4 p-3 ">
                <a href="#" className="text-decoration-none text-dark">
                  <div className="row m-0 border p-3">
                    <div className="col-3 p-0 ">
                      <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/rc_prime._CB485926807_.png" />
                    </div>
                    <div className="col-9 p-2">

                      <h5 className="m-0">Prime</h5>
                      <span>View benifits and payment settings</span>

                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="row m-0 mt-3 mb-3  ">
              <div className="col-4 p-3 ">
                <a href="#" className="text-decoration-none text-dark">
                  <div className="row m-0 border p-3">
                    <div className="col-3 p-0 ">
                      <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png" />
                    </div>
                    <div className="col-9  p-2">

                      <h5 className="m-0">Your Orders</h5>
                      <span>track,return or buy things again</span>

                    </div>
                  </div>
                </a>
              </div>
              <div className="col-4 p-3 ">
                <a href="#" className="text-decoration-none text-dark">
                  <div className="row m-0 border p-3">
                    <div className="col-3 p-0">
                      <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/Payments._CB485926359_.png" />
                    </div>
                    <div className="col-9 p-2">

                      <h5 className="m-0">Login &amp; Security</h5>
                      <span>Edit login,name,and mobile number</span>

                    </div>
                  </div>
                </a>
              </div>
              <div className="col-4 p-3  ">
                <a href="#" className="text-decoration-none text-dark">
                  <div className="row m-0 border p-3">
                    <div className="col-3 p-0">
                      <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/amazon_pay._CB485946857_.png" />
                    </div>
                    <div className="col-9 p-2">

                      <h5 className="m-0">Prime</h5>
                      <span>View benifits and payment settings</span>

                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}


YourAccount.propTypes = {}
export default YourAccount