import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class Delivery
**/

class Delivery extends Component {
    //1. property
    state = {}
    //2. constructor
    constructor(props) {
        super(props);
    }
    //3. method
    render() {
        return (
            <React.Fragment>
                <div className="container p-0 delivery p_anch_dec ">
                    <header className="d-flex align-items-center">
                        <img className="img-fluid" src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/checkout-spc-address-banner._CB485947649_.gif" />
                    </header>
                    <div className="p_delivery_main">
                        <div className="border-bottom">
                            <h3 className="fw-bold">Select a delivery address</h3>
                            <span className="d-block">On the move? Pick up your order from our pickup store.</span>
                            <p>
                                Orders for select areas in <a href="#">select cities</a> can now be delivered to Amazon pickup locations<a href="#"> Search for a Pickup location near you </a>.</p>
                        </div>
                        <form>
                            <div className="row m-0 ">
                                <div className="col-3 ">
                                    <span className="d-block">pushpita rathore</span>
                                    <span className="d-block">41</span>
                                    <span className="d-block">pragati nagar</span>
                                    <span className="d-block">NEEMUCH, MADHYA PRADESH </span>
                                    <span className="d-block"> 458441</span>
                                    <span className="d-block">  India</span>
                                    <a href="#">Add delivery instructions</a>
                                    <button className=" btn-sm btn w-100 mt-3 amznbtn mb-3">Delivery to this address</button>
                                    <div className="row m-0">
                                        <div className="col p-0">
                                            <button className="btn btn-light me-2 w-100 btn-light-sm p-0 border">Edit</button>
                                        </div>
                                        <div className="col p-0">
                                            <button className="btn btn-light ms-2 w-100 btn-light-sm p-0 border">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="p_gradient  mt-4"></div>
                        <div className="row m-0">
                            <div className="col-6 pt-4">
                                < h4 className="fw-bold">Add a new address</h4>
                                <div class="mb-3">
                                    <label for="contryrgion" class="form-label">Country/Region</label>
                                    <select class="form-select bg-light form-select-sm" >
                                        <option selected>India</option>
                                        <option value="1">MP</option>
                                        <option value="2">Rajsthan</option>
                                        <option value="3">Gujrat</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="fullname" class="form-label">Full name (First and Last name)</label>
                                    <input type="text" class="form-control form-control-sm" id="fullname" />
                                </div>
                                <div class="mb-3">
                                    <label for="mobilenumber" class="form-label">Mobile Number</label>
                                    <input type="text" class="form-control form-control-sm" id="mobilenumber" placeholder="10-digit Mobile Number Without Prifix" />
                                    <span style={{ fontSize: '12px' }}>May be used to assist delivery</span>
                                </div>
                                <div class="mb-3">
                                    <label for="pincode" class="form-label">PIN code</label>
                                    <input type="text" class="form-control form-control-sm" id="pincode" placeholder="6-digit [0-9] PIN-code" />

                                </div>
                                <div class="mb-3">
                                    <label for="flathouseno" class="form-label">Flat, House no., Building, Company, Apartment</label>
                                    <input type="text" class="form-control form-control-sm" id="flathouseno" />
                                </div>
                                <div class="mb-3">
                                    <label for="areacolony" class="form-label">Area, Colony, Street, Sector, Village</label>
                                    <input type="text" class="form-control form-control-sm" id="areacolony" />
                                </div>
                                <div class="mb-3">
                                    <label for="landmark" class="form-label">Landmark</label>
                                    <input type="text" class="form-control form-control-sm" id="landmark" placeholder="E.G. Near AIIMS Flyover,Behind Regal Cinema,etc." />
                                </div>
                                <div className="row m-0">
                                    <div className="col ps-0">
                                        <div class="mb-3">
                                            <label for="towncity" class="form-label">Town/City</label>
                                            <input type="text" class="form-control form-control-sm" id="towncity" />
                                        </div>

                                    </div>
                                    <div className="col pe-0">

                                        <div class="mb-3">
                                            <label for="stateprovince" class="form-label ">State / Province / Region</label>
                                            <select class="form-select form-select-sm bg-light" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">MP</option>
                                                <option value="2">Rajsthan</option>
                                                <option value="3">Gujrat</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Make this My default Address
                                    </label>
                                </div>
                                <h4>Add delivery instructions</h4>
                                <p>Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned.</p>
                                <div class="mb-3">
                                    <label for="stateprovince" class="form-label">Address Type</label>
                                    <select class="form-select form-select-sm bg-light" aria-label="Default select example">
                                        <option selected>select an address type</option>
                                        <option value="1">MP</option>
                                        <option value="2">Rajsthan</option>
                                        <option value="3">Gujrat</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-sm amznbtn">Use This Address</button>
                            </div>
                        </div>
                    </div>
                    <footer className="" style={{fontSize:'12px'}}>
                        <div className="p_gradient  mt-4 "></div>
                        <div>
                            <ul class="nav justify-content-center mt-0">
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
                </div>
            </React.Fragment>
        )
    }
}


Delivery.propTypes = {}
export default Delivery