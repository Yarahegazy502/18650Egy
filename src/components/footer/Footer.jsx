import React from "react";
import { Component } from "react";
import"../footer/Footer.css";
import {FaEllipsisV,FaFacebookSquare,FaInstagramSquare,FaAlignJustify} from 'react-icons/fa/index';
import logo from "../../imgs/logo.png";

class Footer extends Component{
    render(){
        return(
            <div className="footer-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <nav>
                                <ul>
                                    <li><a href="#"><FaEllipsisV className="fae"/>Home</a></li>
                                    <li><a href="#"><FaEllipsisV className="fae"/>Batteries</a></li>
                                    <li><a href="#"><FaEllipsisV className="fae"/>Chargers</a></li>
                                    <li><a href="#"><FaEllipsisV className="fae"/>About us</a></li>
                                    <li><a href="#"><FaEllipsisV className="fae"/>Where to buy</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-6 d-sm-flex align-item-start-sm">
                            <div className="foot-content">
                                <img src={logo} alt="" />
                                <h3>FOLLOW US ON</h3>
                                <div className="icons">
                                    <FaFacebookSquare className="i"/>
                                    <FaInstagramSquare className="i"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;