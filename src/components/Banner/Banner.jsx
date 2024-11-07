import React from "react"

const Banner = () => {
    return(
        <>
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-col-2 gap-8">
                    <div className="flex flex-col justify-center hover:scale-110">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.RNU40oIz9jSFEsH1tbbNFwHaE8&pid=Api&P=0&h=180" alt=""/>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl font-semibold">Food is Always Good</h1>
                        <p className="py-4 font-semibold">Lorem ipusm dolor sit amet consectetur elit Temporibus laboriosam vitae accusamus assumnets nobis </p>
                        </div>

                </div>

            </div>
        </>

    )
}

export default Banner;