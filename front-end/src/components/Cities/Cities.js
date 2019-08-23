import React from 'react';
import './Cities.css';

const Cities = () => {
    return (
        <div>
            tokyo, sf, london, gibralter syndey, seattle
            <div className="city-container">
                <div className="split left">
                    <a href='#' className="city-card">
                        <div className="card flex-row flex-wrap">
                            <div className="card-header border-0">
                                <img src="//placehold.it/100" alt="" />
                            </div>
                            <div className="card-block px-2">
                                <h4 className="card-title">San Francisco</h4>
                                <p className="card-text">City of piss and syringes</p>
                            </div>
                            <div className="w-100"></div>
                        </div>
                    </a>
                    <a href='#'>
                        <div className="card flex-row flex-wrap">
                            <div className="card-header border-0">
                                <img src="//placehold.it/100" alt="" />
                            </div>
                            <div className="card-block px-2">
                                <h4 className="card-title">TOKYO</h4>
                                <p className="card-text">SUSHI ME UP</p>
                            </div>
                            <div className="w-100"></div>
                        </div>
                    </a>
                    <a href='#'>
                        <div className="card flex-row flex-wrap">
                            <div className="card-header border-0">
                                <img src="//placehold.it/100" alt="" />
                            </div>
                            <div className="card-block px-2">
                                <h4 className="card-title">LONDON</h4>
                                <p className="card-text">tea and crumpets</p>
                            </div>
                            <div className="w-100"></div>
                        </div>
                    </a>
                </div>
                <div className="split right">
                    <h1>POSTS</h1>

                </div>

            </div>
        </div >
    )
}

export default Cities;
