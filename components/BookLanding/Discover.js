import React, { Component } from 'react';

class Discover extends Component {
    render() {
        return (
            <section className="book-discover ptb-100">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="discover-content">
                                <h3>Discoverd Topics</h3>
                                <span>Take a look at topics are discovered in this book</span>
                                <p>Gain is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances.</p>

                                <ul>
                                    <li><i className="icofont-check"></i> Design principles</li>
                                    <li><i className="icofont-check"></i> Visual hierarchy</li>
                                    <li><i className="icofont-check"></i> White space</li>
                                    <li><i className="icofont-check"></i> Image selection</li>
                                    <li><i className="icofont-check"></i> Responsive Design</li>
                                    <li><i className="icofont-check"></i> Typography</li>
                                    <li><i className="icofont-check"></i> Color theory</li>
                                    <li><i className="icofont-check"></i> UI design</li>
                                    <li><i className="icofont-check"></i> UX design</li>
                                    <li><i className="icofont-check"></i> Real life projects</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="discover-img">
                                <img src={require('../../images/book-img2.png')} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Discover;
