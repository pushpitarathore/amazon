import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBars, faCartPlus, faUser, faChevronRight, faChevronUp, faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import Flag from 'react-world-flags';
import { Modal } from 'react-bootstrap';
import Ember from '../assets/font/ember/AmazonEmber_Rg.ttf';
const myCustomFont = `
@font-face{
  font-family:'emberRg';
  src:url('${Ember}') format('truetype');
}
html,body{
  font-family:'emberRg',Arial,sans-serif !important;
}
`;

/**
* @author
* @class Header
**/

class Header extends Component {
  //1. properties
  state = {
    x: '',
    y: 'l934',
    z: '',
    overlay: 'p_invisible',
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
  //this.overlay
  hideOverlay = () => {
    this.setState({ overlay: 'p_invisible' });
  }
  overlay = () => {
    this.setState({ overlay: 'p_visible' });
  }
  handleForm = () => {
    if (this.state.z === 'formBorder') {
      this.setState({ z: '' });

    } else {
      this.setState({ z: 'formBorder' });
    }
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
      <React.Fragment>
        <style>
          {myCustomFont}
        </style>
        <div className={'overlay w-100 h-100 ' + this.state.overlay}></div>
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
       
        <header>
          <div className={'p_header_top p-1  w-100 ' + this.state.x}>
            <button className="h-100 me-1 btn" style={{ 'width': '9%' }}>
              <img className="img-fluid" src="" />
            </button>
            <button className="h-100  text-white me-1 p-0 btn" style={{ 'width': '14%' }}>
              Hello
              <span className="fw-bold  d-block"><span  ><FontAwesomeIcon className="" icon={faMapMarkerAlt} />Select your adderess</span></span>
            </button>
            <form className={'hform bg-white  d-inline-block ' + this.state.z} style={{ 'width': '44%' }}>
              <div className="row m-0">
                <div className="col-1 p-0 ">
                  <div className="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" className="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      All
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                      <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                      <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                    </ul>
                  </div>

                </div>
                <div className="col-10 p-0 ">
                  <input onBlur={this.handleForm} onFocus={this.handleForm} className="form-control rounded-0 " />
                </div>
                <div className="col-1 p-0">
                  <button className="btn btn-warning w-100 h-100  hformsbmt " type="submit"><FontAwesomeIcon className="fs-4 " icon={faSearch} /></button>
                </div>
              </div>
            </form>
            <button onMouseOut={this.hideOverlay} onMouseOver={this.overlay} className=" p_ht_countrydd_btn h-100 p-0 btn position-relative " style={{ 'width': '4%' }}><Flag className="  d-inline-block me-1" height="16 " code={'in'} /><FontAwesomeIcon className="text-white  d-inline-block" icon={faCaretDown} />
              
              <div className="p_ht_countrydd p-3 text-start position-absolute bg-white border">
              <div className="arrow-up  position-absolute p_aup_ht_countrydd"></div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                  <label className="form-check-label" for="flexRadioDefault1">
                    English-EN
                  </label>
                </div>
                <hr/>
                <form>
                  
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      English-EN
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
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
                <hr/>
                <div ><p className="m-0"> <Flag className=" p-1 d-inline-block  " height="16 " code={'in'} />You are shopping on Amazon.in.</p>
                  <a href="#" className="btn btn-link">change country/region</a>
                </div>
              </div>
            </button>
            <button onMouseOut={this.hideOverlay} onMouseOver={this.overlay} className="h-100 p_ht_signin_model_button me-1 btn text-white position-relative" style={{ 'width': '12%' }}>
              <div>Hello,Sign in</div>
              <span className="fw-bold">Account &amp; Lists<FontAwesomeIcon className="ms-2" icon={faCaretDown}/> </span>
              
              <div className=" p_ht_signin_model position-absolute bg-white border rounded-1 ">
              <div className="arrow-up  position-absolute p_aup_ht_signin_model"></div>
                <div>
                  <button className=" btn btn-warning  w-50 mt-3 mb-1 ">Sign in</button>
                  <p className="text-dark border-bottom mb-4">New Coustmer?<a className="btn btn-link " href="#">Start here.</a></p>
                </div>
                <div className="row m-0  ">
                  <div className="col text-start ms-3 border-end ">
                    <h5 className="text-dark m-0 fw-bold">Your Lists</h5>
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link " href="#">Create Wish lists</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Find a Wish list</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Wish from Any Website</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" >Babt Wish list</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" >Discover Your Style</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" >Explore Showroom</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col text-start ms-3">
                    <ul className="nav flex-column">
                      <h5 className="text-dark fw-bold">Your Account</h5>
                      <li className="nav-item">
                        <a className="nav-link " href="#">Your Account</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Your Wish list</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Your Recommendations</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" >Your Prime Membership</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" >Your Prime Vedio</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" >Your Subscribe &amp; Saved Item</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" >Membership &amp; Subscriptions</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" >Your Amazon Business Account</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" >Your Seller Account</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" >Manage Your Content &amp; Devices</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
              <li className="nav-item position-relative">
                <a onMouseOut={this.hideOverlay} onMouseOver={this.overlay} className="nav-link prime" href="#" >Prime<FontAwesomeIcon className="text-white " icon={faCaretDown} /></a>
                <div className=" primeBox rounded-1 bg-white position-absolute p-3 d-none">
                  <div className="arrow-up  position-absolute p_aup_primeBox"></div>
                  <img className="img-fluid" src="./images/main_images/prime.jpg" />
                </div>
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
            <ul className=" ">
            <li className="nav-item  ">
                <a href="#">
                  <img className="img-fluid" src="./images/slider/hbanner.jpg" />
                </a>

              </li>
            </ul>

            <ul className="nav d-none  float-start">
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

      </React.Fragment>
    )
  }
}


Header.propTypes = {}
export default Header