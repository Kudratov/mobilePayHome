import React, { Component } from 'react';

class Overview extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="overview-section software-overview ptb-100">
                <div className="container">
                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-img">
                                <img src={require('../../images/overview-1.png')} alt="image" />
                            </div>

                            <div className="col-lg-6 col-md-6 overview-content">
                                <span>Now 2x faster</span>
                                <h3>Stay safer and more private</h3>
                                <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>

                                <ul className="features-list">
                                    <li>User Friendly</li>
                                    <li>High Security</li>
                                    <li>Free Updates</li>
                                    <li>QR Code Scaner</li>
                                    <li>User Friendly</li>
                                    <li>High Security</li>
                                    <li>Free Updates</li>
                                    <li>QR Code Scaner</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overview-section software-overview ptb-100 bg-gray">
                <div className="container">
                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-content">
                                <span>Notification Alerts</span>
                                <h3>A faster way to do just about anything</h3>
                                <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>

                                <ul className="features-list">
                                    <li>User Friendly</li>
                                    <li>High Security</li>
                                    <li>Free Updates</li>
                                    <li>QR Code Scaner</li>
                                    <li>User Friendly</li>
                                    <li>High Security</li>
                                    <li>Free Updates</li>
                                    <li>QR Code Scaner</li>
                                </ul>
                            </div>

                            <div className="col-lg-6 col-md-6 overview-img">
                                <img src={require('../../images/overview-2.png')} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overview-section software-overview ptb-100">
                <div className="container">
                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-img">
                                <img src={require('../../images/overview-3.png')} alt="image" />
                            </div>

                            <div className="col-lg-6 col-md-6 overview-content">
                                <span>New Browser</span>
                                <h3>Google smarts for everything you want to do</h3>
                                <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>

                                <ul className="features-list">
                                    <li>User Friendly</li>
                                    <li>High Security</li>
                                    <li>Free Updates</li>
                                    <li>QR Code Scaner</li>
                                    <li>User Friendly</li>
                                    <li>High Security</li>
                                    <li>Free Updates</li>
                                    <li>QR Code Scaner</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overview-section software-overview ptb-100 bg-gray">
                <div className="container">
                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-content">
                                <span>Lightweight</span>
                                <h3>Everything you nedd, one swipe away.</h3>
                                <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>

                                <ul className="features-list">
                                    <li>User Friendly</li>
                                    <li>High Security</li>
                                    <li>Free Updates</li>
                                    <li>QR Code Scaner</li>
                                    <li>User Friendly</li>
                                    <li>High Security</li>
                                    <li>Free Updates</li>
                                    <li>QR Code Scaner</li>
                                </ul>
                            </div>

                            <div className="col-lg-6 col-md-6 overview-img">
                                <img src={require('../../images/overview-4.png')} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </React.Fragment>
        );
    }
}

export default Overview;
