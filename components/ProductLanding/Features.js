import React, { Component } from 'react';
import Link from 'next/link';

class Features extends Component {
    render() {
        return (
            <section className="features-area product-features ptb-100">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="features-holder-content">
                                <div className="section-title">
                                    <h2>A Watch Can Make Your Life Easy and Comfortable</h2>
                                    <div className="bar"></div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                </div>

                                <p>We’re also experts at finding the sweet spot between Google’s guidelines and what is commercially right for you. We have progressive theories on search as a tool for retention of customers, not just for acquisition. we always measure, always analyze and always innovate.</p>
                                <Link href="#">
                                    <a className="btn btn-primary">Our Services</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-holder-box mt-50">
                                        <img src={require('../../images/watch-1.png')} alt="image" />
                                        <h3>Camera Resulation</h3>
                                        <p>Duis hendrerit eget dolor non lora pulvinar. In conse.</p>
                                    </div>

                                    <div className="single-holder-box mt-30">
                                        <img src={require('../../images/watch-2.png')} alt="image" />
                                        <h3>High Speed Shooting</h3>
                                        <p>Duis hendrerit eget dolor non lora pulvinar. In conse.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-holder-box">
                                        <img src={require('../../images/watch-2.png')} alt="image" />
                                        <h3>Powerful Control Panel</h3>
                                        <p>Duis hendrerit eget dolor non lora pulvinar. In conse.</p>
                                    </div>

                                    <div className="single-holder-box mt-30">
                                        <img src={require('../../images/watch-1.png')} alt="image" />
                                        <h3>Healthy Battery Life</h3>
                                        <p>Duis hendrerit eget dolor non lora pulvinar. In conse.</p>
                                    </div>
                                </div>
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
                                            <i className="icofont-download"></i>
                                        </div>
                                        <h3>Install Apps</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>

                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-tracking"></i>
                                        </div>
                                        <h3>GPS Tracking</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>

                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-qr-code"></i>
                                        </div>
                                        <h3>QR Code Scaner</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="features-image text-center">
                                    <img src={require('../../images/watch-1.png')} alt="image" />
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
