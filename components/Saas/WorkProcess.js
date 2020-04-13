import React from 'react';

class WorkProcess extends React.Component {
    render() {
        return (
            <section className="saas-work-process ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Work Process</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-work-process">
                                <div className="icon">
                                    <i className="icofont-calendar"></i>
                                </div>
                                <h3>Plan</h3>
                                <p>Morbi pharetra sapien ut mattis.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-work-process">
                                <div className="icon">
                                    <i className="icofont-code-alt"></i>
                                </div>
                                <h3>Develop</h3>
                                <p>Morbi pharetra sapien ut mattis.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-work-process">
                                <div className="icon">
                                    <i className="icofont-server"></i>
                                </div>
                                <h3>Lounch</h3>
                                <p>Morbi pharetra sapien ut mattis.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-work-process">
                                <div className="icon">
                                    <i className="icofont-check"></i>
                                </div>
                                <h3>Reporting</h3>
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
