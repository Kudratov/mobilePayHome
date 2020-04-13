import React, { Component } from 'react';

class AboutContent extends Component {
    render() {
        return (
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="section-title">
                                    <h2>Our process is simple; Our products are powerful.</h2>
                                    <div className="bar"></div>
                                    <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                </div>
                                <p>Business-to-business metrics analytics value proposition funding angel investor entrepreneur alpha ramen equity gamification. Social proof partner network research.</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis egestas ante, sed viverra nunc tincidunt nec nteger nonsed condimntum elit, sit amet feugiat lorem. Proin tempus sagittis velit vitae scelerisque.</p>

                                <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <img src={require('../../images/marketing.png')} alt="image" />
                        </div>
                    </div>
                </div>

                <div className="about-inner-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="about-text">
                                    <h3>Our Company</h3>
                                    <p>Lorem ipsum dolor sit amet, con sectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="about-text">
                                    <h3>Who we are</h3>
                                    <p>Lorem ipsum dolor sit amet, con sectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="about-text">
                                    <h3>What we Value</h3>
                                    <p>Lorem ipsum dolor sit amet, con sectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="about-text">
                                    <h3>Contact Us</h3>
                                    <p>Lorem ipsum dolor sit amet, con sectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutContent;
