import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../Component/Layout'

/**
* @author
* @class WishList
**/

class WishList extends Component {
  state = {}
  render() {
    return (
      <Layout>
        <div className="p_wishlist_main container-fluid  bg-white tbdr">
          <ul className="nav nav-tabs fs-4 tbdr ">
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="tab" href="#home">Your Lists</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#menu1">Your Idea List</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#menu2">Your Friends</a>
            </li>
          </ul>


          <div className="tab-content p-2">
            <div className="tab-pane container-fluid active" id="home">
              <div className="row m-0 wishlist_cont ">
                <div className="col-3 tbdr  p-4">
                  <div className="wishlistcol">
                    <a href="#" className="d-block p-0 float-start fw-bold">shopping list</a>
                    <a href="#" className="float-end p-0">private</a>
                    <span className="d-block">default list</span>
                  </div>
                </div>
                <div className="col-9 tbdr p-0">b</div>
              </div>
            </div>
            <div className="tab-pane container fade" id="menu1">...</div>
            <div className="tab-pane container fade" id="menu2">...</div>
          </div>
        </div>
      </Layout>
    )
  }
}


WishList.propTypes = {}
export default WishList