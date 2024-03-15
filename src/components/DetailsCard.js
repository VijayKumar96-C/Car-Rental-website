import React from "react";
import car from "../assets/CarImages/Chevrolet-Corvette-Exterior-163527.webp"
import car1 from "../assets/CarImages/Chevrolet-Corvette-Exterior-163528.webp"
import car2 from "../assets/CarImages/Chevrolet-Corvette-Exterior-163533.webp"
import logo from "../assets/CarImages/Logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faStar as regularStar, faMessage } from "@fortawesome/free-regular-svg-icons";
import { faMagic, faStar, faBolt, faUpDown, faCar, faDroplet } from "@fortawesome/free-solid-svg-icons";

const arr = [
    { id: 1, data1: "3745CC", data2: "3.0L", color: "text-fuchsia-500", class: "h-6 w-6 bg-fuchsia-300 rounded-full flex justify-center items-center", icon: faBolt },
    { id: 2, data1: "495.7", data2: "HORSEPOWER", color: "text-rose-500", class: "h-6 w-6 bg-rose-300 rounded-full flex justify-center items-center", icon: faUpDown },
    { id: 3, data1: "194MPH", data2: "TOP SPEED", color: "text-yellow-500", class: "h-6 w-6 bg-yellow-300 rounded-full flex justify-center items-center", icon: faCar },
    { id: 4, data1: "8 Speed", data2: "DUAL CLUTCH", color: "text-slate-500", class: "h-6 w-6 bg-slate-300 rounded-full flex justify-center items-center", icon: faDroplet }
]


function DetailsCard() {
    return (
        <div >
            <div className="md:pt-10 pt-8 md:pl-10 pl-6 flex md:flex-row flex-col" >
                <div className="bg-cover bg-center md:w-[450px] md:h-48 w-80 h-40 rounded-lg" style={{ backgroundImage: `url(${car})` }} >
                    <div className="pt-4 pl-4  pr-4 flex justify-between text-white" >
                        <span>

                            <b>Chevrolet C8</b>
                            <p>Corvette Stingray</p>
                        </span>
                        <FontAwesomeIcon icon={faBookmark} />

                    </div>
                </div>
                <div className="bg-white md:w-96 md:h-48 w-80 h-40 mt-4 md:mt-0 rounded-lg md:ml-6 flex flex-col justify-center items-center" >
                    <div className="md:pb-8 pb-4" >
                        <b className="" >RentCar - Car Rental Service</b> <br />
                        <span className="md:pt-4 pt-2 flex flex-row items-center" >
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                            <FontAwesomeIcon icon={faStar} className="text-gray-300" />
                            <p className="text-gray-500 pl-2" >(2354 ratings)</p>
                        </span>
                    </div>
                    <span className="space-x-6" >
                        <button className=" bg-transparent hover:bg-indigo-500 text-black font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-lg" >Send Message  <FontAwesomeIcon icon={faMessage} /></button>
                        <button className="md:w-36 w-32 bg-indigo-100 hover:bg-indigo-500 text-indigo-600 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded-lg" >Visit Profile</button>
                    </span>
                </div>
            </div>
            <div className="pl-10 pt-8 pr-4" >
                <p className="font-bold text-2xl pb-2" >Vehicle Information</p>
                <p>The Chevrolet CB Corvette Stingray is a sports car manufactured by General Motors under the Chevrolet brand. It was introduced in 2020 as the eighth generation of the Corvette and marked a significant departure from its predecessors by featuring a mid-engine layout.</p>
            </div>
            <div className="ml-10 mt-8 mr-12 flex flex-row flex-wrap justify-between" >
                {arr.map((ele) => {
                    return (
                        <div className="bg-white md:h-24 md:w-40 w-32 h-20 mt-4 md:mt-0 rounded-lg flex flex-col justify-center items-center" >
                            <div className={ele.class} >
                                <FontAwesomeIcon icon={ele.icon} className={ele.color} />
                            </div>
                            <b>{ele.data1}</b>
                            <p>{ele.data2}</p>
                        </div>
                    )
                })}
            </div>
            <div className="flex md:flex-row flex-col" >
                <div className="bg-white md:w-[410px] w-80 md:ml-10 ml-6 mt-6 px-6 py-4 rounded-lg space-y-4" >
                    <b  >Vehicle Condition</b>
                    <hr />
                    <div className="flex flex-col" >
                        <span className="flex flex-row justify-between" >
                            <span>
                                <button className="h-4 w-4 border border-black rounded-full hover:bg-green-700 mt-2 " />
                                <b className="pl-2" >Front and Rear Brakes</b>
                            </span>
                            <p className="text-green-500 font-bold" > Excellent</p>
                        </span>
                        <span className="flex flex-row justify-between">
                            <span>
                                <button className="h-4 w-4 border border-black rounded-full hover:bg-green-700 mt-2" ></button>
                                <b className="pl-2">Engine Condition</b>
                            </span>

                            <p className="text-green-500 font-bold" > Excellent</p>
                        </span>
                        <span className="flex flex-row justify-between">
                            <span>
                                <button className="h-4 w-4 border border-black rounded-full hover:bg-green-700 mt-2" ></button>
                                <b className="pl-2">Average Mileage</b>
                            </span>
                            <p className="text-green-500 font-bold" >31.5 km/l</p>
                        </span>
                    </div>

                </div>
                <div className="bg-white md:w-[410px] w-80 md:ml-10 ml-6 mt-6 px-6 py-4 rounded-lg space-y-4" >
                    <b  >Recent Repair & Services</b>
                    <hr />
                    <div className="flex flex-col" >
                        <span className="flex flex-row justify-between" >
                            <span>
                                <button className="h-4 w-4 border border-black rounded-full hover:bg-green-700 mt-2 " />
                                <b className="pl-2" >Drain Engine Oil</b>
                            </span>
                            <p className="text-gray-500" > 2 days agot</p>
                        </span>
                        <span className="flex flex-row justify-between">
                            <span>
                                <button className="h-4 w-4 border border-black rounded-full hover:bg-green-700 mt-2" ></button>
                                <b className="pl-2">New Front Tyre Installed</b>
                            </span>

                            <p className="text-gray-500" > 1 day ago</p>
                        </span>
                        <span className="flex flex-row justify-between">
                            <span>
                                <button className="h-4 w-4 border border-black rounded-full hover:bg-green-700 mt-2" ></button>
                                <b className="pl-2">Air Filter replaced</b>
                            </span>
                            <p className="text-gray-500" >1 day ago</p>
                        </span>
                    </div>

                </div>
            </div>
            <div className="bg-white ml-10 mr-12 mt-6 px-6 pt-6 rounded-lg space-y-4" >
                <span className="flex justify-between" >
                    <b>Images</b> <a className="text-blue-600" >See All &gt; </a>
                </span>
                <hr />
                <span className="flex md:flex-row flex-col  md:space-x-2 lg:space-x-4 pb-4" >
                    <img src={car} className="lg:h-32 h-24 lg:w-48 w:40 rounded-lg" />
                    <img src={car1} className="lg:h-32 h-24 lg:w-48 w:40 rounded-lg" />
                    <img src={car2} className="lg:h-32 h-24 lg:w-48 w:40 rounded-lg" />
                    <img src={car2} className="lg:h-32 h-24 lg:w-48 w:40 rounded-lg" />
                </span>

            </div>
        </div>
    )
}

export default DetailsCard