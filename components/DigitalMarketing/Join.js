import React, { Component } from 'react';
import Link from 'next/link';

class Join extends Component {
    render() {
        return (
            <section className="join-area ptb-100">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="join-img">
                                <img src={require('../../images/3.png')} alt="img" />
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-6">
                            <div className="join-content">
                                <span>Start 30 Days Free Trial</span>
                                <h3>Overall 400k+ Our Clients! Please Get Start Now</h3> 
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                <Link href="#">
                                    <a className="btn btn-primary">Join Now</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Join;
