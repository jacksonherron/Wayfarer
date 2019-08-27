import React from 'react';
import './Cities.css';
import { Link } from 'react-router-dom';


const links = {
    "London": "london",
    "Sydney": "sydney",
    "Gibraltar": "gibraltar",
    "Tokyo": "tokyo",
    "San Francisco": "sanfrancisco",
    "Seattle": "seattle"
}


const Cities = (props) => {
    return (
        <>
            {props.cities.map(city => (
                <Link to={`/home/${links[city.name]}`} key={city}>
                    <div className="card city-card flex-row flex-wrap">
                        <div className="card-header border-0">
                            <img className="city-image" src={city.image} alt={city.name} />
                        </div>
                        <div className="card-block px-2">
                            <h4 className="card-title">{city.name}</h4>
                        </div>
                        <div className="w-100"></div>
                    </div>
                </Link>
            ))}
        </>
    )
}
export default Cities;