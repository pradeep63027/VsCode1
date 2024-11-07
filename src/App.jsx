import React from "react"
import Navbar  from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import TopList from "./components/TopList/TopList"
import Banner from "./components/Banner/Banner"
import OurServices from "./components/OurServices/Ourservices"

const bgStyle={
  backgroundImage:"url(https://tse2.mm.bing.net/th?id=OIP.3LtxHFr92ZmO_qB5-t4SJgHaEo&pid=Api&P=0&h=180)",
  backgroundRepeat:"no-repat",
  backgroundSize:"cover",
  backgroundPosition:"center",
}

const App = () => {
  return (
    <div style={bgStyle} className="overflow-x-hidden" >
      <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
      <Navbar/>
      <Home/>
      <TopList/>
      <Banner/>
      <OurServices/>

      </div>
      
    </div>
  )
}

export default App
