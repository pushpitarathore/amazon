import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../Component/Layout'


/**
* @author
* @class Search
**/

class Search extends Component {
  state = {}
  render() {
    return (
      <Layout>
        <div className="p_srch_main">
          <div className="p_srch_main_1 tbdr">
            <h6>1-16 of over 2,000 results for "laptop"</h6>
          </div>
          <div className="p_srch_main_2 tbdr">
            <div className="row h-100  m-0">
              <div className="col-3  p-0 tbdr">
                <div className="p_aside_str tbdr">
                  <span className=" d-block fw-bold mb-2">Avg. Customer Review</span>
                  <ul className="list-group">
                    <li className="list-group-item border-0 p-0 p_anch_dec">
                      <a href="#" className="text-dark"><span className="sprsheet float-start p_5star d-block p_aside_star"></span><span className="float-start ms-2 " style={{ fontSize: '12px' }}>&amp; Up</span></a>
                    </li>
                    <li className="list-group-item border-0 p-0 p_anch_dec">
                      <a href="#" className="text-dark"><span className="sprsheet float-start p_4star d-block p_aside_star"></span><span className="float-start ms-2 " style={{ fontSize: '12px' }}>&amp; Up</span></a>
                    </li>
                    <li className="list-group-item border-0 p-0 p_anch_dec">
                      <a href="#" className="text-dark"><span className="sprsheet float-start p_3star d-block p_aside_star"></span><span className="float-start ms-2 " style={{ fontSize: '12px' }}>&amp; Up</span></a>
                    </li>
                    <li className="list-group-item border-0 p-0 p_anch_dec">
                      <a href="#" className="text-dark"><span className="sprsheet float-start p_2star d-block p_aside_star"></span><span className="float-start ms-2 " style={{ fontSize: '12px' }}>&amp; Up</span></a>
                    </li>
                    <li className="list-group-item border-0 p-0 p_anch_dec">
                      <a href="#" className="text-dark"><span className="sprsheet float-start p_1star d-block p_aside_star"></span><span className="float-start ms-2 " style={{ fontSize: '12px' }}>&amp; Up</span></a>
                    </li>

                  </ul>
                </div>
                <div className="p_aside_brand p_anch_dec p_srch_a">
                  <span className="d-block fw-bold mb-2">Brand</span>
                  <ul className="list-group">
                    <li className="list-group-item border-0 p-0  p_srch_a">
                      <a href="#" className="text-dark">
                        <input className="form-check-input me-1" type="checkbox" value="" />
                        HP
                      </a>
                    </li>
                    <li className="list-group-item border-0 p-0  p_srch_a">
                      <a href="#" className="text-dark">
                        <input className="form-check-input me-1" type="checkbox" value="" />
                        HP
                      </a>
                    </li>
                    <li className="list-group-item border-0 p-0  p_srch_a">
                      <a href="#" className="text-dark">
                        <input className="form-check-input me-1" type="checkbox" value="" />
                        HP
                      </a>
                    </li>
                    <li className="list-group-item border-0 p-0  p_srch_a">
                      <a href="#" className="text-dark">
                        <input className="form-check-input me-1" type="checkbox" value="" />
                        HP
                      </a>
                    </li>
                    <li className="list-group-item border-0 p-0  p_srch_a">
                      <a href="#" className="text-dark">
                        <input className="form-check-input me-1" type="checkbox" value="" />
                        HP
                      </a>
                    </li>
                    <li className="list-group-item border-0 p-0  p_srch_a">
                      <a href="#" className="text-dark">
                        <input className="form-check-input me-1" type="checkbox" value="" />
                        HP
                      </a>
                    </li>
                    <div id="demo" class="collapse">
                      <li className="list-group-item border-0 p-0  p_srch_a">
                        <a href="#" className="text-dark">
                          <input className="form-check-input me-1" type="checkbox" value="" />
                          HP
                        </a>
                      </li>
                      <li className="list-group-item border-0 p-0  p_srch_a">
                        <a href="#" className="text-dark">
                          <input className="form-check-input me-1" type="checkbox" value="" />
                          HP
                        </a>
                      </li>
                      <li className="list-group-item border-0 p-0  p_srch_a">
                        <a href="#" className="text-dark">
                          <input className="form-check-input me-1" type="checkbox" value="" />
                          HP
                        </a>
                      </li>
                      <li className="list-group-item border-0 p-0  p_srch_a">
                        <a href="#" className="text-dark">
                          <input className="form-check-input me-1" type="checkbox" value="" />
                          HP
                        </a>
                      </li>

                    </div>
                    <a href="#" className="" data-bs-toggle="collapse" data-bs-target="#demo">See more</a>
                  </ul>
                </div>
                <div className="">
                  <span className="d-block fw-bold">Deals</span>
                  <ul class="list-group">
                    <li class="list-group-item border-0 p-0">Under ₹20,000</li>
                    <li class="list-group-item border-0 p-0">₹20,000-₹30,000</li>
                    <li class="list-group-item border-0 p-0">₹30,000-₹40,000</li>
                    <li class="list-group-item border-0 p-0">₹40,000-₹50,000</li>
                   </ul>

                </div>
              </div>
              <div className="col-9 tbdr">
                <div className="  border-top border-bottom p_serch_filtertop">
                  <h2>Filter by price</h2>
                  <ul className="nav">
                    <li className="nav-item me-2">
                      <a className="nav-link btn btn-light border  text-dark" href="#">Under ₹ 20,000</a>
                    </li>
                    <li className="nav-item me-2">
                      <a className="nav-link btn btn-light border text-dark" href="#">₹20,000 -₹30,000  </a>
                    </li>
                    <li className="nav-item me-2">
                      <a className="nav-link btn btn-light border text-dark" href="#">₹30,000 -₹40,000</a>
                    </li>
                    <li className="nav-item me-2">
                      <a className="nav-link btn btn-light border text-dark" href="#">₹40,000 -₹50,000</a>
                    </li>
                    <li className="nav-item me-2">
                      <a className="nav-link btn btn-light border text-dark" href="#">Over ₹ 20,000</a>
                    </li>
                  </ul>
                </div>
                <div className=" border-top border-bottom p_search_prodreslt">
                  <div className="row pt-4 pb-4 m-0">
                    <div className="col-3 ">
                      <a href="#"> <img className="img-fluid " src="./images/main_images/srclaptop.jpg" /></a>
                    </div>
                    <div className="col-9  ">
                      <h5 className=" p_anch_dec p_srch_a"><a href="#" className="text-dark">Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 15.6" FHD IPS Thin &amp; Light Laptop (8GB/256GB SSD + 1TB HDD/Win 10/Office/Integrated Iris Xe Graphics/Fingerprint</a></h5>

                      <a href="#" className=" d-block sprsheetcont sprsheet tbdr p_5star"></a>
                      <span ><span className="text-danger">₹</span><span className="text-danger fs-4 me-2">37,000</span><span className="text-decoration-line-through me-2 ">₹39,290</span><span className="">Save ₹1,070(5%)</span></span>
                      <span className="d-block">Save extra with No Cost EMI</span>
                      <p className="position-relative"><a href="#" className="serchprime tbdr d-block"></a><span className="position-absolute p_primetxt"><span className="me-2"> Get it by</span><span className="fw-bold">Friday, July 16</span></span></p>
                      <span >FREE Delivery by Amazon</span>
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


Search.propTypes = {}
export default Search