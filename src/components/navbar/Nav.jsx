import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo.png";
import "../navbar/Nav.css"
import {FaAlignJustify} from 'react-icons/fa/index';

class Nav extends Component{
    render(){
        return(           
          <div className="container-fluid bg-dark">
            <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
  <Link class="navbar-brand" to="/"><img src={logo} className="logo" alt="logo"/></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <FaAlignJustify className="menu"/>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/batteries">Batteries</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/chargers">Chargers</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">About us</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/where_to_buy">Where to buy</Link>
      </li>
    </ul>
  </div>
</nav>
            </div>
          </div>
            
        )
    }
}
export default Nav;