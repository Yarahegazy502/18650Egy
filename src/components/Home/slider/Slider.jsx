import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slider/Slider.css"
import product from "../../../imgs/product.png"
import product2 from "../../../imgs/product2.png"
import product3 from "../../../imgs/product3.png"
import product4 from "../../../imgs/product4.png"
import product5 from "../../../imgs/product5.png"
import product6 from "../../../imgs/product6.png"
import {FaChevronRight} from 'react-icons/fa/index';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="container mt-5">
        <h2>BATTERIES</h2>
       <div className="all-div">
           {/* first row */}
       <div className="row">
                       <div className="col-md-3 text-center">
                       <h4>HIGH DRAIN IMR</h4>
                        <h3>18650</h3>
                       </div>
                        <div className="col-md-9">
                            <div className="info">
                                <p>view all <FaChevronRight className="faarrow"/></p>
                            </div>
                        </div>
                   </div>
                   {/* second row */}
       <div className="row">
           <div className="col-md-2">
               <div className="">
               </div>
           </div>
           <div className="col-md-10">
           <div className="sli">
       <Slider {...settings}>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product5} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product6} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product4} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product3} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product2} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
    </Slider>
       </div>
           </div>
       </div>
       </div>

        {/* second slider */}
        <div className="all-div">
           {/* first row */}
       <div className="row">
                       <div className="col-md-3 text-center">
                       <h4>HIGH DRAIN IMR</h4>
                        <h3>20000</h3>
                       </div>
                        <div className="col-md-9">
                            <div className="info">
                                <p>view all <FaChevronRight className="faarrow"/></p>
                            </div>
                        </div>
                   </div>
                   {/* second row */}
       <div className="row">
           <div className="col-md-2">
               <div className="">
               </div>
           </div>
           <div className="col-md-10">
           <div className="sli">
       <Slider {...settings}>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product6} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product4} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product3} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product2} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product6} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
    </Slider>
       </div>
           </div>
       </div>
       </div>

       {/* third slider */}
       <div className="all-div">
           {/* first row */}
       <div className="row">
                       <div className="col-md-3 text-center">
                       <h4>HIGH DRAIN IMR</h4>
                        <h3>30000</h3>
                       </div>
                        <div className="col-md-9">
                            <div className="info">
                                <p>view all <FaChevronRight className="faarrow"/></p>
                            </div>
                        </div>
                   </div>
                   {/* second row */}
       <div className="row">
           <div className="col-md-2">
               <div className="">
               </div>
           </div>
           <div className="col-md-10">
           <div className="sli">
       <Slider {...settings}>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product3} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product2} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product2} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product6} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product3} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
    </Slider>
       </div>
           </div>
       </div>
       </div>

    {/* forth slider */}
    <div className="all-div all-div2">
           {/* first row */}
       <div className="row">
                       <div className="col-md-3 text-center">
                       <h4>WALL PLUG</h4>
                        <h3>CHARGERS</h3>
                       </div>
                        <div className="col-md-9">
                            <div className="info">
                                <p>view all <FaChevronRight className="faarrow"/></p>
                            </div>
                        </div>
                   </div>
                   {/* second row */}
       <div className="row">
           <div className="col-md-2">
               <div className="">
               </div>
           </div>
           <div className="col-md-10">
           <div className="sli">
       <Slider {...settings}>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product6} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product4} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product3} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product2} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
      <div>
      <div className="sli-content">
            <div className="img-pro">
            <img src={product3} alt="" />
            </div>
            <div className="content-pro">
            <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
            </div>
          </div>
      </div>
    </Slider>
       </div>
           </div>
       </div>
       </div>
    </div>
  );
}