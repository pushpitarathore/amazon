
import './App.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import Search from './Pages/Search'
import Checkout from './Pages/Checkout'



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
        <Route path="/search" component={Search}></Route>
        <Route path="/checkout" component={Checkout}></Route>
      </Router>
    
    );
  }
}


App.propTypes = {}
export default App

