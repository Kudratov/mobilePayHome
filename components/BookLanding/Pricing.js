import React, { Component } from 'react';

class Pricing extends Component {
    render() {
        return (
            <section className="pricing-area book-pricing ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Easy Pricing Plans</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table">
                                <div className="price-header">
                                    <h3 className="title">e-Book</h3>
                                    <div className="price"><span className="dollar">$</span>6.00<span className="month">/Mo</span></div>
                                </div>

                                <div className="price-footer">
                                    <a className="btn btn-primary" href="#">Get Started</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table">
                                <div className="price-header">
                                    <h3 className="title">PDF</h3>
                                    <div className="price"><span className="dollar">$</span>12.99<span className="month">/Mo</span></div>
                                </div>

                                <div className="price-footer">
                                    <a className="btn btn-primary" href="#">Get Started</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table">
                                <div className="price-header">
                                    <h3 className="title">Printed</h3>
                                    <div className="price"><span className="dollar">$</span>19.00<span className="month">/Mo</span></div>
                                </div>

                                <div className="price-footer">
                                    <a className="btn btn-primary" href="#">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <canvas id="canvas"></canvas>
            </section>
        );
    }
}

export default Pricing;
