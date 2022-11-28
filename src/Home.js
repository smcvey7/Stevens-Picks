import React, {useState} from "react";

function Home (){

  return(

      <div className="moduleElement flexContainer">
        <div className="flexContainer nonComment">
          <div className="flexContainer postHeadingAlt">
            <img id="profilePic" src="img/main.JPG"></img>
          </div>
          <div className=" flexContainer postMain">
          <h1>Welcome to Steven's Picks</h1>
            <p className="intro">Tired of watching reruns? Need a new podcast for the gym? How about keeping that New Year's resolution and learning a new skill? </p>
            <p className="intro">Check out my page for inspiration! I'll be updating my favorites on a regular basis, and also accepting your recommendations for possible inclusion.</p>
            <p className="intro">Let me know what you think. Most of all…enjoy!</p>
          </div>
        </div>
    </div>

  )
}

export default Home