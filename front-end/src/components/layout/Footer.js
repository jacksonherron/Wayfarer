import React from 'react';


const Footer = () => {
    return (
<footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p> way.far.er : a person who travels on foot </p>
                            <p> Life is a journey, let Wayfarer be there with you ever step of the way. Connect with others during your journey! Travel smarter, cheaper, and longer.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Continents</h6>
                            <ul className="footer-links">
                                <li><a href="/">North America</a></li>
                                <li><a href="/">South America</a></li>
                                <li><a href="/">Asia</a></li>
                                <li><a href="/">Europe</a></li>
                                <li><a href="/">Africa</a></li>
                                <li><a href="/">Austrailia</a></li>
                                <li><a href="/">Antarctica</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Contact Us</a></li>
                                <li><a href="/">Contribute</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="copyright-text">Copyright &copy; 2019 Wayfarer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer;




