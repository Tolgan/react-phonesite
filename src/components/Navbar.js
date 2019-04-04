import React, { Component } from 'react'
import {Link} from "react-router-dom"


export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav navbar navbar-dark bg-dark">

      <Link to="/contact"><i className="fas fa-tty" />  </Link>
        <Link to="/">Products  </Link>
        <Link to="/card"> 
        <div className="border border-primary p-1">
        <i className="fas fa-cart-arrow-down"></i>  
        My Cart
        </div>
        
           </Link>

      </nav>
    )
  }
}
