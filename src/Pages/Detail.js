import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../Component/Layout'


/**
* @author
* @class Detail
**/

class Detail extends Component {
 state = {}
 render() {
  return(
   <Layout>
       <div className="p_main  mx-auto p_dtl_main">
         <div className="p_dtl_top_bannr tbdr"></div>
         <div className="row m-0 p_dtl_prodCont ">
           <div className="col-9 tbdr ">A</div>
           <div className="col-3 tbdr">B</div>
         </div>
         <div className="p_dtl_prodContBottm tbdr border-top border-bottom mb-1"></div>
         <div className="p_dtl_havQ tbdr border-top"></div>
         <div className="p_dtl_prodRelItm tbdr border-top border-botom">
           <h5>Product related to this item</h5>
         </div>
         <div className="p_dtl_custAlsoRev tbdr border-top border-bottom">
           <h5>Customers viewed this item also</h5>
         </div>
       </div>
   </Layout>
    )
   }
 }


Detail.propTypes = {}
export default Detail