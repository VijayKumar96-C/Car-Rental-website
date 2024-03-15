import React, { useEffect, useState } from "react";
import DateTime from "./Calendar/DateTime";

function PriceCard() {
    const [pickDate, setPickDate] = useState("")
    const [returnDate, setReturnDate] = useState("")
    const [hourDif, setHourDif] = useState(0)
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [total, setTotal] = useState(0)
    const [rental, setRental] = useState(40)
    const [selected, setSelected] = useState(false)


    const pickDateFunc = (val) => {
        console.log("val from pickdate func", val.$d)
        setPickDate(val.$d)
    }

    const returnDateFunc = (val) => {
        console.log("val from return date func", val.$d)
        setReturnDate(val.$d)
        const oneDay = 60 * 60 * 1000
        const dateNow = val.$d
        const hourDiff = (dateNow.getTime() - pickDate.getTime()) / oneDay
        setHourDif(hourDiff)
        const Days = Math.floor(hourDiff / 24)
        setDays(Days)
        const Hours = Math.floor(hourDiff % 24)
        setHours(Hours)
        setTotal((Days * 180) + (Hours * 120))
        setSelected(true)
    }




    return (
        <div className=" bg-white w-fit h-fit rounded-sm py-8 ml-4 pr-4 space-x-4 rounded-2xl" >
            <div className="flex md:flex-row flex-col ml-4" >
                <div  >
                    <p>Pickup Date & Time</p>
                    <div ><DateTime check="pick" pickDateFunc={pickDateFunc} /></div>
                </div>
                <div>
                    <p>Return Date & Time</p>
                    <DateTime check="return" returnDateFunc={returnDateFunc} />
                </div>
            </div>
            <div className="flex flex-col mt-4 space-y-4" >
                <label>Pickup Location</label>
                <input type="text" placeholder="Enter Location" className="w-full h-12 border border-gray-400 rounded-lg px-4" />
            </div>
            <p className="mt-4 mb-4" >Rental Info</p>
            <div className="py-4 space-y-2 bg-slate-100 rounded-lg px-4 w-fit" >
                <span className="flex flex-row justify-between pr-4" >
                    <p>Price per day</p><p>{selected ? `$800*${days} days` : "$800"}</p>
                </span>
                <span className="flex flex-row justify-between pr-4" >
                    <p>Price per hour</p><p>{selected ? `$120*${hours} hours` : "$120"}</p>
                </span>
                {selected ? null : <p> * After selecting days and times, yout calculated rent amount and summary will display below.</p>}
                <hr />
                {selected && <span> <span className="flex flex-row justify-between pr-4" >
                    <p>In-Total</p><p>${total}</p>
                </span>
                    <span className="flex flex-row justify-between pr-4 pt-2" >
                        <p>Rental Fee</p><p>${rental}</p>
                    </span>
                    <hr />
                    <span className="flex flex-row justify-between pr-4 pt-2" >
                        <b>In-Total</b><p>${total + rental}</p>
                    </span>
                    <p className="pt-4" >* Your Total rent amount will be calculated depending on the picku-up and drop-off dates.</p>
                </span>}
            </div>
            <div className="w-full flex justify-center pt-4" >
                { selected ? <button
                    className=" w-64 bg-transparent bg-blue-500 hover:bg-blue-700 font-semibold text-blue-600 hover:text-white py-2 px-4 border border-blue-400  rounded-lg"
                >Reserve now
                </button>
                :
                <button
                    className=" w-64 bg-transparent bg-gray-200 font-semibold text-gray-400 py-2 px-4 border border-gray-200  rounded-lg"
                >Reserve now
                </button>
                }
            </div>
        </div>
    )
}

export default PriceCard