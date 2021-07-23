import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../Component/Layout'

/**
* @author
* @class OrderHistory
**/

class OrderHistory extends Component {
    state = {}
    render() {
        return (
            <Layout>
                <div className="p_odr_his_main  bg-white ">
                    <div className="container ps-4 pe-4  " style={{ height: '800px' }}>
                        <div className="d-flex justify-content-star w-100">
                            <nav className="p_bread_crumb text-start" aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="text-decoration-none">Your Account</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Your Orders</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="row  w-100 m-0 ">
                            <div className="col p-0">
                                <h3>Your Orders</h3>
                            </div>
                            <div className="col  p-0">
                                <form>
                                    <div className="row g-3">
                                        <div className="col">
                                            <input type="text" className="form-control form-control-sm " placeholder="See all Orders" aria-label="First name" />
                                        </div>
                                        <div className="col">
                                            <button type="submit" className="btn btn-dark btn-sm border w-50">Search orders</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="p_tabpane">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active border-0" data-bs-toggle="tab" href="#orders">Orders</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link border-0" data-bs-toggle="tab" href="#buyagain">Buy Again</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link border-0" data-bs-toggle="tab" href="#cancelledorders">Cancelled Orders</a>
                                    </li>
                                </ul>


                                <div className="tab-content p_anch_dec">
                                    <div className="tab-pane container active p-0 border-bottom" id="orders">
                                        <p className="p-3 "><span className="fw-bold">0 Orders</span> placed in
                                            
                                            <select className="borer-0 ms-2 btn btn-light border">
                                                <option>last 30 days</option>
                                                <option>past 3 months</option>
                                                <option>2021</option>
                                                
                                            </select>
                                           
                                        </p>
                                        <p className="d-flex justify-content-center">
                                    You have not placed any orders in past 3 months.<a href="#"> View orders in 2021</a>
                                    </p>
                                    </div>
                                   
                                    <div className="tab-pane container fade p-0" id="buyagain">B</div>
                                    <div className="tab-pane container fade p-0" id="cancelledorders">
                                        <div class="card ">
                                            <div class="card-header">
                                                <div className="row m-0">
                                                    <div className="col-2 ">ORDER PLEACED 16 june 2021</div>
                                                    <div className="col-1 ">TOTAL ₹0.00</div>
                                                    <div className="col-1 p-0 ">SHIP TO PUSHPITA </div>
                                                    <div className="col-5 "></div>
                                                    <div className="col-3 ">ORDER #402-456-44444</div>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <h4 class="card-title fw-bold">Cancelled</h4>
                                                <div className="row m-0">
                                                    <div className="col-2 p-0 ">
                                                        <img className="img-fluid" src="https://m.media-amazon.com/images/I/A1wRysom+iL._AC_AA180_.jpg" />
                                                    </div>
                                                    <div className="col-7 ">
                                                        <h5><a href="#">Amazon Brand - Solimo Leafy Spring 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Blue</a></h5>
                                                    </div>
                                                    <div className="col-3 p-0 ">
                                                        <button className="btn btn-light w-100 border">Archieve Order</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card p_anch_dec mt-3">
                                            <div class="card-header">
                                                <div className="row m-0">
                                                    <div className="col-2">ORDER PLEACED 16 june 2021</div>
                                                    <div className="col-1 ">TOTAL ₹0.00</div>
                                                    <div className="col-1 p-0 ">SHIP TO PUSHPITA </div>
                                                    <div className="col-5 "></div>
                                                    <div className="col-3 ">ORDER #402-456-44444</div>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <h4 class="card-title fw-bold">Cancelled</h4>
                                                <div className="row m-0">
                                                    <div className="col-2 ">
                                                        <img className="img-fluid" src="https://m.media-amazon.com/images/I/A1wRysom+iL._AC_AA180_.jpg" />
                                                    </div>
                                                    <div className="col-7 ">
                                                        <h5><a href="#">Amazon Brand - Solimo Leafy Spring 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Blue</a></h5>
                                                    </div>
                                                    <div className="col-3 p-0 ">
                                                        <button className="btn btn-light w-100 border">Archieve Order</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>
        )
    }
}


OrderHistory.propTypes = {}
export default OrderHistory