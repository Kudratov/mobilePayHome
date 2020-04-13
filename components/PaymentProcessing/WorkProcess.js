import React from 'react';

class WorkProcess extends React.Component {
    render() {
        return (
            <section className="saas-work-process ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>How it work?</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-work-process">
                                <div className="icon">
                                    <i className="icofont-unlock"></i>
                                </div>
                                <h3>Create a new account</h3>
                                <p>Morbi pharetra sapien ut mattis.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-work-process">
                                <div className="icon">
                                    <i className="icofont-money"></i>
                                </div>
                                <h3>Deposite money</h3>
                                <p>Morbi pharetra sapien ut mattis.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-work-process">
                                <div className="icon">
                                    <i className="icofont-like"></i>
                                </div>
                                <h3>Pay online services</h3>
                                <p>Morbi pharetra sapien ut mattis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WorkProcess;
