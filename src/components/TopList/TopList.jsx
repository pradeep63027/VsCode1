import React from "react"

const FoodData = [
    {
        image:"https://wallpaperaccess.com/full/1306125.jpg",
        rating:"*****",
        price:"$10.88",
        name:"Burger",
    },
    {
        image:"https://wallpaperaccess.com/full/1306125.jpg",
        rating:"*****",
        price:"$10.88",
        name:"Burger",
    },
    {
        image:"https://wallpaperaccess.com/full/1306125.jpg",
        rating:"*****",
        price:"$10.88",
        name:"Burger",
    },
]

const TopList = () => {
    return(
        <div className="container py-12">
        <div className="text-center mb-14">
            <h1 className="text-4xl font-semibold">Top List</h1>
            <p>Our top list </p>
        </div>
        <div className="grid grid-cols-1 sm:gird-cols-2 md:grid-cols-3 gap-4">
            {FoodData.map((item,index)=>(
                <div key={index} className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg hover:scale-110 transition duration-300">
                    <img src={item.image}alt=""className="w-24 h-24 object-cover rounded-full mx-auto"/>
                    <div>
                        <p>{item.name}</p>
                        <p>{item.rating}</p>
                        </div>
                        <p>{item.price}</p>
                        </div>
            ))}
            
        </div>
        </div>
    )
}

export default TopList