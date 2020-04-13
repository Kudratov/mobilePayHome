import React, { Component } from 'react';
import Link from 'next/link';

class Overview extends Component {
    render() {
        return (
            <section className="overview-section ptb-100">
                <div className="container">
                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-img">
                                <img src={require('../../images/overview-1.png')} alt="image" />
                            </div>

                            <div className="col-lg-6 col-md-6 overview-content">
                                <span>Fitness Tracking</span>
                                <h3>Get fit with a tracker that's more than a bit smarter</h3>
                                <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>

                                <ul>
                                    <li>User Friendly</li>
                                    <li>High Security</li>
                                    <li>Free Updates</li>
                                </ul>
                                <Link  href="#">
                                    <a className="btn btn-primary">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="overview-box modern-flexible">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-item right-icon">
                                    <div className="icon">
                                        <i className="icofont-lamp-light"></i>
                                    </div>
                                    <h3>Stunning Showcases</h3>
                                    <p>Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.</p>
                                </div>

                                <div className="single-item right-icon">
                                    <div className="icon">
                                        <i className="icofont-responsive"></i>
                                    </div>
                                    <h3>Fully Customizable</h3>
                                    <p>Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.</p>
                                </div>

                                <div className="single-item right-icon">
                                    <div className="icon">
                                        <i className="icofont-ui-timer"></i>
                                    </div>
                                    <h3>Engaging Tours</h3>
                                    <p>Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 overview-img">
                                <img src={require('../../images/feature-img-with-app.png')} alt="image" />
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-item">
                                    <div className="icon">
                                        <i className="icofont-ui-timer"></i>
                                    </div>
                                    <h3>Engaging Tours</h3>
                                    <p>Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.</p>
                                </div>

                                <div className="single-item">
                                    <div className="icon">
                                        <i className="icofont-star-alt-2"></i>
                                    </div>
                                    <h3>Exquisite Design</h3>
                                    <p>Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.</p>
                                </div>

                                <div className="single-item">
                                    <div className="icon">
                                        <i className="icofont-ui-timer"></i>
                                    </div>
                                    <h3>Engaging Tours</h3>
                                    <p>Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-content">
                                <span>Instant Video Call and live chat</span>
                                <h3>Everything you nedd, one swipe away.</h3>
                                <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>

                                <ul>
                                    <li>Unimited Video Call</li>
                                    <li>Add Favourite contact</li>
                                    <li>Camera Filter</li>
                                </ul>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>

                            <div className="col-lg-6 col-md-6 overview-img">
                                <img src={require('../../images/overview-4.png')} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape7"><img src={require('../../images/shape7.png')} alt="shape" /></div>
                <div className="shape3"><img src={require('../../images/shape3.png')} alt="img" /></div>
                <div className="bg-gray shape-1"></div>
                <div className="shape6"><img src={require('../../images/shape6.png')} alt="img" /></div>
                <div className="shape8 rotateme"><img src={require('../../images/shape8.svg')} alt="shape" /></div>
                <div className="shape9"><img src={require('../../images/shape9.svg')} alt="shape" /></div>
                <div className="shape10"><img src={require('../../images/shape10.svg')} alt="shape" /></div>
                <div className="shape11 rotateme"><img src={require('../../images/shape11.svg')} alt="shape" /></div>
            </section>
        );
    }
}

export default Overview;
