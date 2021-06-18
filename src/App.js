
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class App
**/
//we are using class componants
class App extends Component {
  //1. properties
  state = {
    x:''
  }
  //2.constructor
    constructor(props){
      super(props);
    }
  //3. 
  handleScroll=()=>{
    console.log("okay" + window.scrollY);
  //if scroll amout is greater than 80px then we will fix the header top
  if(window.scrollY>=60){
    //we will add "position-fixed start-0 top-0" this value
    this.setState({x:'position-fixed start-0 top-0'});
  }else{
     //we will remove "position-fixed start-0 top-0" this value
     this.setState({x:''});
  }
  }
  componentDidMount(){
    //this method will call when page/component is loaded
    window.addEventListener('scroll',this.handleScroll);
  }
  render() {
    return (
      
      
      <div>
        <header>
          <div className={'p_header_top p-1 w-100 ' + this.state.x } >
            <button className="h-100 me-1 btn" style={{ 'width': '10%' }}>

            </button>
            <button className="h-100 fs-6 text-white me-2 p-0 btn" style={{ 'width': '13%' }}>
              Deliver to pushpita

              <span className="fw-bold d-block"><span className="p_city"><FontAwesomeIcon icon={faMapMarkerAlt} /> Neemuch</span><span className="p_pincode">458441</span></span>
            </button>
            <form className="hform lh-1 me-1 bg-white d-inline-block h-75" style={{ 'width': '45%' }} >C</form>
            <button className="h-100 me-1 btn" style={{ 'width': '5%' }}>D</button>
            <button className="h-100 me-1 btn" style={{ 'width': '10%' }}>E</button>
            <button className="h-100 me-1 btn " style={{ 'width': '7%' }}>F</button>
            <button className="h-100 me-1 btn " style={{ 'width': '7%' }}>G</button>
          </div>
          <div className="p_header_bottom">
            <ul class=" ms-2 nav float-start">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#"><FontAwesomeIcon className="fs-5" icon={faBars} /> All</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Best Sellers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Mobiles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" >prime</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" >Fasion</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" >Electronics</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" >New Realeses</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" >Customer Service</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" >Amazon Pay</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" >Computers</a>
              </li>
            </ul>
            <ul>
              <a className="hbanner">
                <img className="img.fluid float-end" src="./images/slider/hbanner.jpg" />
              </a>
            </ul>
            <ul class="nav  d-none float-start">
              <li class="nav-item">
                <a class="nav-link" href="#" >Home &amp; Kitchen</a>
              </li>
              <li class="nav-item">
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
              <div className="col">A</div>
              <div className="col">B</div>
              <div className="col">C</div>
              <div className="col">D</div>
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
        <footer> </footer>

      </div>
    );
  }
}


App.propTypes = {}
export default App

