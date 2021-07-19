import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../Component/Layout'

/**
* @author
* @class Cart
**/

class Cart extends Component {
 state = {}
 render() {
  return(
   <Layout>
       <div className=" p_cart_main row m-0">
           <div className="col-9 tbdr">a</div>
           <div className="col-3 tbdr">b</div>
       </div>
   </Layout>
    )
   }
 }


Cart.propTypes = {}
export default Cart