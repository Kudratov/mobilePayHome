import React, { Component } from 'react';
import Link from 'next/link';

class SignupBody extends Component {
    render() {
        return (
            <section className="signup-area ptb-100">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="login-image">
                                <img src={require('../../images/marketing.png')} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="signup-form">
                                <h3>Create your Account</h3>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Username" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Password" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="checkme" />
                                                <label className="form-check-label" htmlFor="checkme">Keep me Login</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <button type="submit" className="btn btn-primary">Signup Now!</button>
                                            <br />
                                            <span>Already a registered user? <Link href="/login"><a>Login!</a></Link></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SignupBody;
