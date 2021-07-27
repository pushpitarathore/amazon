import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/**
* @author
* @class Delivery_option
**/

class Delivery_option extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="container deliver_option bg-white  p-4">
                    <div className=" pb-5">
                        <img className="img-fluid" src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/checkout-spc-ship-banner._CB485947700_.gif" />
                        <div className="mt-5">
                            <h3 className="float-start mt-2">Choose your delivery options</h3>
                            <div className="float-end do_continue_box p-3">
                                <Link to="/paymentmethod" className="btn btn-sm amznbtn border rounded-2 w-100 ">Continue</Link>
                            </div>
                        </div>
                    </div>
                    <div className=" border-top mt-5 p-3 border-bottom">
                        <div className="row m-0">
                            <div className="col-6 p-2 p_anch_dec ">
                                <h5>Shipment 1 of 1</h5>
                                <div>
                                    <span className="fw-bold me-2">Shipping from Amazon</span>
                                    <img src="https://images-na.ssl-images-amazon.com/images/G/31/marketing/fba/fba-badge_18px._V384100965_.png" />
                                    <a className=" ms-2" href="#">Learn more</a>
                                </div>
                                <span className="mt-3 text-secondary">Deliver to: pushpita rathore, 41, pragati nagar, NEEMUCH, MADHYA PRADESH, 458441 India</span>
                                <ul>
                                    <li className=""><span className="d-block fw-bold">Amazon Brand - Solimo Lily Bloom 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Green</span>
                                        <span className="text-decoration-line-through ">₹1,400.00</span>
                                        <span className="text-danger ">₹799.00 </span>
                                        <span className="text-secondary"> - Quantity: 1</span>
                                        <span className="d-block">Sold by: Cloudtail India</span>
                                    </li>
                                    <li className=""><span className="d-block fw-bold">Amazon Brand - Solimo Water Resistant Cotton Mattress Protector 78"x72" - King Size, Grey</span>
                                        <span className="text-decoration-line-through ">₹1,900.00</span>
                                        <span className="text-danger "> ₹879.00 </span>
                                        <span className="text-secondary"> - Quantity: 1</span>
                                        <span className="d-block">Sold by: Cloudtail India</span>
                                    </li>
                                </ul>
                                <a className="" href="#">Change quantities or delete</a>
                            </div>
                            <div className="col-6 p-2 ">
                                <h5>Choose a delivery speed</h5>
                                <div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            <span className="text-success">Monday, 2 Aug - Saturday, 7 Aug  </span>
                                            <span>— FREE FREE Delivery on eligible orders</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="float-end do_continue_box p-3 mt-5 mb-4">
                            <Link to="/paymentmethod" className="btn btn-sm amznbtn w-100 border rounded-2">Continue</Link>
                        </div>
                    </div>

                </div>
                <footer className="" style={{ fontSize: '12px' }}>
                    <div className="p_gradient  ">

                    </div>
                    <div className="mb-5 mt-0">
                        <ul class="nav justify-content-center pt-3 ">
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


Delivery_option.propTypes = {}
export default Delivery_option