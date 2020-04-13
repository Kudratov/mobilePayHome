import React from 'react';
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
            <section className="app-funfacts-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                <div className="icon">
                                    <i className="icofont-users-alt-5"></i>
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
                                                        ? 2150
                                                        : 0
                                                }
                                                duration={3}
                                            />
                                        </VisibilitySensor>
                                    </span>
                                </h3>
                                <p>Active Clients</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                <div className="icon">
                                    <i className="icofont-rocket-alt-1"></i>
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
                                                        ? 86
                                                        : 0
                                                }
                                                duration={3}
                                            />
                                        </VisibilitySensor>
                                    </span>
                                </h3>
                                <p>Success Rate</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                <div className="icon">
                                    <i className="icofont-laptop-alt"></i>
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
                                                        ? 550
                                                        : 0
                                                }
                                                duration={3}
                                            />
                                        </VisibilitySensor>
                                    </span>
                                </h3>
                                <p>Projects Done</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                <div className="icon">
                                    <i className="icofont-win-trophy"></i>
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
                                                        ? 35
                                                        : 0
                                                }
                                                duration={3}
                                            />
                                        </VisibilitySensor>
                                    </span>
                                    +
                                </h3>
                                <p>Awards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Funfact;
