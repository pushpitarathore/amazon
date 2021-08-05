import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/**
* @author
* @class Payment_method
**/

class Payment_method extends Component {
  state = {}
  render() {
    return (
      <>
        <div className="payment_method  container p-0 pt-4 p_anch_dec">
          <div>
            <img className="img-fluid" src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/payselect/progressbar-payments._CB485947677_.gif" />
          </div>
          <div className="mt-5">
            <h2>Select a payment method</h2>
            <div className="row m-0">
              <div className="col-9 border rounded-3">
                <h6 className="border-bottom fw-bold p-2 pt-3">Another payment method</h6>
                <div class="accordion " id="accordionExample">
                  <div class="accordion-item border-0">
                    <h6 class="accordion-header" id="headingOne">
                      <button class="border-0 bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" for="flexRadioDefault1">
                            <span className="d-block text-start mb-3">Add Debit/Credit/ATM Card</span>
                            <span className="d-block float-start payment_spritesheet p_visa  payment_sprite_box me-3"></span>
                            <span className="float-start payment_spritesheet p_mastrcrd  payment_sprite_box me-3"></span>
                            <span className="float-start payment_spritesheet p_thrd_sheet  payment_sprite_box me-3"></span>
                            <span className="float-start payment_spritesheet p_forth_sheet  payment_sprite_box me-3"></span>
                            <span className="float-start payment_spritesheet p_fifth_sheet  payment_sprite_box me-3"></span>
                            <span className="float-start payment_spritesheet p_sixth_sheet  payment_sprite_box me-3"></span>
                            <span className="float-start payment_spritesheet p_seventh_sheet  payment_sprite_box "></span>
                          </label>
                        </div>
                      </button>
                    </h6>
                    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <span className="d-block p-3">We’ll save this card for your convenience. Remove it by going to Your Account section.</span>
                        < a className=" p-3" href="#" >
                          <img className="img-fluid me-3" style={{ width: '20px' }} src="https://images-eu.ssl-images-amazon.com/images/G/01/payments-portal/r1/PlusIcon._CB485933946_.gif" />
                          <img className="img-fluid  me-3" style={{ width: '30px' }} src="https://images-eu.ssl-images-amazon.com/images/G/01/payments-portal/r1/add-payment-method/card-logo-compact._CB478583243_.gif" />
                          <a href="#">Add a credit or debit card</a>
                          <span className="text-secondary ms-3 text-decoration-none">Amazon.com accepts all major credit &amp; cards</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-0 mt-5">
                    <h6 class="accordion-header" id="headingTwo">
                      <button class="border-0 bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label " for="flexRadioDefault1">
                            <span className="text-start d-block"> Net Banking</span>
                            <select class="form-select form-select-sm bg-light w-75 mt-2" aria-label=".form-select-sm example">
                              <option selected>choose an option</option>
                              <option value="1">Aritle payments bank</option>
                              <option value="1">Axis bank</option>
                              <option value="2">ICICI bank </option>
                              <option value="3">State bank of India</option>
                              <option value="3">allahbad bank</option>
                              <option value="3">Andhra bank</option>
                              <option value="3">Andhra bank</option>
                              <option value="3">Andhra bank</option>
                              <option value="3">Andhra bank</option>
                              <option value="3">Andhra bank</option>
                              <option value="3">Andhra bank</option>
                              <option value="3">Andhra bank</option>
                              <option value="3">Andhra bank</option>
                              <option value="3">Andhra bank</option>
                              <option value="3">Andhra bank</option>
                              <option value="3">Andhra bank</option>
                              <option value="3">Andhra bank</option>
                              <option value="3">Andhra bank</option>
                              <option value="3">Andhra bank</option>
                              <option value="3">Andhra bank</option>
                              <option value="3">Andhra bank</option>
                              <option value="3">Andhra bank</option>
                              <option value="3">Bank of baroda-corporative bank</option>
                            </select>
                          </label>
                        </div>
                      </button>
                    </h6>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        For faster payment and instant refund, please use UPI<a href="#"> Why?</a>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-0 mt-4">
                    <h6 class="accordion-header" id="headingThree">
                      <button class="border-0 bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" for="flexRadioDefault1">
                            <span className="fw-bold">Other UPI Apps</span>
                          </label>
                        </div>
                      </button>
                    </h6>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div class="accordion-body mb-3">
                        <label for="yourname" class="form-label d-block">Please enter your UPI ID</label>
                        <input type="email" class="form-control form-control-sm w-25 float-start me-3" id="yourname" placeholder="Ex:MobileNumber@UPI" />
                        <button className="btn amznbtn border btn-sm float-start">verify</button>
                      </div>
                    </div>
                  </div>
                  <div class="form-check m-2 mt-4">
                          <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                          <label class="form-check-label" for="flexRadioDisabled">
                            <span>Disabled radio</span>
                          </label>
                          <a href="#">Why?</a>
                        </div>
                  <div class="accordion-item border-0 mt-4">
                    <h6 class="accordion-header" id="headingFour">
                      <button class="border-0 bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" for="flexRadioDefault1">
                            <span className=" d-block text-start fw-bold"> Pay on Delivery</span>
                            <p>Pay digitally with SMS Pay Link. Cash may not be accepted in COVID restricted areas.<a href="#">Know more.</a></p>
                          </label>
                        </div>
                      </button>
                    </h6>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div class="accordion-body">

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-3 pt-0 ">
                <div className="float-end text-center p-3 " style={{ height: '112px', background: '#f7f7f7', fontSize: '14px' }}>
                  <Link to="/revyourodr" className="btn btn-sm amznbtn w-100 border rounded-2">Continue</Link>
                  <span>You can review this order before it's final.</span>
                </div>
              </div>
            </div>
            <div className="row m-0 mt-4">
              <div className="col-9 ">
                <h4 className="pb-2">More payment options</h4>
                <div className="row m-0 mt-3 border-top">
                  <div className="col-10 pt-3">
                    <h5>Gift Cards, Vouchers &amp; Promotional Codes</h5>
                    <a href="#">Enter a gift card, voucher or promotional code</a>
                  </div>
                  <div className="col-2 text-end p-0 pt-3">
                    <img className="img-fluid" src="https://images-eu.ssl-images-amazon.com/images/G/31/payments-portal/r1/gc._CB485935783_.gif" />
                  </div>
                </div>
              </div>
              <div className="col-3 pt-3">
                <div className="float-end text-center p-3 " style={{ height: '112px', background: '#f7f7f7', fontSize: '14px' }}>
                  <Link to="/revyourodr" className="btn btn-sm amznbtn w-100 border rounded-2">Continue</Link>
                  <span>You can review this order before it's final.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="p_anch_dec" style={{ fontSize: '12px' }}>
          <div className="p_gradient  mt-4"></div>
          <div className="mb-5 ">
            <p className="text-center">Need help? Check our <a href="#">help pages</a> or <a href="#">contact us 24x7</a> </p>
            <ul class="nav justify-content-center">
              <li class="nav-item border-end me-2">
                <a class="nav-link p-0 me-2 " href="#">Condition of Use</a>
              </li>
              <li class="nav-item border-end me-2 ">
                <a class="nav-link p-0 me-2" href="#">Privecy otice</a>
              </li>
              <li class="nav-item">
                <span className="">© 2012-2020, Amazon.com, Inc. and its affiliates</span>
              </li>

            </ul>
          </div>
        </footer>
      </>
    )
  }
}


Payment_method.propTypes = {}
export default Payment_method