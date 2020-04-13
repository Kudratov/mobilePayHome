import React from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

class Banner extends React.Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    componentDidMount(){ 
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile:       true,
            live:         true,
        }).init();
    }

    render() {
        return (
            <React.Fragment>
            <div className="main-banner saas-home">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="saas-image">
                                        <img 
                                            src={require('../../images/saas-shape/arrow.png')} 
                                            className="wow fadeInDown"
                                            alt="arrow"
                                        />
                                        <img 
                                            src={require('../../images/saas-shape/box11.png')}
                                            className="wow fadeInUp"
                                            data-wow-delay="0.6s"
                                            alt="box1"
                                        />
                                        <img 
                                            src={require('../../images/saas-shape/boy1.png')}
                                            className="wow fadeInLeft"
                                            data-wow-delay="0.6s"
                                            alt="boy1"
                                        />
                                        <img 
                                            src={require('../../images/saas-shape/boy2.png')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="boy2"
                                        />
                                        <img 
                                            src={require('../../images/saas-shape/boy3.png')}
                                            className="wow bounceIn"
                                            data-wow-delay="0.6s"
                                            alt="boy3"
                                        />
                                        <img 
                                            src={require('../../images/saas-shape/digital-screen.png')}
                                            className="wow fadeInDown"
                                            data-wow-delay="0.6s"
                                            alt="digital-screen"
                                        />
                                        <img 
                                            src={require('../../images/saas-shape/filter1.png')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="filter1"
                                        />
                                        <img 
                                            src={require('../../images/saas-shape/filter2.png')}
                                            className="wow fadeInUp"
                                            data-wow-delay="0.6s"
                                            alt="filter2"
                                        />
                                        <img 
                                            src={require('../../images/saas-shape/filter3.png')}
                                            className="wow rotateIn"
                                            data-wow-delay="0.6s"
                                            alt="filter3"
                                        />
                                        <img 
                                            src={require('../../images/saas-shape/girl1.png')}
                                            className="wow fadeInUp"
                                            data-wow-delay="0.6s"
                                            alt="girl1"
                                        />
                                        <img 
                                            src={require('../../images/saas-shape/girl2.png')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="girl2"
                                        />
                                        <img 
                                            src={require('../../images/saas-shape/monitor.png')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="monitor"
                                        />
                                        <img 
                                            src={require('../../images/saas-shape/main-image.png')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="main-image.png"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-content pl-4">
                                        <h1>Manage your business strategy in one placeholder</h1>
                                        <p>Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation.</p>
                                        <Link href="#">
                                            <a className="btn btn-primary">Get Started</a>
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
                            </div>
                        </div>
                    </div>
                </div>

                

                <div className="bg-gray shape-1"></div>
                <div className="shape1">
                    <img src={require('../../images/shape1.png')} alt="img" />
                </div>
                <div className="shape2">
                    <img src={require('../../images/shape2.png')} alt="img" />
                </div>
                <div className="shape3">
                    <img src={require('../../images/shape3.png')} alt="img" />
                </div>
                <div className="shape4 rotateme">
                    <img src={require('../../images/shape4.png')} alt="img" />
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
