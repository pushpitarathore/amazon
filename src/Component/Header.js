import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChevronRight, faChevronUp, faCaretDown,  } from '@fortawesome/free-solid-svg-icons'
import Flag from 'react-world-flags';
import { Modal } from 'react-bootstrap';
import Ember from '../assets/font/ember/AmazonEmber_Rg.ttf';
import {Link} from 'react-router-dom';
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
    z: '',
    overlay: 'p_invisible',
    Allnavmenu: 'l366',
    Allnavclosebtn: 'd-none',
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
  handleAllnav = () => {
    this.setState({ Allnavmenu: 'l0', Allnavclosebtn: 'd-block', overlay: 'p_visible' });
  }
  Allnavclosebtn = () => {
    this.setState({ Allnavmenu: 'l366', Allnavclosebtn: 'd-none', overlay: 'p_invisible' });
  }
  render() {
        return (
      <React.Fragment>
        <style>
          {myCustomFont}
        </style>
        <div className={'overlay w-100 h-100 ' + this.state.overlay}></div>
        <button onClick={this.Allnavclosebtn} className={'Allnavclosebtn btn    position-fixed  ' + this.state.Allnavclosebtn}>
          <span className="p_cros_pos p_a_logo  d-block"></span>
        </button>
        <div className={'Allnavmenu position-fixed bg-white h-100  ' + this.state.Allnavmenu}>
          <div className="text-white mhcolor p-3">
            <h5 className="modal-title" id="staticBackdropLabel">
              <span className="p_user_pos p_a_logo  float-start d-block"></span>
              <span className="fw-bold ps-2"> Hello, Sign in</span>
            </h5>
          </div>
          <div className="overflow-scroll P_navmenuheight">
            <h5 className="fw-bolder pt-4 ps-4">Trending</h5>
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
            <h5 className="fw-bolder ps-4 pt-3">Digital Content And Devices</h5>
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

            <h5 className="fw-bolder ps-4 pt-3">Shop By Department </h5>
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
            <h5 className="fw-bolder ps-4 pt-3 ">Programs &amp; Features</h5>
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
                <Link to="/youraccount" className="nav-link ">Your Account</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Coustmer Service</a>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link " >Sign In</Link>
              </li>

            </ul>
          </div>
        </div>

        <header>
          <div className={'p_header_top p-1  w-100 ' + this.state.x}>
            <button className="h-100 me-1  pe-0 mt-0 btn" style={{ 'width': '10%',fontSize:'14px' }}>
              <span className=" float-start me-0  pe-0 p_home_a_box  p_a_logo p_logo_position"></span>
              <span className="text-white float-start ps-0 pt-1 ">.in</span>
            </button>
            <button className="h-100 ps-0  text-white me-1 p-0 btn" style={{ 'width': '13%', fontSize: '14px' }}>
              Hello
              <span className="fw-bold  d-block">
                <span className=" d-block float-start ps-0 p-0 p_loc_pos p_a_logo " ></span>
                <span className="  float-start ps-0 pt-1" >Select your adderess</span>
              </span>
            </button>
            <form className={'hform bg-white  d-inline-block ' + this.state.z} style={{ 'width': '47%',height:'44px' }}>
              <div className="row m-0">
                <div className="col-1 p-0 ">
                  <div className="btn-group" role="group" style={{borderRadius:'9px'}}>
                    <button id="btnGroupDrop1" type="button" className="btn   bg-light  border-end mx-auto dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      All
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                      <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                      <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                    </ul>
                  </div>

                </div>
                <div className="col-10 p-0 ">
                  <input onBlur={this.handleForm} onFocus={this.handleForm} className="form-control form-control-sm rounded-0 " />
                </div>
                <div className="col-1 p-0">
                  <button className="btn   mx-auto btn-warning w-100   hformsbmt " type="submit">
                  <span className="d-block p_search_pos  p_a_logo "></span>
                  </button>
                </div>
              </div>
            </form>
            <button onMouseOut={this.hideOverlay} onMouseOver={this.overlay} className="ms-1 p_ht_countrydd_btn h-100 p-0 btn position-relative d-inline-block " data-bs-toggle="modal" data-bs-target="#staticBackdrop2" style={{ 'width': '4%' }}>
              <span className="d-block p_flag_box flag_sheet mt-2 ms-2 mb-3 float-start"></span><span className="p-0 float-start text-white pt-3"><FontAwesomeIcon className=" pb-1 float-start text-white" icon={faCaretDown} /></span>
             <div className="p_ht_countrydd p-3 text-start position-absolute bg-white border">
                <div className="arrow-up  position-absolute p_aup_ht_countrydd"></div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                  <label className="form-check-label" for="flexRadioDefault1">
                    English-EN
                  </label>
                </div>
                <hr />
                <form>

                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      English-EN
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
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
                <hr />
                <div ><p className="m-0"> <Flag className=" p-1 d-inline-block  " height="16 " code={'in'} />You are shopping on Amazon.in.</p>
                  <a href="#" className="btn btn-link">change country/region</a>
                </div>
              </div>
            </button>
            <button onMouseOut={this.hideOverlay} onMouseOver={this.overlay} className="h-100 p_ht_signin_model_button me-1 btn text-white position-relative" style={{ 'width': '11%' ,fontSize:'13px'}}>
              <div>Hello,Sign in</div>
              <span className="fw-bold">Account &amp; Lists<FontAwesomeIcon className="ms-2" icon={faCaretDown} /> </span>

              <div className=" p_ht_signin_model position-absolute bg-white border rounded-1 ">
                <div className="arrow-up  position-absolute p_aup_ht_signin_model"></div>
                <div>
                  <Link  to="/signin" className=" btn btn-warning  w-50 mt-3 mb-1 ">Sign in</Link>
                  <p className="text-dark border-bottom mb-4">New Coustmer?<Link  to="/register" className="btn btn-link " >Start here.</Link></p>
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
                        <Link className="nav-link " to="/youraccount">Your Account</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/orderhistory" className="nav-link" >Your orders</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/wishlist" className="nav-link" >Your wish List</Link>
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
            <button className="h-100 me-1 btn text-white  " style={{ 'width': '7%',fontSize:'13px' }}>Return
              <div className="fw-bold">&amp; orders</div></button>
            <Link to="/cart" className="h-100 me-1 ps-0 btn p-0   text-white fw-bold " style={{ 'width': '6%',fontSize:'13px' }}>
              <span className="d-block pe-0 float-start p_cartbox p_a_logo "></span>
              <span className="text-white float-start ps-0 pt-3">Cart</span>
            </Link>
          </div>
          <div className="p_header_bottom">
            <ul className=" ms-3 nav float-start">
              <li className="nav-item">
                <button onClick={this.handleAllnav} type="button" className="btn m-1 p-0 " data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <a className="nav-link text-white  p-0  me-2" href="#"><span className="p_menu_pos float-start p_a_logo d-block "></span>All</a></button>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3  p-0  pt-1" href="#">Best Sellers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3  p-0 pt-1" href="#">Mobiles</a>
              </li>
              <li className="nav-item position-relative">
                <a onMouseOut={this.hideOverlay} onMouseOver={this.overlay} className="nav-link prime me-3  p-0  pt-1" href="#" >Prime<FontAwesomeIcon className="text-white " icon={faCaretDown} /></a>
                <div className=" primeBox rounded-1 bg-white position-absolute p-3 d-none">
                  <div className="arrow-up  position-absolute p_aup_primeBox"></div>
                  <img className="img-fluid" src="./images/main_images/prime.jpg" />
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3  p-0  pt-1" href="#" >Fasion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3  p-0  pt-1" href="#" >Electronics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3  p-0  pt-1" href="#" >New Realeses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3  p-0  pt-1" href="#" >Customer Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3  p-0  pt-1" href="#" >Amazon Pay</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3  p-0  pt-1" href="#" >Computers</a>
              </li>
            </ul>
            <ul className=" p-0 float-end m-0">
              <li className="nav-item">
                <a href="#" className="p-0 ">
                  <img className="img-fluid" src="./images/slider/hbanner.jpg" />
                </a>

              </li>
            </ul>

            <ul className="nav d-none  float-start">
              <li className="nav-item">
                <a className="nav-link me-2  p-0  pt-1" href="#" >Home &amp; Kitchen</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-2  p-0  pt-1" href="#" >Today's Deals</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-2  p-0  pt-1" href="#" >Toys &amp; Games</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-2  p-0  pt-1" href="#" >Books</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-2  p-0  pt-1" href="#" >Sell</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-2  p-0  pt-1" href="#" >Coupens</a>
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