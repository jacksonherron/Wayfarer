import React from 'react';
import './Landing.css'


const Landing = () => {
    return(
        <div className="container landing">
        <div className="row">
          <div className="col-lg-4">
            <img className="rounded-circle" src="https://media.licdn.com/dms/image/C4E03AQGPuNbxrKiG0w/profile-displayphoto-shrink_800_800/0?e=1571875200&v=beta&t=MR0JcOTAdvDjvzWhjUp6y2NQhxIqbpk5Ashysaiz5bI" alt="James" width="140" height="140"/>
            <h2>"The Beaches"</h2>
            <p>I travel a ton. Thanks to Wayfarer I can find the cities with the best beaches. Soaking up the sun is what I live for!</p>
            
          </div>
          <div className="col-lg-4">
            <img className="rounded-circle" src="https://media.licdn.com/dms/image/C5603AQE2ChwqXF8qPQ/profile-displayphoto-shrink_800_800/0?e=1571875200&v=beta&t=aeIY7TxPgs4aXxrruFtCHsNRGfrl5IGA8J3BEEQLcAM" alt="Jackson" width="140" height="140"/>
            <h2>"True Love"</h2>
            <p>Wayfarer helped me find the love of my life in the city of love, Paris!</p>
          </div>
          <div className="col-lg-4">
            <img className="rounded-circle" src="https://media.licdn.com/dms/image/C5603AQGqiGztI2yfxg/profile-displayphoto-shrink_200_200/0?e=1571875200&v=beta&t=1-FNJuu9OkUZtI3pKE5cz40xuQyAa1M2-jDfuucFRTI" alt="Christian" width="140" height="140"/>
            <h2>"Best Views"</h2>
            <p>I love using Wayfarer! I get to find the cities with the highest buildings to jump off of!</p>
          </div>
        </div>
      </div>
    )
}

export default Landing;