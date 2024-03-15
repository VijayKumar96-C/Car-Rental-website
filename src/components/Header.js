import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faHouse, faCar, faUser, faMessage, faFile, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons'



function Header() {
    return (
        <div className="flex flex-row justify-between py-7 text-white" >
            <div className="flex flex-row w-4/6" >
                <span className="block md:hidden " >
                    <FontAwesomeIcon icon={faBars}  size="xl"/>
                </span>
                <div className=" text-2xl font-bold md:ml-6 md:pl-6 ml-4" >
                    <p>Fillo</p>
                </div>
                <div className="hidden md:flex w-full flex justify-evenly lg:ml-12 md:ml-4 ml-4 space-x-4 lg:space-x-0" >
                    <span className="flex flex-row items-center space-x-2" ><FontAwesomeIcon icon={faHouse} /><p className="hidden md:block" >Home</p></span>
                    <span className="flex flex-row items-center space-x-2"><FontAwesomeIcon icon={faCar} /><p className="hidden md:block" >Cars</p></span>
                    <span className="flex flex-row items-center space-x-2"><FontAwesomeIcon icon={faUser} /> <p className="hidden md:block" >Dealers</p></span>
                    <span className="flex flex-row items-center space-x-2"><FontAwesomeIcon icon={faMessage} /><p className="hidden md:block" >Messages</p></span>
                    <span className="flex flex-row items-center space-x-2"> <FontAwesomeIcon icon={faFile} /><p className="hidden md:block" >History</p></span>
                </div>
            </div>
            <div className=" flex flex-row justify-evenly w-56 items-center" >
                <span className="bg-green-700 w-8 h-8 rounded-full flex justify-center items-center" ><FontAwesomeIcon icon={faPlus} /></span>
                <FontAwesomeIcon icon={faBell} />
                <span className="bg-green-700 w-12 h-8 rounded-full flex justify-center space-x-2 items-center" >
                    <FontAwesomeIcon icon={faUser} size="sm" />
                    <FontAwesomeIcon icon={faAngleDown} size="sm" />
                </span>
            </div>
        </div>

    )
}

export default Header