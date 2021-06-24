
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBars, faCartPlus, faUser, faChevronRight, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Flag from 'react-world-flags';
import React, { Component } from 'react';
import PropTypes from 'prop-types';



/**
* @author
* @class App
**/
//we are using class componants
class App extends Component {
  //1. properties
  state = {
    x: '',
    y: 'l934'
  }
  //2.constructor
  constructor(props) {
    super(props);
  }

  //3.methods
  //create only by using fat arrow
  handleScroll = () => {
    console.log("okay" + window.scrollY);
    if (window.scrollY >= 60) {
      this.setState({ x: 'position-fixed start-0 top-0' })
    } else {
      this.setState({ x: ' ' })
    }
  }
  handleModal = () => {
    this.setState({ y: 'l433' });
  }
  closeModal = () => {
    this.setState({ y: 'l934' });
    return false;
  }
  componentDidMount() {
    //this method will be called when component is renderd
    window.addEventListener('scroll', this.handleScroll);
    // console.log('page is loaded');
  }

  render() {
    return (

      <div>
        <div className="modal show p_ht_countrydd" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdrop1Label" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdrop1Label">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" for="flexRadioDefault1">
                    English-EN
                  </label>
                </div>
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" for="flexRadioDefault1">
                    English-EN
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Default checked radio
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" for="flexRadioDefault1">
                    English-EN
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" for="flexRadioDefault1">
                    English-EN
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <div><p> <Flag className=" p-1 d-inline-block " height="25 " code={'in'} />You are shopping on Amazon.in.</p>
                <a href="#" className="btn btn-link">change country/religion</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className={'modal-dialog h-100 modal-dialog-scrollable headermodal ' + this.state.y}>
            <div className="modal-content">
              <div className="modal-header text-white mhcolor" >
                <h5 className="modal-title" id="staticBackdropLabel"><FontAwesomeIcon className="me-2" icon={faUser} />Hello, Sign in</h5>
                <button onClick={this.closeModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body border-bottom">
                <h5 className="fw-bolder ps-4">Trending</h5>
                <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link " href="#">Best Sellers</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">New Releases</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">Movers &amp; Shakers</a>
                  </li>
                </ul>
                <h5 className="fw-bolder ps-4">Digital Content And Devices</h5>
                <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link " href="#">Echo &amp; Alexa<FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Fire Tv<FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">Kindle E-Readers &amp; E-Books<FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">Audible Audiobooks<FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">Amazon Prime Vedio<FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link  " href="#">Amazon Prime Music<FontAwesomeIcon className="float-end" icon={faChevronRight} />c</a>
                  </li>
                </ul>

                <h5 className="fw-bolder ps-4 ">Shop By Department </h5>
                <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link " href="#">Mobiles,Computers<FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">TV,Applinces,Electronics<FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">Men's Fashion<FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">Women's Fashion<FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">See All<FontAwesomeIcon className="ms-2" icon={faChevronUp} /></a>
                  </li>

                </ul>
                <h5 className="fw-bolder ps-4 ">Programs &amp; Features</h5>
                <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link " href="#">Gift Card &amp; Mobile Reacharges<FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Flight Tickets</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">Amazon Assitant</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link  " href="#">Full Store Directory</a>
                  </li>
                </ul>
                <h5 className="fw-bolder ps-4 ">Help &amp; Settings</h5>
                <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link " href="#">Your Account</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Coustmer Service</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">Sign In</a>
                  </li>

                </ul>

              </div>

            </div>
          </div>
        </div>

        <header>
          <div className={'p_header_top p-1 w-100 ' + this.state.x}>
            <button className="h-100 me-1 btn" style={{ 'width': '9%' }}>

            </button>
            <button className="h-100 fs-6 text-white me-1 p-0 btn" style={{ 'width': '13%' }}>
              Deliver to pushpita

              <span className="fw-bold d-block"><span className="p_city"><FontAwesomeIcon icon={faMapMarkerAlt} /> Neemuch</span><span className="p_pincode">458441</span></span>
            </button>
            <form className="hform  me-1 bg-white  rounded-2 d-inline-block p-1  h-75" style={{ 'width': '44%' }} >C</form>
            <button className="h-100 me-1 btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop1" style={{ 'width': '4%' }}><Flag className=" p-1 d-inline-block " height="25 " code={'in'} /><FontAwesomeIcon className="text-white d-inline-block" icon={faChevronDown} /></button>
            <button className="h-100 me-1 btn text-white" style={{ 'width': '12%' }}>Hello,Sign in
              <div className="fw-bold">Account &amp; Lists</div>
            </button>
            <button className="h-100 me-1 btn text-white fs-6 " style={{ 'width': '8%' }}>Return
              <div className="fw-bold">&amp; orders</div></button>
            <button className="h-100 me-1 btn fs-6 text-white fw-bold " style={{ 'width': '7%' }}><FontAwesomeIcon className="fs-3" icon={faCartPlus} />Cart</button>
          </div>
          <div className="p_header_bottom">
            <ul className=" ms-2 nav float-start">
              <li className="nav-item">
                <button onClick={this.handleModal} type="button" className="btn m-1 p-0 " data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <a className="nav-link text-white m-1 fs-6 p-0" href="#"><FontAwesomeIcon className="fs-5 me-1" icon={faBars} /> All</a></button>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Best Sellers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mobiles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >prime</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >Fasion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >Electronics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >New Realeses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >Customer Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >Amazon Pay</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >Computers</a>
              </li>
            </ul>
            <ul>
              <a className="hbanner">
                <img className="img.fluid float-end" src="./images/slider/hbanner.jpg" />
              </a>
            </ul>
            <ul className="nav  d-none float-start">
              <li className="nav-item">
                <a className="nav-link" href="#" >Home &amp; Kitchen</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >Today's Deals</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >Toys &amp; Games</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >Books</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >Sell</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >Coupens</a>
              </li>
            </ul>
          </div>
        </header>
        <div className="p_main position-relative ">
          <div className=" p_main1 p_main_top ">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" >
                  <img src="./images/slider/1.jpg" className="d-block " alt="..." />
                </div>
                <div className="carousel-item" >
                  <img src="./images/slider/2.jpg" className="d-block " alt="..." />
                </div>
                <div className="carousel-item" >
                  <img src="./images/slider/3.jpg" className="d-block " alt="..." />
                </div>
                <div className="carousel-item" >
                  <img src="./images/slider/4.jpg" className="d-block " alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/5.jpg" className="d-block" alt="..." />
                </div>
                <div className="carousel-item" >
                  <img src="./images/slider/6.jpg" className="d-block" alt="..." />
                </div>

                <div className="carousel-item" >
                  <img src="./images/slider/7.jpg" className="d-block " alt="..." />
                </div>
                <div className="carousel-item" >
                  <img src="./images/slider/8.jpg" className="d-block" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

          </div>
          <div className="ml-1 position-absolute  p_main_bottom  ">
            <div className="p_main_bottom_1 m-0 mb-3 row">
              <div className="col p-2">
                <div className="p_mainbox1 p-3 ">
                  <div className="p_mainbox1_inner w-100 h-100 bg-danger">
                    <div className="w-100 bg-warning">
                      <h5>Top picks for your home</h5>
                      <div className="row  m-0 ">
                        <div className="col-6 tbdr p-0">
                          <a href="#" className="p-0 btn btn-success   rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/1.jpg" />
                            AC's
                          </a>

                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="p-0 btn btn-success rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 ps-1" src="./images/main_images/2.jpg" />
                            Refrigerators
                          </a>
                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="p-0 btn btn-success rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/3.jpg" />
                            Microwaves
                          </a>


                        </div>

                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="p-0 btn btn-success rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 ps-1" src="./images/main_images/4.jpg" />
                            Washing Machines
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="btn btn-link">See More</a>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="p_mainbox1 p-3 ">
                  <div className="p_mainbox1_inner w-100 h-100 bg-danger">
                    <div className="w-100 bg-warning"></div>
                    <a href="#" className="btn btn-link">See More</a>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="p_mainbox1 p-3 ">
                  <div className="p_mainbox1_inner w-100 h-100 bg-danger">
                    <div className="w-100 bg-warning"></div>
                    <a href="#" className="btn btn-link">See More</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row ">
                  <div className="col-12 tbdr bg-white mb-4 p-3" style={{ 'height': 150 + 'px' }}>
                    <h4 className="p-2">Sign in for your best experience</h4>
                    <button className="btn btn-warning w-100 rounded-1 border border-secondary">Sign in securely</button>
                  </div>
                  <div className="col-12 p-0  tbdr bg-white " style={{ 'height': 254 + 'px' }}>
                    <img className="img-fluid w-100 h-100" src="./images/main_images/5.jpg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p_main_bottom_2 row m-0 mb-3">
              <div className="col-6">A</div>
              <div className="col-3">B</div>
              <div className="col-3">C</div>
            </div>
            <div className="p_main_bottom_3 p-3">
              <div className="">
                <h3 className="float-start">Today's Deals</h3><button type="button" className=" float-start btn btn-link">see all deals</button>
              </div>
              <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner text-center">
                  <div className="carousel-item active">
                    <div className="imgcont row ">
                      <div className="col">1</div>
                      <div className="col">2</div>
                      <div className="col">3</div>
                      <div className="col">4</div>
                      <div className="col">5</div>
                      <div className="col">6</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="imgcont row ">
                      <div className="col">7</div>
                      <div className="col">8</div>
                      <div className="col">9</div>
                      <div className="col">10</div>
                      <div className="col">11</div>
                      <div className="col">12</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="imgcont row ">
                      <div className="col">13</div>
                      <div className="col">14</div>
                      <div className="col">15</div>
                      <div className="col">16</div>
                      <div className="col">17</div>
                      <div className="col">18</div>
                    </div>
                  </div>
                </div>
                <button className=" p_cc carousel-control-prev rounded-end " type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="p_cc carousel-control-next rounded-start " type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

          </div>
        </div>
        <footer>
          <a href="#" className="btn btn-success border-0  lh-lg w-100" style={{ backgroundColor: '#37475a', height: '47px' }}>Back to Top</a>

          <div className=" p_footer_top ">
            <div className=" container row text-white ">
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
          <div className="p_footer_bottom"></div>
        </footer>

      </div>
    );
  }
}


App.propTypes = {}
export default App

