import React from 'react'
import './Carousel.css'
const Carousel = () => {
    return(
        <>
    <div id="carousel">
        <div className="bd-example">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>

            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" className="d-block w-100 h-75" alt=" SF bridge"/>
                <div className="carousel-caption">
                    <h5>San Francisco</h5>
                    <p>Legendary Golden Gate bridge overwatches the bay</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="d-block w-100 h-75" alt="london"/>
                <div className="carousel-caption">
                    <h5>London</h5>
                    <p>History collides with art, fashion, food, and good British ale.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1559415096-cc3543f4f080?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="d-block w-100 h-75" alt="gibraltar"/>
                <div className="carousel-caption">
                    <h5>Gibraltar</h5>
                    <p>The monolithic Rock of Gibraltar watches over local lush greenery</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1524293581917-878a6d017c71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="d-block w-100 h-75" alt="sydney opera house"/>
                <div className="carousel-caption">
                    <h5>Sydney</h5>
                    <p>The marvelous Sydney Opera House floats like a great origami sailboat</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1538097304804-2a1b932466a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" className="d-block w-100" alt="space needle"/>
                <div className="carousel-caption">
                    <h5>Seattle</h5>
                    <p>Glide to the top of the Space Needle for epic panoramic views</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1526961731137-1dfdd76b5fe1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" className="d-block w-100" alt="tokyo"/>
                <div className="carousel-caption">
                    <h5>Tokyo</h5>
                    <p>Reverently wander ancient temples before rocking out at a karaoke bar. </p>
                </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
        </div>
    </div>
        </>
    )
}


export default Carousel;