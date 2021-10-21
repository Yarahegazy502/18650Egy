import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from "./components/navbar/Nav.jsx";
import { Route , Switch} from "react-router";
import Home from "./components/Home/Home.jsx";
import Batteries from "./components/Batteries/Batteries.jsx";
import Chargers from "./components/Chargers/Chargers.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/footer/Footer.jsx";
import Where from "./components/Where/Where.jsx";
import "./App.css";
import View from "./components/Batteries/view/View.jsx";
import B18650 from "./components/Batteries/18650/B18650.jsx";

class App extends Component{
    render(){
        return(
            <div className="main">
                <Nav/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/batteries" component={Batteries} exact/>
                    <Route path="/chargers" component={Chargers} exact/>
                    <Route path="/about" component={About} exact/>
                    <Route path="/where_to_buy" component={Where} exact/>
                    <Route path="/batteries#pills-home" component={View} exact/>
                    <Route path="/batteries#pills-profile" component={B18650} exact/>
                    {/* <Route path="/where_to_buy" component={Where} exact/>*/}
                </Switch>
                <Footer/>
            </div>
        )
    }
}



export default App;