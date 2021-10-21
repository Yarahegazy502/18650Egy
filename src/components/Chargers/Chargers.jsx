import React, { Component } from "react";
import "../Chargers/Chargers.css"
import about from "../../imgs/about.png"
class Chargers extends Component{
    render(){
        return(
            <div className="chargers">
                <div className="container">
                    
                <div class="shadow-sm p-3 pt-4 mb-5  bg-white rounded">
                    <p>18650 BATTERY 1000MAH/10A CDR - Brand</p>
                </div>

                <div class="shadow-sm pr-3 pt-4  mb-5 bg-white rounded mt-4">
                    <p>GOLISI G30 is an inexpensive 18650 Li-ion battery whose cycle life is more than 800 times. Compared with traditional batteries, it is more powerful, environment friendly, safe and cost-effective for users.
                    </p>
                    <p>Capacity: 3000mAh
                    </p>
                    <p>Constant Discharging Current: 20A</p>
                    <p>Power Range 74W ( 3.7V * 20A ) to 60W (3.0V *20A)</p>
                    <p>High performance: the CDC keeps at 20A even only 40% of power left
                    </p>
                    <p>Certificates: CB by TUV lab, CE, ROHS, FCC, MSDS, WEEE, UN38.3, IEC62133</p>
                    <ul>Warnings:
                        <li>– Use only a suitable external battery charger</li>
                        <li>– Always turn off your Mods or E-cig before storing them</li>
                        <li>– Protect unused batteries wherever they are stored with a suitable cover or case</li>
                        <li>– Do not use a damaged or scratched battery</li>
                        <li>– Do not use a battery beyond its amperage limit</li>
                        <li>– Do not put a battery directly in the pocket</li>
                        <li>– Do not place a battery in contact with metal objects</li>
                        <li>– Do not disassemble, drill, squeeze, short-circuit or expose to water or excessively high temperatures</li>
                    </ul>
                    <img src={about} alt="" />
                </div>
                </div>
            </div>
        )
    }
}
export default Chargers;