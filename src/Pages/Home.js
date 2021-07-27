import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-bootstrap'
import Layout from '../Component/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

/**
* @author
* @class Home

**/

class Home
  extends Component {
  state = {}
  render() {
    return (
      <Layout>
        <div className="p_main position-relative ">
          <div className=" p_main1 p_main_top  ">
            <Carousel >
           
              <Carousel.Item>
                <div className=" olay w-100 h-100  position-absolute top-0 start-0"></div>
                <img
                  className="d-block "
                  src="./images/slider/1.jpg"
                  alt="First slide"
                />

              </Carousel.Item>
              <Carousel.Item>
              <div className=" olay w-100 h-100  position-absolute top-0 start-0"></div>
                <img
                  className="d-block "
                  src="./images/slider/2.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
              <div className=" olay w-100 h-100  position-absolute top-0 start-0"></div>
                <img
                  className="d-block "
                  src="./images/slider/3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
              <div className=" olay w-100 h-100  position-absolute top-0 start-0"></div>
                <img
                  className="d-block "
                  src="./images/slider/4.jpg"
                  alt="Fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
              <div className=" olay w-100 h-100  position-absolute top-0 start-0"></div>
                <img
                  className="d-block "
                  src="./images/slider/5.jpg"
                  alt="Fivth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
              <div className=" olay w-100 h-100  position-absolute top-0 start-0"></div>
                <img
                  className="d-block "
                  src="./images/slider/6.jpg"
                  alt="Sixth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
              <div className=" olay w-100 h-100  position-absolute top-0 start-0"></div>
                <img
                  className="d-block "
                  src="./images/slider/7.jpg"
                  alt="Seventh slide"
                />
              </Carousel.Item>
              <Carousel.Item>
              <div className=" olay w-100 h-100  position-absolute top-0 start-0"></div>
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
                  <div className="p_mainbox1_inner w-100  h-100 ">
                    <div className="row m-0" style={{ height: '70px' }}>
                      <div className="col-4 ">
                        <FontAwesomeIcon style={{ fontSize: '4em', color: '#aab7b7' }} icon={faUserCircle} />

                      </div>
                      <div className="col-8 ">
                        <h4 className="fw-bolder m-0">Hi,<span className="custName">Pushpita</span></h4>
                        <p style={{ fontSize: '12px' }}>customer since 2019</p>
                      </div>
                      <p className="m-0 fw-bolder" style={{ fontSize: '13px' }}>Top links for you</p>
                      <div className="row w-100 m-0 p-0 p_toplinks">
                        <div className="col-6 p-0   ">
                          <a className="btn w-100 rounded-0 h-100" href="#">
                            <img className="img-fluid" src="./images/main_images/1.1.jpg" />
                            <p>your orders</p>
                          </a>
                        </div>
                        <div className="col-6 p-0 ">
                          <a className="btn w-100 rounded-0 h-100" href="#">
                            <img className="img-fluid" src="./images/main_images/1.2.jpg" />
                            <p>Mobile &amp; Accessories</p>
                          </a>
                        </div>
                        <div className="col-6 p-0 ">
                          <a className="btn w-100 rounded-0 h-100" href="#">
                            <img className="img-fluid" src="./images/main_images/1.3.jpg" />
                            <p>Fashion</p>
                          </a>
                        </div>
                        <div className="col-6 p-0 ">
                          <a className="btn w-100 rounded-0 h-100" href="#">
                            <img className="img-fluid" src="./images/main_images/1.4.jpg" />
                            <p>grocery</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p_mainbox1_inner d-none h-100 ">
                    <div className="w-100 ">
                      <h5>Min 20% off |Toys &amp; Games</h5>
                      <div className="row  m-0 ">
                        <div className="col-6  p-0">
                          <a href="#" className="p-0 btn   rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/1.jpg" />
                            Min 20% off | Games &amp; Puzzeles
                          </a>

                        </div>
                        <div className="col-6 p-0 ">
                          <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 ps-1" src="./images/main_images/2.jpg" />
                            Min 20% off | Pretnd &amp; Play
                          </a>
                        </div>
                        <div className="col-6 p-0 ">
                          <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/3.jpg" />
                            Min 20% off | Dolls &amp; Dollhouses
                          </a>


                        </div>

                        <div className="col-6 p-0 ">
                          <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 ps-1" src="./images/main_images/4.jpg" />
                            Min 20% off | Learning &amp; Education
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
                  <div className="p_mainbox1_inner w-100 h-100 ">
                    <div className="w-100 ">
                      <h5>Everyday essentials</h5>
                      <div className="row  m-0 ">
                        <div className="col-6  p-0">
                          <a href="#" className="p-0 btn   rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/5.jpg" />
                            Cleaning essentials
                          </a>

                        </div>
                        <div className="col-6 p-0 ">
                          <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 ps-1" src="./images/main_images/6.jpg" />
                            Immunity amp; healthCare
                          </a>
                        </div>
                        <div className="col-6 p-0 ">
                          <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/7.jpg" />
                            Women's personal care
                          </a>


                        </div>

                        <div className="col-6 p-0 ">
                          <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
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
                  <div className="p_mainbox1_inner w-100 h-100 ">
                    <div className="w-100 ">
                      <h5>Automotive essentials | Up to 60% off</h5>
                      <div className="row  m-0 ">
                        <div className="col-6  p-0">
                          <a href="#" className="p-0 btn   rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/9.jpg" />
                            Cleaning Accessories
                          </a>

                        </div>
                        <div className="col-6 p-0 ">
                          <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 ps-1" src="./images/main_images/10.jpg" />
                            Tyre &amp; rim care
                          </a>
                        </div>
                        <div className="col-6 p-0 ">
                          <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/11.jpg" />
                            Helmets
                          </a>


                        </div>

                        <div className="col-6 p-0 ">
                          <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
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
                  <div className="col-12  bg-white mb-3 p-3" style={{ 'height': 150 + 'px' }}>
                    <h4 className="p-2">Sign in for your best experience</h4>
                    <button className="btn btn-sm btn-warning w-100 rounded-1 border border-secondary">Sign in securely</button>
                  </div>
                  <div className="col-12 p-0  bg-white " style={{ 'height': 240 + 'px' }}>
                    <img className="img-fluid h-100 w-100" src="./images/main_images/13.jpg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p_main_bottom_2 p_main_bottom_1 row m-0 mb-3">
              <div className="col p-2">
                <div className="p_mainbox1 p-3">
                  <div className="p_mainbox1_inner  h-100 " >
                    <div className="w-100 ">
                      <h5>Up to 85% off | Women's fashion from small</h5>
                      <div className="row  m-0 ">
                        <div className="col-6  p-0">
                          <a href="#" className="p-0 btn   rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/22.jpg" />
                            Sarees &amp; Kurtas
                          </a>

                        </div>
                        <div className="col-6 p-0 ">
                          <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 ps-1" src="./images/main_images/23.jpg" />
                            T-shirs, tops &amp; dresses                          </a>
                        </div>
                        <div className="col-6 p-0 ">
                          <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/24.jpg" />
                            Women's footwear
                          </a>
                        </div>
                        <div className="col-6 p-0 ">
                          <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/25.jpg" />
                            Handbags,sling bags and combos
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="p_mainbox1 p-3 ">
                  <div className="p_mainbox1_inner  h-100 ">
                    <div className="w-100 ">
                      <h5>Home essentials | Amazon Brands &amp; more</h5>
                      <div className="row  m-0 ">
                        <div className="col-6  p-0">
                          <a href="#" className="p-0 btn   rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/14.jpg" />
                            Bedsheet curtains &amp; more
                          </a>

                        </div>
                        <div className="col-6 p-0 ">
                          <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 ps-1" src="./images/main_images/15.jpg" />
                            Cloth organizers,boxes &amp; baskets
                          </a>
                        </div>
                        <div className="col-6 p-0 ">
                          <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                            <img className="img-fluid h-75 pe-1" src="./images/main_images/16.jpg" />
                            Wallstickers &amp; clocks
                          </a>


                        </div>

                        <div className="col-6 p-0 ">
                          <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
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
                    <div className="p_mainbox1_inner  h-100 ">
                      <div className="w-100">
                        <h5>Home essentials | Amazon Brands &amp; more</h5>
                        <div className="row  m-0 ">
                          <div className="col-6  p-0">
                            <a href="#" className="p-0 btn   rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 pe-1" src="./images/main_images/18.jpg" />
                              Clothing
                            </a>

                          </div>
                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 ps-1" src="./images/main_images/19.jpg" />
                              Footwear
                            </a>
                          </div>
                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 pe-1" src="./images/main_images/20.jpg" />
                              Watches
                            </a>


                          </div>

                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
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
              <div className="col p-2">
                <div className="p_mainbox1 p-3">
                  <div className="p_mainbox1_inner h-100 ">
                    <div className="  w-100">
                      <h5>Up to 50% off | Electronics &amp; accessories</h5>
                      <img className="img-fluid h-75 w-100 " src="./images/main_images/26.jpg" />
                    </div>
                    <a href="#" className="btn btn-link">See More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p_main_bottom_3 mb-3 p-3">
              <div className="mb-5">
                <h5 className="float-start">Curated protective supply products | Amazon Launchpad</h5><button type="button" className=" float-start btn btn-link">see all sefety essentials</button>
              </div>

              <Carousel id="carouselExampleControls2"  >
                <Carousel.Item>
                  <div className="imgcont row ">

                    <div className="col p-0 h-100 w-100 text-center">
                      <img className="img-fluid" src="./images/main_images/27.jpg" />
                    </div>
                    <div className="col p-0 text-center">
                      <img className="img-fluid" src="./images/main_images/28.jpg" />
                    </div>
                    <div className="col p-0 text-center">
                      <img className="img-fluid" src="./images/main_images/29.jpg" />
                    </div>
                    <div className="col p-0 text-center">
                      <img className="img-fluid" src="./images/main_images/30.jpg" />
                    </div>
                    <div className="col p-0 text-center">
                      <img className="img-fluid" src="./images/main_images/31.jpg" />
                    </div>
                    <div className="col p-0 text-center">
                      <img className="img-fluid" src="./images/main_images/32.jpg" />
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
            

              <div className="p_main_bottom_5 p_main_bottom_1 row m-0 mb-3">
                <div className="col p-2">
                  <div className="p_mainbox1 p-3">
                    <div className="p_mainbox1_inner  h-100 " >
                      <div className="w-100 ">
                        <h5>Up to 85% off | Women's fashion from small</h5>
                        <div className="row  m-0 ">
                          <div className="col-6  p-0">
                            <a href="#" className="p-0 btn   rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 pe-1" src="./images/main_images/22.jpg" />
                              Sarees &amp; Kurtas
                            </a>

                          </div>
                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 ps-1" src="./images/main_images/23.jpg" />
                              T-shirs, tops &amp; dresses                          </a>
                          </div>
                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 pe-1" src="./images/main_images/24.jpg" />
                              Women's footwear
                            </a>
                          </div>
                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 pe-1" src="./images/main_images/25.jpg" />
                              Handbags,sling bags and combos
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col p-2">
                  <div className="p_mainbox1 p-3 ">
                    <div className="p_mainbox1_inner  h-100 ">
                      <div className="w-100 ">
                        <h5>Home essentials | Amazon Brands &amp; more</h5>
                        <div className="row  m-0 ">
                          <div className="col-6  p-0">
                            <a href="#" className="p-0 btn   rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 pe-1" src="./images/main_images/14.jpg" />
                              Bedsheet curtains &amp; more
                            </a>

                          </div>
                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 ps-1" src="./images/main_images/15.jpg" />
                              Cloth organizers,boxes &amp; baskets
                            </a>
                          </div>
                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 pe-1" src="./images/main_images/16.jpg" />
                              Wallstickers &amp; clocks
                            </a>


                          </div>

                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
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
                      <div className="p_mainbox1_inner  h-100 ">
                        <div className="w-100">
                          <h5>Home essentials | Amazon Brands &amp; more</h5>
                          <div className="row  m-0 ">
                            <div className="col-6  p-0">
                              <a href="#" className="p-0 btn   rounded-0 text-start h-100 w-100">
                                <img className="img-fluid h-75 pe-1" src="./images/main_images/18.jpg" />
                                Clothing
                              </a>

                            </div>
                            <div className="col-6 p-0 ">
                              <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                                <img className="img-fluid h-75 ps-1" src="./images/main_images/19.jpg" />
                                Footwear
                              </a>
                            </div>
                            <div className="col-6 p-0 ">
                              <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                                <img className="img-fluid h-75 pe-1" src="./images/main_images/20.jpg" />
                                Watches
                              </a>


                            </div>

                            <div className="col-6 p-0 ">
                              <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
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
                <div className="col p-2">
                  <div className="p_mainbox1 p-3">
                    <div className="p_mainbox1_inner h-100 ">
                      <div className="  w-100">
                        <h5>Up to 50% off | Electronics &amp; accessories</h5>
                        <img className="img-fluid h-75 w-100 " src="./images/main_images/26.jpg" />
                      </div>
                      <a href="#" className="btn btn-link">See More</a>
                    </div>
                  </div>
                </div>
              </div>
            
            <div className="p_main_bottom_6 p_main_bottom_4 mb-3 tbdr"></div>
            <div className="p_main_botton_7 p_main_bottom_4 mb-3 tbdr"></div>
            <div className="p_main_botton_8 mb-3 text-center ">
              <img className="img-fluid" src="./images/main_images/banner.jpg" />
            </div>
            <div className="p_main_bottom_9 p_main_bottom_1 row m-0 mb-3">
                <div className="col p-2">
                  <div className="p_mainbox1 p-3">
                    <div className="p_mainbox1_inner  h-100 " >
                      <div className="w-100 ">
                        <h5>Up to 85% off | Women's fashion from small</h5>
                        <div className="row  m-0 ">
                          <div className="col-6  p-0">
                            <a href="#" className="p-0 btn   rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 pe-1" src="./images/main_images/22.jpg" />
                              Sarees &amp; Kurtas
                            </a>

                          </div>
                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 ps-1" src="./images/main_images/23.jpg" />
                              T-shirs, tops &amp; dresses                          </a>
                          </div>
                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 pe-1" src="./images/main_images/24.jpg" />
                              Women's footwear
                            </a>
                          </div>
                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 pe-1" src="./images/main_images/25.jpg" />
                              Handbags,sling bags and combos
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col p-2">
                  <div className="p_mainbox1 p-3 ">
                    <div className="p_mainbox1_inner  h-100 ">
                      <div className="w-100 ">
                        <h5>Home essentials | Amazon Brands &amp; more</h5>
                        <div className="row  m-0 ">
                          <div className="col-6  p-0">
                            <a href="#" className="p-0 btn   rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 pe-1" src="./images/main_images/14.jpg" />
                              Bedsheet curtains &amp; more
                            </a>

                          </div>
                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 ps-1" src="./images/main_images/15.jpg" />
                              Cloth organizers,boxes &amp; baskets
                            </a>
                          </div>
                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 pe-1" src="./images/main_images/16.jpg" />
                              Wallstickers &amp; clocks
                            </a>


                          </div>

                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
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
                      <div className="p_mainbox1_inner  h-100 ">
                        <div className="w-100">
                          <h5>Home essentials | Amazon Brands &amp; more</h5>
                          <div className="row  m-0 ">
                            <div className="col-6  p-0">
                              <a href="#" className="p-0 btn   rounded-0 text-start h-100 w-100">
                                <img className="img-fluid h-75 pe-1" src="./images/main_images/18.jpg" />
                                Clothing
                              </a>

                            </div>
                            <div className="col-6 p-0 ">
                              <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                                <img className="img-fluid h-75 ps-1" src="./images/main_images/19.jpg" />
                                Footwear
                              </a>
                            </div>
                            <div className="col-6 p-0 ">
                              <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                                <img className="img-fluid h-75 pe-1" src="./images/main_images/20.jpg" />
                                Watches
                              </a>


                            </div>

                            <div className="col-6 p-0 ">
                              <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
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
                <div className="col p-2">
                  <div className="p_mainbox1 p-3">
                    <div className="p_mainbox1_inner h-100 ">
                      <div className="  w-100">
                        <h5>Up to 50% off | Electronics &amp; accessories</h5>
                        <img className="img-fluid h-75 w-100 " src="./images/main_images/26.jpg" />
                      </div>
                      <a href="#" className="btn btn-link">See More</a>
                    </div>
                  </div>
                </div>
              </div>
            
            <div className="p_main_botton_10 p_main_bottom_4 mb-3 tbdr"></div>
            <div className="p_main_botton_11 p_main_bottom_4 mb-3 tbdr"></div>
            <div className="p_main_bottom_12  p_main_bottom_1 row m-0 mb-3">
                <div className="col p-2">
                  <div className="p_mainbox1 p-3">
                    <div className="p_mainbox1_inner  h-100 " >
                      <div className="w-100 ">
                        <h5>Up to 85% off | Women's fashion from small</h5>
                        <div className="row  m-0 ">
                          <div className="col-6  p-0">
                            <a href="#" className="p-0 btn   rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 pe-1" src="./images/main_images/22.jpg" />
                              Sarees &amp; Kurtas
                            </a>

                          </div>
                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 ps-1" src="./images/main_images/23.jpg" />
                              T-shirs, tops &amp; dresses                          </a>
                          </div>
                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 pe-1" src="./images/main_images/24.jpg" />
                              Women's footwear
                            </a>
                          </div>
                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 pe-1" src="./images/main_images/25.jpg" />
                              Handbags,sling bags and combos
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col p-2">
                  <div className="p_mainbox1 p-3 ">
                    <div className="p_mainbox1_inner  h-100 ">
                      <div className="w-100 ">
                        <h5>Home essentials | Amazon Brands &amp; more</h5>
                        <div className="row  m-0 ">
                          <div className="col-6  p-0">
                            <a href="#" className="p-0 btn   rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 pe-1" src="./images/main_images/14.jpg" />
                              Bedsheet curtains &amp; more
                            </a>

                          </div>
                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 ps-1" src="./images/main_images/15.jpg" />
                              Cloth organizers,boxes &amp; baskets
                            </a>
                          </div>
                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                              <img className="img-fluid h-75 pe-1" src="./images/main_images/16.jpg" />
                              Wallstickers &amp; clocks
                            </a>


                          </div>

                          <div className="col-6 p-0 ">
                            <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
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
                      <div className="p_mainbox1_inner  h-100 ">
                        <div className="w-100">
                          <h5>Home essentials | Amazon Brands &amp; more</h5>
                          <div className="row  m-0 ">
                            <div className="col-6  p-0">
                              <a href="#" className="p-0 btn   rounded-0 text-start h-100 w-100">
                                <img className="img-fluid h-75 pe-1" src="./images/main_images/18.jpg" />
                                Clothing
                              </a>

                            </div>
                            <div className="col-6 p-0 ">
                              <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                                <img className="img-fluid h-75 ps-1" src="./images/main_images/19.jpg" />
                                Footwear
                              </a>
                            </div>
                            <div className="col-6 p-0 ">
                              <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
                                <img className="img-fluid h-75 pe-1" src="./images/main_images/20.jpg" />
                                Watches
                              </a>


                            </div>

                            <div className="col-6 p-0 ">
                              <a href="#" className="p-0 btn rounded-0 text-start h-100 w-100">
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
                <div className="col p-2">
                  <div className="p_mainbox1 p-3">
                    <div className="p_mainbox1_inner h-100 ">
                      <div className="  w-100">
                        <h5>Up to 50% off | Electronics &amp; accessories</h5>
                        <img className="img-fluid h-75 w-100 " src="./images/main_images/26.jpg" />
                      </div>
                      <a href="#" className="btn btn-link">See More</a>
                    </div>
                  </div>
                </div>
              </div>
            
            <div className="p_main_botton_13  p_main_bottom_4 mb-3 tbdr"></div>
            <div className="p_main_botton_14 mb-3 pt-4  bg-white ">
            <div className="d-flex justify-content-center border-bottom  border-top pb-4 ">
              <ul class="nav flex-column">
                <li class="nav-item mt-4">
                  <span>See personalized recommendations</span>
                </li>
                <li class="nav-item">
                 <button className="btn btn-sm amznbtn rounded-3 w-100">signin</button>
                </li>
                <li class="nav-item">
                  <span className="float-start">new customer?</span>
                  <a class="nav-link float-start p-0 ms-2" href="#">start here.</a>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>


      </Layout>
    )
  }
}


Home
  .propTypes = {}
export default Home
