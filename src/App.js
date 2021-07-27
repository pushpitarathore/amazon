
import './App.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import Search from './Pages/Search'
import Checkout from './Pages/Checkout'
import SignIn from './Pages/SignIn';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import Delivery from './Pages/Delivery';
import OrderHistory from './Pages/OrderHistory';
import YourAccount from './Pages/YourAccount';
import WishList from './Pages/WishList';
import Delivery_option from './Pages/Delivery_option';
import Review_your_odr from './Pages/Review_your_odr';
import Payment_method from './Pages/Payment_method';





/**
* @author
* @class App
**/

//we are using class componants
class App extends Component {
 

  render() {
    return (
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Route path="/signin" component={SignIn}></Route>
         <Route path="/search" component={Search}></Route>
         <Route path="/cart" component={Cart}></Route>
         <Route path="/youraccount" component={YourAccount}></Route>
         <Route path="/register" component={Register}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/delivery" component={Delivery}></Route>
        <Route path="/wishlist" component={WishList}></Route>
        <Route path="/orderhistory" component={OrderHistory}></Route>
        <Route path="/deliveryoption" component={Delivery_option}></Route>
        <Route path="/revyourodr" component={Review_your_odr}></Route>
        <Route path="/paymentmethod" component={Payment_method}></Route>
        
        
      </Router>
    
    );
  }
}


App.propTypes = {}
export default App

