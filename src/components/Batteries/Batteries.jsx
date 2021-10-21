import React, { Component,useState } from "react";
import "../Batteries/Batteries.css"
import View from "./view/View";
import B18650 from "./18650/B18650";
import B20000 from "./20000/B20000";

function Batteries(){
        const[toggleState,setToggleState]=useState(1);
        const toggleTab=(i)=>{
          setToggleState(i);
        }
        return(
          <div className="batteries">
            <div className="container">
              {/* block tabs */}
              
              <div class="shadow-sm p-4 pt-4 mb-5 mt-4  bg-white rounded">
              <div className="block-tabs">
                <div className={toggleState===1 ? "tabs active-tabs":"tabs"} onClick={()=>toggleTab(1)}>VIEW ALL</div>
                <div className={toggleState===2 ? "tabs active-tabs":"tabs"} onClick={()=>toggleTab(2)}>18650</div>
                <div className={toggleState===3 ? "tabs active-tabs":"tabs"} onClick={()=>toggleTab(3)}>20000</div>
                <div className={toggleState===4 ? "tabs active-tabs":"tabs"} onClick={()=>toggleTab(4)}>30000</div>
              </div>
              </div>

              {/* content tabs */}
              <div className="content-tabs">
                <div className={toggleState===1 ? "content active-content":"content"}>
                  <View/>
                </div>
                <div className={toggleState===2 ? "content active-content":"content"}>
                  <B18650/>
                </div>
                <div className={toggleState===3 ? "content active-content":"content"}>
                <B20000/>
                </div>
                <div className={toggleState===4 ? "content active-content":"content"}>
                <B18650/>
                </div>
              </div>

            </div>
          </div>
        )
    }

export default Batteries;