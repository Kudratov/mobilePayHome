import React, { Component } from 'react';

class NewFeatures extends Component {
    render() {
        return (
            <section className="new-features-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="new-features-img">
                                <img src={require('../../images/feature-img-with-app.png')} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="new-features-content">
                                <div className="section-title">
                                    <h2>Know yourself, Know your health</h2>
                                    <div className="bar"></div>
                                </div>

                                <div className="single-inner-features">
                                    <i className="icofont-download"></i>
                                    <h3>Download App</h3>
                                    <p>Progressively expedite bleeding-edge catalysts for change via resource sucking channels. Energistically expedite.</p>
                                </div>

                                <div className="single-inner-features">
                                    <i className="icofont-bluetooth"></i>
                                    <h3>Bluetooth Data Sync</h3>
                                    <p>Progressively expedite bleeding-edge catalysts for change via resource sucking channels. Energistically expedite.</p>
                                </div>

                                <div className="single-inner-features">
                                    <i className="icofont-ui-weather"></i>
                                    <h3>Weather Update</h3>
                                    <p>Progressively expedite bleeding-edge catalysts for change via resource sucking channels. Energistically expedite.</p>
                                </div>

                                <div className="single-inner-features">
                                    <i className="icofont-blood-drop"></i>
                                    <h3>Blood Pressure Management</h3>
                                    <p>Progressively expedite bleeding-edge catalysts for change via resource sucking channels. Energistically expedite.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NewFeatures;
