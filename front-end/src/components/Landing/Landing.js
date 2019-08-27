import React from 'react';
import './Landing.css'


const Landing = () => {
  return (
    <>
    <div className="container landing">
      <div className="row">
        <div className="col-lg-4">
          <img className="rounded-circle" src="https://cdn4.iconfinder.com/data/icons/travel-2-11/512/travel-tourism-vacation-holiday-05-512.png" alt="Vacation" width="140" height="140" />
          <h2>Vacation</h2>
          {/* <p>I travel a ton. Thanks to Wayfarer I can find the cities with the best beaches. Soaking up the sun is what I live for!</p> */}
          <p>Find the cities for the most perfect getaway</p>

        </div>
        <div className="col-lg-4">
          <img className="rounded-circle" src="https://cdn3.iconfinder.com/data/icons/virtual-notebook/16/button_connect-512.png" alt="Connect" width="140" height="140" />
          <h2>Connect</h2>
          {/* <p>Wayfarer helped me find the love of my life in the city of love, Paris!</p> */}
          <p>Meet and travel with people from all around the globe!</p>
        </div>
        <div className="col-lg-4">
          <img className="rounded-circle" src="https://cdn0.iconfinder.com/data/icons/photo-cameras/164/olympus-35dc2x-512.png" alt="Camera" width="140" height="140" />
          <h2>Share</h2>
          {/* <p>I love using Wayfarer! I get to find the cities that have incredible views!</p> */}
          <p>Capture the most beautiful photos that mother nature has to offer</p>
        </div>
      </div>
    </div>
  </>
      )
  }
  
export default Landing;