import React from "react"
import "../styles/banner.scss"

// import layers
import Layer1 from "../images/lake_layer_1.png"
import Layer2 from "../images/lake_layer_2.png"
import Layer3 from "../images/lake_layer_3.png"
import Layer4 from "../images/lake_layer_4.png"
import Layer5 from "../images/lake_layer_5.png"
import Layer6 from "../images/lake_layer_6.png"
import Layer7 from "../images/lake_layer_7.png"
import Layer8 from "../images/lake_layer_8.png"

const Banner = () => {
  return (
    <>
      <div className="parallax_layer parallax_layer_1">
        <img src={Layer1} alt="parallax layer 1" />
      </div>
      <div className="parallax_layer parallax_layer_2">
        <img src={Layer2} alt="parallax layer 2" />
      </div>
      <div className="parallax_layer parallax_layer_3">
        <img src={Layer3} alt="parallax layer 3" />
      </div>
      <div className="parallax_layer parallax_layer_4">
        <img src={Layer4} alt="parallax layer 4" />
      </div>
      <div className="parallax_layer parallax_layer_5">
        <img src={Layer5} alt="parallax layer 5" />
      </div>
      <div className="parallax_layer parallax_layer_6">
        <img src={Layer6} alt="parallax layer 6" />
      </div>
      <div className="parallax_layer parallax_layer_7">
        <img src={Layer7} alt="parallax layer 7" />
      </div>
      <div className="parallax_layer parallax_layer_8">
        <img src={Layer8} alt="parallax layer 8" />
      </div>
    </>
  )
}

export default Banner
