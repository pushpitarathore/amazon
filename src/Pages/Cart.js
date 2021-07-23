import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../Component/Layout'

/**
* @author
* @class Cart
**/

class Cart extends Component {
    state = {}
    render() {
        return (
            <Layout>
                <div className="p_cart_main p-4 p_anch_dec">
                    <div className="row h-100 w-100 m-0">
                        <div className="col-9 ">
                            <div className=" border-bottom mb-3  ">
                                <h4>Shopping Cart</h4>
                                <a className="mb-2 " href="#">Deslect all items</a>
                                <span className="float-end">price</span>
                            </div>
                            <div className="row p-3  border-bottom m-0">
                                <div className="col-3 d-flex align-items-center  p-0">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                        <label class="form-check-label" for="flexCheckChecked">

                                        </label>
                                    </div>
                                    <img className="img-fluid float-end" src="https://m.media-amazon.com/images/I/71wC6vUXC8L._AC_AA180_.jpg" />
                                </div>
                                <div className="col-7  p-0  ">
                                    <h5 className="m-0" ><a href="#">Vudy Wooden Handcrafted Wooden Stools | Table | for Living Room | Office | Décor-Brown (Mohagany)</a></h5>
                                    <span className="d-block text-success">In stock</span>
                                    <span className="d-block " > Eligible for FREE Shipping</span>
                                    <img className="img-fluid" src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" />

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            this will be a gift<a href="#"> learn more</a>
                                        </label>
                                    </div>
                                    <div>
                                        <ul class="nav ">
                                            <li class="nav-item  border-end me-2">
                                                <select className="me-2 rounded-3 bg-light ">
                                                    <option>qty:1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </li>
                                            <li class="nav-item border-end me-2">
                                                <a class="nav-link me-2 p-0" href="#">Delete</a>
                                            </li>
                                            <li class="nav-item border-end me-2">
                                                <a class="nav-link me-2 p-0" href="#">save for later</a>
                                            </li>
                                            <li class="nav-item  ms-2">
                                                <a class="nav-link p-0" href="#">see more like this</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-2 text-end p-2 ">
                                    <span className="fw-bold fs-5 "> ₹1,299.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 tbdr">
                            <div className="tbdr">
                                <img className="img-fluid" src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" />
                            </div>
                            <div className="mt-4  row w-100 m-0 ">

                                <div className="col-1 p-0">
                                    <div className="p_checkbox  p_check_dimension sprsheet "></div>
                                </div>
                                <div className="col-11 p-0 " style={{ fontSize: '13px' }}>
                                    <p>Your order is eligible for FREE Delivery. Select this option at checkout.<a href="#"> Details</a></p>
                                </div>
                                <div className="mb-4">
                                    <h5>Subtotal (4 items):<span className="fw-bold">₹42,287.00</span></h5>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            This order contains a gift
                                        </label>
                                    </div>
                                    <button className="btn btn-warning btn-sm w-100 mb-3 rounded-3">Proceed to Buy</button>
                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingOne">
                                                <button class="accordion-button collapsed border" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    EMI Available
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">
                                                Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up).<a href="#"> Learn more</a>
                                                    </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className="row h-100 w-100 m-0">
                            <div className="col-9 ">

                                <div className="row p-3  border-bottom m-0">
                                    <div className="col-3 d-flex align-items-center  p-0">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                            <label class="form-check-label" for="flexCheckChecked">

                                            </label>
                                        </div>
                                        <img className="img-fluid float-end" src="https://m.media-amazon.com/images/I/91WpPGL-YmL._AC_AA180_.jpg" />
                                    </div>
                                    <div className="col-7  p-0  ">
                                        <h5 className="m-0" ><a href="#">Amazon Brand - Solimo Lily Bloom 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Green</a></h5>
                                        <span className="d-block text-success">In stock</span>
                                        <span className="d-block " > Eligible for FREE Shipping</span>
                                        <img className="img-fluid" src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" />

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                this will be a gift<a href="#"> learn more</a>
                                            </label>
                                        </div>
                                        <div>
                                            <ul class="nav ">
                                                <li class="nav-item  border-end me-2">
                                                    <select className="me-2 rounded-3 bg-light ">
                                                        <option>qty:1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>
                                                </li>
                                                <li class="nav-item border-end me-2">
                                                    <a class="nav-link me-2 p-0" href="#">Delete</a>
                                                </li>
                                                <li class="nav-item border-end me-2">
                                                    <a class="nav-link me-2 p-0" href="#">save for later</a>
                                                </li>
                                                <li class="nav-item  ms-2">
                                                    <a class="nav-link p-0" href="#">see more like this</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-2 text-end p-2 ">
                                        <span className="fw-bold fs-5 "> ₹799.00</span>
                                    </div>
                                </div>
                                <span className="float-end fs-5">Subtotal (4 items):  <span className="fw-bold">₹2,287.00</span> </span>
                            </div>


                            <div>

                            </div>

                        </div>

                    </div>
            </Layout>
                )
    }
}


                Cart.propTypes = { }
                export default Cart