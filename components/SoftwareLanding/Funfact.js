import React from 'react';
import Link from 'next/link';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

class Funfact extends React.Component {

    state = {
        didViewCountUp: false
    };

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    };

    render() {
        return (
            <React.Fragment>
            <section className="app-funfacts-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                <div className="icon">
                                    <i className="icofont-users"></i>
                                </div>
                                <h3>
                                    <span className="count">
                                        <VisibilitySensor
                                            onChange={this.onVisibilityChange}
                                            offset={{
                                                top: 10
                                            }}
                                            delayedCall
                                        >
                                            <CountUp
                                                start={0}
                                                end={
                                                    this.state.didViewCountUp
                                                        ? 806
                                                        : 0
                                                }
                                                duration={3}
                                            />
                                        </VisibilitySensor>
                                    </span>
                                </h3>
                                <p>Satisfied Client</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                <div className="icon">
                                    <i className="icofont-thumbs-up"></i>
                                </div>
                                <h3>
                                    <span className="count">
                                        <VisibilitySensor
                                            onChange={this.onVisibilityChange}
                                            offset={{
                                                top: 10
                                            }}
                                            delayedCall
                                        >
                                            <CountUp
                                                start={0}
                                                end={
                                                    this.state.didViewCountUp
                                                        ? 202
                                                        : 0
                                                }
                                                duration={3}
                                            />
                                        </VisibilitySensor>
                                    </span>
                                </h3>
                                <p>Appriciation</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                <div className="icon">
                                    <i className="icofont-diamond"></i>
                                </div>
                                <h3>
                                    <span className="count">
                                        <VisibilitySensor
                                            onChange={this.onVisibilityChange}
                                            offset={{
                                                top: 10
                                            }}
                                            delayedCall
                                        >
                                            <CountUp
                                                start={0}
                                                end={
                                                    this.state.didViewCountUp
                                                        ? 5241
                                                        : 0
                                                }
                                                duration={3}
                                            />
                                        </VisibilitySensor>
                                    </span>
                                </h3>
                                <p>Response time</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                <div className="icon">
                                    <i className="icofont-wrench"></i>
                                </div>
                                <h3>
                                    <span className="count">
                                        <VisibilitySensor
                                            onChange={this.onVisibilityChange}
                                            offset={{
                                                top: 10
                                            }}
                                            delayedCall
                                        >
                                            <CountUp
                                                start={0}
                                                end={
                                                    this.state.didViewCountUp
                                                        ? 512
                                                        : 0
                                                }
                                                duration={3}
                                            />
                                        </VisibilitySensor>
                                    </span>
                                </h3>
                                <p>Updates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="fun-facts-area ptb-100 bg-gray">
                <div className="fun-facts-inner-area mt-0">
                    <div className="container-fluid">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="fun-facts-image">
                                    <img src={require('../../images/features-img1.png')} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="fun-facts-inner-content">
                                    <h3>Build Beautiful Interface Into Your Application</h3>
                                    <p>Funding freemium technology focus equity bootstrapping usernce niche market. Seed round agile development growth hacking retur investment alpha. Investor advisor marketing pitch gen scrum project.</p>
                                    <p>Responsive web design. Agile development innovator termsheet is users interface pitch scrum project research & development.</p>
                                    <ul>
                                        <li>Unimited Video Call</li>
                                        <li>Add Favourite contact</li>
                                        <li>Camera Filter</li>
                                    </ul>
                                    <Link href="#">
                                        <a className="btn btn-primary">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </React.Fragment>
        );
    }
}

export default Funfact;
