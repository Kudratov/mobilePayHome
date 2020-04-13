import React, { Component } from 'react';

class Boxes extends Component {
    render() {
        return (
            <section className="boxes-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <div className="icon">
                                    <i className="icofont-comment"></i>
                                </div>
                                <h3>Business Strategy</h3>
                                <p>Morbilling pharetra sapiening ut mattis viverra. Curabitur magna.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <div className="icon">
                                    <i className="icofont-like"></i>
                                </div>
                                <h3>Social Media</h3>
                                <p>Morbilling pharetra sapiening ut mattis viverra. Curabitur magna.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-box">
                                <div className="icon">
                                    <i className="icofont-laptop"></i>
                                </div>
                                <h3>Experience Design</h3>
                                <p>Morbilling pharetra sapiening ut mattis viverra. Curabitur magna.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Boxes;
