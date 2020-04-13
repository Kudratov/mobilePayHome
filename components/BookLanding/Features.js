import React, { Component } from 'react';

class Features extends Component {
    render() {
        return (
            <section className="features-area book-features ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="icofont-print"></i>
                                </div>
                                <h3>Printed Book</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="icofont-ui-edit"></i>
                                </div>
                                <h3>User Research</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="icofont-vehicle-delivery-van"></i>
                                </div>
                                <h3>Free Delivery</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="features-inner-area">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="features-inner-content">
                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-win-trophy"></i>
                                        </div>
                                        <h3>More than 5+ award achived</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>

                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-responsive"></i>
                                        </div>
                                        <h3>Read On Any Device</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>

                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-verification-check"></i>
                                        </div>
                                        <h3>Very high resolution (4K)</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="features-image">
                                    <img src={require('../../images/features-img1.png')} alt="image" />
                                </div>
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

export default Features;
