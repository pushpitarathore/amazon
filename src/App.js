
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBars, faCartPlus, faUser, faChevronRight, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Flag from 'react-world-flags';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Carousel } from 'react-bootstrap'



/**
* @author
* @class App
**/
//we are using class componants
class App extends Component {
  //1. properties
  state = {
    x: '',
    y: 'l934',
    showAllModal: false,
    showSigninModal: false,
    showCountryFlagdd: false
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

    const handleClose = () => {
      this.setState({ showAllModal: false });
    }
    const handleShow = () => {
      this.setState({ showAllModal: true });
    }
    const handleClose2 = () => {
      this.setState({ showSigninModal: false });
    }
    const handleShow2 = () => {
      this.setState({ showSigninModal: true });
    }
    const handleClose3 = () => {
      this.setState({ showCountryFlagdd: false });
    }
    const handleShow3 = () => {
      this.setState({ showCountryFlagdd: true });
    }




    return (

      <div>
        <Modal className="headermodal h-100" show={this.state.showAllModal} onHide={handleClose} animation={false}>
          <Modal.Header className="text-white mhcolor" closeButton>
            <h5 className="modal-title" id="staticBackdropLabel"><FontAwesomeIcon className="me-2" icon={faUser} />Hello, Sign in</h5>
          </Modal.Header>
          <Modal.Body >
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
          </Modal.Body>
        </Modal>
        <Modal className="text-center p_ht_signin_model" show={this.state.showSigninModal} onHide={handleClose2} animation={false}>
          <Modal.Header closeButton>
            <button className="btn btn-warning w-50">Sign in</button>
            <p className="">New Coustmer?<a className="btn btn-link" href="#">Start here.</a></p>
          </Modal.Header>
          <Modal.Body>
            <div className="row m-0">
              <div className="col border-end ">
                <h5>Your Lists</h5>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link " href="#">Create Wish lists</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Find a Wish list</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Wish from Any Website</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#" >Babt Wish list</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#" >Discover Your Style</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#" >Explore Showroom</a>
                  </li>
                </ul>
              </div>
              <div className="col ">
                <ul class="nav flex-column">
                  <h5>Your Account</h5>
                  <li class="nav-item">
                    <a class="nav-link " href="#">Your Account</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Your Wish list</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Your Recommendations</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#" >Your Prime Membership</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#" >Your Prime Vedio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#" >Your Subscribe &amp; Saved Item</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#" >Membership &amp; Subscriptions</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#" >Your Amazon Business Account</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#" >Your Seller Account</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#" >Manage Your Content &amp; Devices</a>
                  </li>
                </ul>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Modal className="p_ht_countrydd" show={this.state.showCountryFlagdd} onHide={handleClose3} animation={false}>
          <Modal.Header >
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" u="flexRadioDefault1">
                English-EN
              </label>
            </div>
          </Modal.Header>
          <Modal.Body>
            <form>
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
            </form>

          </Modal.Body>
          <Modal.Footer>
            <div><p> <Flag className=" p-1 d-inline-block " height="25 " code={'in'} />You are shopping on Amazon.in.</p>
              <a href="#" className="btn btn-link">change country/religion</a>
            </div>
          </Modal.Footer>
        </Modal>
        <header>
          <div className={'p_header_top p-1 w-100 ' + this.state.x}>
            <button className="h-100 me-1 btn" style={{ 'width': '9%' }}>

            </button>
            <button className="h-100 fs-6 text-white me-1 p-0 btn" style={{ 'width': '13%' }}>
              Hello
              <span className="fw-bold d-block"><span  ><FontAwesomeIcon className="" icon={faMapMarkerAlt} />Select Your Adderess</span></span>
            </button>
            <form className="hform  me-1 bg-white  rounded-2 d-inline-block p-1  h-75" style={{ 'width': '44%' }} >C</form>
            <button onMouseOver={handleShow3} className="h-100 me-1 btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop1" style={{ 'width': '4%' }}><Flag className="  d-inline-block " height="25 " code={'in'} /><FontAwesomeIcon className="text-white d-inline-block" icon={faChevronDown} /></button>
            <button onMouseEnter={handleShow2} className="h-100 me-1 btn text-white" data-bs-toggle="modal" data-bs-target="#exampleModal3" style={{ 'width': '12%' }}>Hello,Sign in
              <div className="fw-bold">Account &amp; Lists <FontAwesomeIcon className="text-white" icon={faChevronDown} /></div>
            </button>
            <button className="h-100 me-1 btn text-white fs-6 " style={{ 'width': '8%' }}>Return
              <div className="fw-bold">&amp; orders</div></button>
            <button className="h-100 me-1 btn fs-6 text-white fw-bold " style={{ 'width': '7%' }}><FontAwesomeIcon className="fs-3" icon={faCartPlus} />Cart</button>
          </div>
          <div className="p_header_bottom">
            <ul className=" ms-2 nav float-start">
              <li className="nav-item">
                <button onClick={handleShow} type="button" className="btn m-1 p-0 " data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <a className="nav-link text-white m-1 fs-6 p-0" href="#"><FontAwesomeIcon className="fs-5 me-1" icon={faBars} /> All</a></button>
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
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block "
                  src="./images/slider/1.jpg"
                  alt="First slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src="./images/slider/2.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src="./images/slider/3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src="./images/slider/4.jpg"
                  alt="Fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src="./images/slider/5.jpg"
                  alt="Fivth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src="./images/slider/6.jpg"
                  alt="Sixth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src="./images/slider/7.jpg"
                  alt="Seventh slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src="./images/slider/8.jpg"
                  alt="Eighth slide"
                />
              </Carousel.Item>
            </Carousel>


          </div>
          <div className="ml-1 position-absolute  p_main_bottom  ">
            <div className="p_main_bottom_1 m-0 mb-3 row">
              <div className="col p-2">
                <div className="p_mainbox1 p-3 ">
                  <div className="p_mainbox1_inner  h-100 bg-danger">
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
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/3..jpg" />
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
                    <div className="w-100 bg-warning">
                      <h5>Everyday essentials</h5>
                      <div className="row  m-0 ">
                        <div className="col-6 tbdr p-0">
                          <a href="#" className="p-0 btn btn-success   rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/5.jpg" />
                            Cleaning essentials
                          </a>

                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="p-0 btn btn-success rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 ps-1" src="./images/main_images/6.jpg" />
                            Immunity amp; healthCare
                          </a>
                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="p-0 btn btn-success rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/7.jpg" />
                            Women's personal care
                          </a>


                        </div>

                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="p-0 btn btn-success rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 ps-1" src="./images/main_images/8.jpg" />
                            Men's grooming
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
                    <div className="w-100 bg-warning">
                      <h5>Automotive essentials | Up to 60% off</h5>
                      <div className="row  m-0 ">
                        <div className="col-6 tbdr p-0">
                          <a href="#" className="p-0 btn btn-success   rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/9.jpg" />
                            Cleaning Accessories
                          </a>

                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="p-0 btn btn-success rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 ps-1" src="./images/main_images/10.jpg" />
                            Tyre &amp; rim care
                          </a>
                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="p-0 btn btn-success rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/11.jpg" />
                            Helmets
                          </a>


                        </div>

                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="p-0 btn btn-success rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 ps-1" src="./images/main_images/12.jpg" />
                            Veccum cleaner
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="btn btn-link">See More</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row ">
                  <div className="col-12 tbdr bg-white mb-3 p-3" style={{ 'height': 150 + 'px' }}>
                    <h4 className="p-2">Sign in for your best experience</h4>
                    <button className="btn btn-warning w-100 rounded-1 border border-secondary">Sign in securely</button>
                  </div>
                  <div className="col-12 p-0  tbdr bg-white " style={{ 'height': 254 + 'px' }}>
                    <img className="img-fluid h-100 w-100" src="./images/main_images/13.jpg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p_main_bottom_2 row m-0 mb-3">
              <div className="col">a </div>
              <div className="col p-2">
                <div className="p_mainbox1 p-3 ">
                  <div className="p_mainbox1_inner  h-100 bg-danger">
                    <div className="w-100 bg-warning">
                    <h5>Home essentials | Amazon Brands &amp; more</h5>
                      <div className="row  m-0 ">
                        <div className="col-6 tbdr p-0">
                          <a href="#" className="p-0 btn btn-success   rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/14.jpg" />
                            Bedsheet curtains &amp; more
                          </a>

                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="p-0 btn btn-success rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 ps-1" src="./images/main_images/15.jpg" />
                            Cloth organizers,boxes &amp; baskets
                          </a>
                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="p-0 btn btn-success rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/16.jpg" />
                            Wallstickers &amp; clocks
                          </a>


                        </div>

                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="p-0 btn btn-success rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 ps-1" src="./images/main_images/17.jpg" />
                            Smart bulbs &amp; string lights
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="btn btn-link">See More</a>
                  </div>
                </div>
              </div>
              <div className="col">
              <div className="col p-2">
                <div className="p_mainbox1 p-3 ">
                  <div className="p_mainbox1_inner  h-100 bg-danger">
                    <div className="w-100 bg-warning">
                      <h5>Home essentials | Amazon Brands &amp; more</h5>
                      <div className="row  m-0 ">
                        <div className="col-6 tbdr p-0">
                          <a href="#" className="p-0 btn btn-success   rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/18.jpg" />
                          Clothing
                          </a>

                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="p-0 btn btn-success rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 ps-1" src="./images/main_images/19.jpg" />
                            Footwear
                          </a>
                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="p-0 btn btn-success rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/20.jpg" />
                            Watches
                          </a>


                        </div>

                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="p-0 btn btn-success rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 ps-1" src="./images/main_images/21.jpg" />
                            Bags &amp; luggage
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="btn btn-link">See More</a>
                  </div>
                </div>
              </div>
              </div>
              <div className="col">d</div>
            </div>
            <div className="p_main_bottom_3 mb-3 p-3">
              <div className="mb-5">
                <h5 className="float-start">Today's Deals</h5><button type="button" className=" float-start btn btn-link">see all deals</button>
              </div>

              <Carousel id="carouselExampleControls2"  >
                <Carousel.Item>
                  <div className="imgcont row ">
                    <div className="col p-0 text-center">
                      <div className="imgplace"></div>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="col p-0 text-center">
                      <img className="img-fluid" src="./images/main_images/7.jpg" />
                    </div>
                    <div className="col p-0 text-center">
                      <img className="img-fluid" src="./images/main_images/8.jpg" />
                    </div>
                    <div className="col p-0 text-center">
                      <img className="img-fluid" src="./images/main_images/9.jpg" />
                    </div>
                    <div className="col p-0 text-center">
                      <img className="img-fluid" src="./images/main_images/10.jpg" />
                    </div>
                    <div className="col p-0 text-center">
                      <img className="img-fluid" src="./images/main_images/6.jpg" />
                    </div>
                  </div>


                </Carousel.Item>
                <Carousel.Item>
                  <div className="imgcont row ">
                    <div className="col p-0 text-center">1</div>
                    <div className="col p-0 text-center">2</div>
                    <div className="col p-0 text-center">3</div>
                    <div className="col p-0 text-center">4</div>
                    <div className="col p-0 text-center">5</div>
                    <div className="col p-0 text-center">6</div>
                  </div>


                </Carousel.Item>
                <Carousel.Item>
                  <div className="imgcont row ">
                    <div className="col p-0 text-center">1</div>
                    <div className="col p-0 text-center">2</div>
                    <div className="col p-0 text-center">3</div>
                    <div className="col p-0 text-center">4</div>
                    <div className="col p-0 text-center">5</div>
                    <div className="col p-0 text-center">6</div>
                  </div>


                </Carousel.Item>
              </Carousel>
            </div>
            <div className="p_main_bottom_4 mb-3 p-3 tbdr">
              <div className="mb-3">
                <h5 className="">Best Sellers in Computers &amp; Accessories</h5>
              </div>
              <Carousel id="carouselExampleControls3"  >
                <Carousel.Item>
                  <div className="  imgcont2 row ">
                    <div className="col p-0 text-center">
                    </div>
                    <div className="col p-0 text-center">
                      <img className="img-fluid" src="./images/main_images/7.jpg" />
                    </div>
                    <div className="col p-0 text-center">
                      <img className="img-fluid" src="./images/main_images/8.jpg" />
                    </div>
                    <div className="col p-0 text-center">
                      <img className="img-fluid" src="./images/main_images/9.jpg" />
                    </div>
                    <div className="col p-0 text-center">
                      <img className="img-fluid" src="./images/main_images/10.jpg" />
                    </div>
                    <div className="col p-0 text-center">
                      <img className="img-fluid" src="./images/main_images/6.jpg" />
                    </div>
                  </div>


                </Carousel.Item>
                <Carousel.Item>
                  <div className="imgcont2  row ">
                    <div className="col p-0 text-center">1</div>
                    <div className="col p-0 text-center">2</div>
                    <div className="col p-0 text-center">3</div>
                    <div className="col p-0 text-center">4</div>
                    <div className="col p-0 text-center">5</div>
                    <div className="col p-0 text-center">6</div>
                  </div>


                </Carousel.Item>
                <Carousel.Item>
                  <div className="imgcont2 row ">
                    <div className="col p-0 text-center">1</div>
                    <div className="col p-0 text-center">2</div>
                    <div className="col p-0 text-center">3</div>
                    <div className="col p-0 text-center">4</div>
                    <div className="col p-0 text-center">5</div>
                    <div className="col p-0 text-center">6</div>
                  </div>


                </Carousel.Item>
                <Carousel.Item>
                  <div className="row imgcont2">
                    <div className="col p-0 text-center">1</div>
                    <div className="col p-0 text-center">2</div>
                    <div className="col p-0 text-center">3</div>
                    <div className="col p-0 text-center">4</div>
                    <div className="col p-0 text-center">5</div>
                    <div className="col p-0 text-center">6</div>
                  </div>


                </Carousel.Item>
                <Carousel.Item>
                  <div className=" row imgcont2">
                    <div className="col p-0 text-center">1</div>
                    <div className="col p-0 text-center">2</div>
                    <div className="col p-0 text-center">3</div>
                    <div className="col p-0 text-center">4</div>
                    <div className="col p-0 text-center">5</div>
                    <div className="col p-0 text-center">6</div>
                  </div>


                </Carousel.Item>
              </Carousel>

            </div>
            <div className="p_main_bottom_5 mb-3 tbdr"></div>
            <div className="p_main_bottom_6 mb-3 tbdr"></div>
            <div className="p_main_botton_7 mb-3 tbdr"></div>
            <div className="p_main_botton_8 mb-3  container tbdr">
              <img className="" src=".images/main_images/banner.jpg" />
            </div>
            <div className="p_main_botton_9 mb-3 tbdr"></div>
            <div className="p_main_botton_10 mb-3 tbdr"></div>
            <div className="p_main_botton_11 mb-3 tbdr"></div>
            <div className="p_main_botton_12 mb-3 tbdr"></div>
            <div className="p_main_botton_13mb-3 tbdr"></div>
            <div className="p_main_botton_14 mb-3 tbdr"></div>
          </div>
        </div>
        <footer>
          <a href="#" className="btn btn-success border-0  lh-lg w-100" style={{ backgroundColor: '#37475a', height: '47px' }}>Back to Top</a>

          <div className=" p_footer_top pb-5">
            <div className="container pt-5">
              <div className="  row text-white  ">
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

          </div>
          <div className="p_footer_bottom"></div>
        </footer>

      </div >
    );
  }
}


App.propTypes = {}
export default App

