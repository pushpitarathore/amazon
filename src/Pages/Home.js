import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-bootstrap'
import Layout from '../Component/Layout'

/**
* @author
* @class Home

**/

class Home
 extends Component {
 state = {}
 render() {
  return(
   <Layout>
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
    <div className="p_main_botton_8 mb-3   tbdr">
      <img className="img-fluid" src=".images/main_images/banner.jpg" />
    </div>
    <div className="p_main_botton_9 mb-3 tbdr"></div>
    <div className="p_main_botton_10 mb-3 tbdr"></div>
    <div className="p_main_botton_11 mb-3 tbdr"></div>
    <div className="p_main_botton_12 mb-3 tbdr"></div>
    <div className="p_main_botton_13mb-3 tbdr"></div>
    <div className="p_main_botton_14 mb-3 tbdr"></div>
  </div>
</div>

   
   </Layout>
    )
   }
 }


Home
.propTypes = {}
export default Home
