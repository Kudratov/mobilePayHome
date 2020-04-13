import React from 'react';
import Link from 'next/link';

class Download extends React.Component {
    render() {
        return (
            <section className="app-download ptb-100 bg-gray">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="section-title">
                                <h2>Download Our Apps Today</h2>
                                <div className="bar"></div>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account the system and expound the actual teachings of the great explore.</p>

                                <div className="download-btn">
                                    <Link href="#">
                                        <a><i className="icofont-brand-android-robot"></i> Available On <span>Google Store</span></a>
                                    </Link>
                                    <Link href="#">
                                        <a><i className="icofont-brand-apple"></i> Available On <span>Apple Store</span></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="download-image">
                                <img src={require('../../images/app-img1.png')} alt="image" />
                                <img src={require('../../images/app-img2.png')} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Download;
