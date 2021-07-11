import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../Component/Layout'
import { faCartPlus, faChevronDown, faChevronRight, faLock, faMapMarkerAlt, faPlay, faStar, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactImageMagnify from 'react-image-magnify';


/**
* @author
* @class Detail
**/

class Detail extends Component {
  //property
  state = {
    prodscrllfix: 'position-relative'
  }
  //constryctor
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.detailHandleScroll);
  }
  detailHandleScroll = () => {
    console.log('detail okay' + window.scrolY);
    if (window.scrollY < 90) {
      this.setState({ prodscrllfix: 'position-relative top-0' });
    } else if (window.scrollY >= 90 && window.scrollY <= 1200) {
      this.setState({ prodscrllfix: 'position-fixed top-0' });
    } else {
      this.setState({ prodscrllfix: 'position-relative t1225' });
    }
  }
  render() {
    return (
      <Layout>
        <div className="p_main  mx-auto p_dtl_main">
          <div className="p_dtl_top_bannr tbdr"></div>
          <div className="row   m-0 p_dtl_prodCont ">
            <div className="col-9 p-0 tbdr ">
              <div className="row m-0 h-100">
                <div className="col-1 p-0 tbdr ">
                  <ul className={'nav flex-column p_dtl_prodthumbnail mx-auto ' + this.state.prodscrllfix}>
                    <li className="nav-item">
                      <a className="nav-link p-0 mb-1 mt-1 border" href="#">
                        <img className="img-fluid" src="./images/main_images/laptop.jpg" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0 mb-1 mt-1 border" href="#">
                        <img className="img-fluid" src="./images/main_images/laptop.jpg" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0 mb-1 mt-1 border" href="#">
                        <img className="img-fluid" src="./images/main_images/laptop.jpg" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0 mb-1 mt-1 border" href="#" >
                        <img className="img-fluid" src="./images/main_images/laptop.jpg" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0 mb-1 mt-1 border" href="#" >
                        <img className="img-fluid" src="./images/main_images/laptop.jpg" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 p-0 tbdr ">
                  <div className={'p_dtl_prodMainImg ' + this.state.prodscrllfix}>
                    <ReactImageMagnify {...{
                      smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: './images/main_images/laptop.jpg'
                      },
                      largeImage: {
                        src: './images/main_images/laptop.jpg',
                        width: 1200,
                        height: 1800
                      },
                      shouldUsePositiveSpaceLens: true
                    }} />
                  </div>

                </div>
                <div className="col-5 tbdr  ">
                  <h4>
                    ASUS VivoBook 15 (2020), 39.6 cm HD, Dual Core Intel Celeron N4020, Thin and Light Laptop (4GB RAM/256GB SSD/Integrated Graphics/Windows 10 Home/Transparent Silver/1.8 Kg), X515MA-BR002T
                  </h4>
                  <a className=" d-inline-block" href="#">Visit the ASUS Store</a>
                  <div className=" p_dtl_ratingbox_div position-relative ">

                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="ms-2 me-4 " icon={faChevronDown} />
                    <div className="p_dtl_ratingbox position-absolute start-0 border">
                      <div className="arrow-up  position-absolute p_aup_dtl_ratingbox "></div>
                      <FontAwesomeIcon className="text-warning" icon={faStar} />
                      <FontAwesomeIcon className="text-warning" icon={faStar} />
                      <FontAwesomeIcon className="text-warning" icon={faStar} />
                      <FontAwesomeIcon className="text-warning" icon={faStar} />
                      <FontAwesomeIcon className="text-warning" icon={faStar} />
                      <h5 className="fw-bolder">2.6 out of 5</h5>
                      <table className="table">
                        <tbody>
                          <tr>

                            <td className="w-25 ">
                              <a className="btn btn-link" href="#">5 star</a>
                            </td>
                            <td className="w-50">
                              <div className="progress h-50 mt-2">
                                <div className="progress-bar bg-warning " role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                              </div>
                            </td>
                            <td>75%</td>

                          </tr>
                        </tbody>
                      </table>

                    </div>
                    {/* <a  href="#">507 rating</a> */}
                  </div>

                  <a className="d-block" href="#">| 121 answared question </a>
                  <hr />
                  <span className="d-block">M.R.P. : <span className="text-decoration-line-through ">₹54,990.00</span></span>
                  <span className="d-block">Deal of the day :  <span className="fs-5 pricecolor">₹ 38,890.00</span></span>
                  <span className="d-block">You save :  <span className=" pricecolor">₹ 16,100.00(29%)</span></span>
                  <ul class="list-group">
                    <li class="list-group-item">Save Extra with 4 offers</li>
                    <li class="list-group-item">Bank Offer: Get Rs. 500 Amazon Gift Card on a minimum purchase of Rs 10000 with HDFC Bank Debit Card EMI transaction DetailsBank Offer: Get Rs. 500 Amazon Gift Card on a minimum purchase of Rs 100…Details</li>
                    <li class="list-group-item">No Cost EMI: Avail No Cost EMI on select cards for orders above ₹3000 DetailsNo Cost EMI: Avail No Cost EMI on select cards for orders above ₹3000 Details</li>
                    <li class="list-group-item">
              
                    </li>
                    
                  </ul>
                </div>

              </div>
            </div>
            <div className="col-3 ps-4 pe-4 tbdr">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1">
                          <div className="fw-bold">With exchange</div>
                          <span className="pricecolor">Up to ₹16,550 off</span>
                        </label>
                      </div>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <a className="ms-2  " href="#">select delivery location</a>
                      <button type="button" className="btn btn-light w-100 mt-3 p-0 mb-3 d-block">choose product to exchange<FontAwesomeIcon className="ms-1" icon={faChevronRight} /></button>

                      <a className="d-block " href="# ">how does exchange work??</a>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault1">
                          <div className="fw-bold mb-1">Without exchange</div>
                          <span className="pricecolor me-2">₹30,612.00</span>
                          <span>₹<span className="text-decoration-line-through">30,990.00</span></span>
                        </label>
                      </div>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div className="mb-3">
                        <span className="d-inline-block me-2">Quantity:- </span>
                        <select className="form-select-sm" aria-label="Default select example">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <button type="button" className="btn btn-warning w-100 border  mb-2 rounded-pill"><FontAwesomeIcon className="float-start fs-5" icon={faCartPlus} />ADD TO CART</button>
                      <button type="button" className=" btn btn-warning mb-2 w-100 border rounded-pill"><FontAwesomeIcon className="float-start fs-5" icon={faPlay} />BUY NOW</button>
                      <div className="mb-2"><FontAwesomeIcon icon={faLock} /><a className="ms-3" href="#">secure transition</a></div>
                      <form className="mb-2">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            Add gift option
                          </label>
                        </div>
                      </form>
                      <div><FontAwesomeIcon icon={faMapMarkerAlt} /><a className="ms-3" href="#">select your location</a></div>
                      <hr />
                      <button type="button" className="btn btn-light border w-100">Add to Wish List</button>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="p_dtl_prodContBottm tbdr border-top border-bottom mb-1"></div>
          <div className="p_dtl_havQ  border-top">
            <f2>Have a question? </f2>
            <div>Find answers in product info, Q&amp;As, reviews</div>
            <input className="w-75">

            </input>
          </div>
          <div className="p_dtl_prodRelItm tbdr border-top border-botom">
            <h5>Product related to this item</h5>
          </div>
          <div className="p_dtl_custAlsoRev tbdr border-top border-bottom">
            <h5>Customers viewed this item also</h5>
          </div>
          <div className="p_dtl_prodInfo"></div>
        </div>
      </Layout>
    )
  }
}


Detail.propTypes = {}
export default Detail