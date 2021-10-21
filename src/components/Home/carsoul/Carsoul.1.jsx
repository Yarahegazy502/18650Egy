import { Component } from "react";
import slider from "../../../imgs/banneer.png"
import "../carsoul/carsoul.css"

class Carsoul extends Component {
    render(){
        return(
          <div className="carsoul_sec">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slider} class="d-block w-100" alt="slider"/>
      <div class="carousel-caption d-none d-md-block">
      <h1>
                Better battery
                <br/>
                <span className="text-lighth1">for the best journey</span>
              </h1>
      </div>
    </div>
    <div class="carousel-item">
    <img src={slider} class="d-block w-100" alt="slider"/>
      <div class="carousel-caption d-none d-md-block">
      <h1>
                Better battery
                <br/>
                <span class="text-light">for the best journey</span>
              </h1>
      </div>
    </div>
    <div class="carousel-item">
    <img src={slider} class="d-block w-100" alt="slider"/>
      <div class="carousel-caption d-none d-md-block">
      <h1>
                Better battery
                <br/>
                <span class="text-light">for the best journey</span>
              </h1>      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
</div>
          </div>
        )
    }
 }
 export default Carsoul;
