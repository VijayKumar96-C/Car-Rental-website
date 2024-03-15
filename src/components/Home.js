import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import PriceCard from "./PriceCard";
import DetailsCard from "./DetailsCard";

function Home() {
    const [clicked, setClicked] = useState(false)
    return (
        <div className="bg-slate-100 w-full h-full rounded-t-3xl" >
            <div className="flex lg:flex-row flex-col" >
                <span>
                    <div className="flex flex-row pl-6 pt-4 md:space-x-4 space-x-2 items-center" >
                        <FontAwesomeIcon icon={faHome} /><span>/</span> <p> Popular Cars</p> <span>/</span><p className="text-blue-400" > Chevrolet C8</p>
                    </div>
                    <div className="lg:block hidden" ><PriceCard /></div>
                </span>
                <DetailsCard />

            </div>
            <div className="py-6 lg:hidden block w-full flex justify-center items-center" >
            <button
                onClick={()=>{setClicked(!clicked)}}
                className="  w-64 bg-transparent bg-blue-500 hover:bg-blue-700 font-semibold text-blue-600 hover:text-white py-2 px-4 border border-blue-400  rounded-lg"
            >Select Date
            </button>
            </div>
            
             {clicked ? <PriceCard/> : null}
        </div>
    )

}

export default Home