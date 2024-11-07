import React from "react"
import { IoFastFoodOutline } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";

const OurServices = () => {
    return(
        <div className="text-center">
            <div className="flex fle-col justify-center mb-12">
                <h1 className="text-3xl font-semibold">Our services</h1>
            </div>
            <div className="grid grid-cols-2 sm:grig-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col justify-center gap-2">
                <IoFastFoodOutline className="text-3xl"/>
                <p className="text-2xl font-semibold">Fast Food</p>

                </div>
                <div className="flex flex-col justify-center gap-2">
                <FaMobileAlt className="text-3xl"/>
                <p className="text-2xl font-semibold">Online booking</p>
                </div>
            </div>

        </div>
    )
}

export default OurServices;