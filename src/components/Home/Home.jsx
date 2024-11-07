import React from "react"

const Home = () => {
    return(
        <div>
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h[600px]">
                <div className="flex flex-col justify-center gap-8 text-center md:text-left pt-24 pb-10">
                    <h1 className="text-3xl font-semibold">Delicous Food</h1>
                    <p className="">, bjbcjkaeblhbjhebjcr rbljhbrcjhbhjberc nrekrcjbnqerjkwbfhwb quhdqrrfh quhdruhu</p>
                    <div className="flex gap-4 items-center md:justify-start justify-center">
                        <button className="primary-btn hover:scale-110 duration-200">Food Menu</button>
                        <button className="secondary-btn text-black hover:scale-110 duration-200">Book Table</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.rvO-FyN5O8CBShQkyQmKcgHaE8&pid=Api&P=0&h=180"alt="p" className="animate-spin-slow img-shadow max-w-[500px] w-[340px] mx-auto md:mx-0"/>

                </div>

            </div>
        </div>
    )

}

export default Home