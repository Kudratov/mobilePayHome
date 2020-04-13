import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';

class Banner extends Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    render() {
        return (
            <React.Fragment>
            <div className="main-banner software-home">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-content">
                                        <h1>Get more done with the new Crake</h1>
                                        <p>Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation.</p>
                                        <Link href="#">
                                            <a className="btn btn-primary">Download Crake</a>
                                        </Link>
                                        <Link href="#">
                                            <a
                                                onClick={e => {e.preventDefault(); this.openModal()}}
                                                className="video-btn popup-youtube"
                                            > 
                                                Watch Video 
                                                <i className="icofont-play-alt-3"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-12">
                                    <div className="signup-download ml-5">
                                        <h3></h3>

                                        <form>
                                            <div className="form-group">
                                                <label>Username</label>
                                                <input type="text" className="form-control" placeholder="Enter your username" />
                                            </div>

                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" className="form-control" placeholder="Enter your email" />
                                            </div>

                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control" placeholder="Enter your password" />
                                            </div>

                                            <button type="submit" className="btn btn-primary">Sign Up</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="creative-shape"><img src={require('../../images/bg5.png')} alt="bg" /></div>
                <div className="bg-gray shape-1"></div>
                <div className="shape1"><img src={require('../../images/shape1.png')} alt="img" /></div>
                <div className="shape2"><img src={require('../../images/shape2.png')} alt="img" /></div>
                <div className="shape3"><img src={require('../../images/shape3.png')} alt="img" /></div>
                <div className="shape6"><img src={require('../../images/shape6.png')} alt="img" /></div>
                <div className="shape8 rotateme"><img src={require('../../images/shape8.svg')} alt="shape" /></div>
                <div className="shape9"><img src={require('../../images/shape9.svg')} alt="shape" /></div>
                
                <div className="bubble-animate">
                    <div className="circle small square1"></div>
                    <div className="circle small square2"></div>
                    <div className="circle small square3"></div>
                    <div className="circle small square4"></div>
                    <div className="circle small square5"></div>
                    <div className="circle medium square1"></div>
                    <div className="circle medium square2"></div>
                    <div className="circle medium square3"></div>
                    <div className="circle medium square4"></div>
                    <div className="circle medium square5"></div>
                    <div className="circle large square1"></div>
                    <div className="circle large square2"></div>
                    <div className="circle large square3"></div>
                    <div className="circle large square4"></div>
                </div>
            </div>
            <ModalVideo 
                channel='youtube' 
                isOpen={this.state.isOpen} 
                videoId='szuchBiLrEM' 
                onClose={() => this.setState({isOpen: false})} 
            />
            </React.Fragment>
        );
    }
}

export default Banner;
