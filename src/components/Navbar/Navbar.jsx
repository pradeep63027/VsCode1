import React from "react"
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    return(
        <div className=" py-4">
            <div className="container flex justify-between items-center">
                <div>
                <p className="text-lg font-semibold">FOOD<span className="text-red-300">EAT</span></p>
            </div>
            <div className="justify-center items-center gap-6">
                <ul className=" gap-8 hidden sm:flex ">
                    <li className="hover:border-b-2 border-primary uppercase">Home</li>
                    <li className="hover:border-b-2 border-primary uppercase">Menu</li>
                    <li className="hover:border-b-2 border-primary uppercase">About</li>
                </ul>
                </div>
                <div className="flex gap-2 items-center">
                    <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png"alt=""className=" w-10 rounded-full"/>
                    <IoIosArrowDown />
                </div>
            </div>
        </div>
    )
}

export default Navbar