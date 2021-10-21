import React, { Component } from "react";
import Carsoul from "./carsoul/Carsoul.1";
// import Features from "./features/Features.jsx";
import SimpleSlider from "./slider/Slider.jsx"
class Home extends Component{
    render(){
        return(
            <div>
                <Carsoul/>
                {/* <Features/> */}
                <SimpleSlider/>
            </div>
        )
    }
}
export default Home;