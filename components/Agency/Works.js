import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = { 
    autoplay: true,
    nav: true,
    loop:true,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: false,
    navText: [
        "<i class='icofont-bubble-left'></i>",
        "<i class='icofont-bubble-right'></i>"
    ],
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1200:{
            items:4,
        }
    }
}

const images = [
    require('../../images/work-img1.jpg'),
    require('../../images/work-img2.jpg'),
    require('../../images/work-img3.jpg'),
    require('../../images/work-img4.jpg'),
    require('../../images/work-img5.jpg'),
    require('../../images/work-img6.jpg')
]

class Works extends Component {

    state = {
        photoIndex: 0,
        isOpenImage: false,
        display:false
    }

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
            <React.Fragment>
            <section className="project-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Recent Work</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="row m-0">
                    {this.state.display ? <OwlCarousel 
                        className="project-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="col-lg-12">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src={require('../../images/work-img1.jpg')} alt="work" />

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3>
                                        <Link href="#">
                                            <a>Network Marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src={require('../../images/work-img2.jpg')} alt="work" />

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3>
                                        <Link href="#">
                                            <a>Network Marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src={require('../../images/work-img3.jpg')} alt="work" />

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3>
                                        <Link href="#">
                                            <a>Network Marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {isOpenImage && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => this.setState({ isOpenImage: false })}
                                onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + 1) % images.length,
                                    })
                                }
                            />
                        )}

                        <div className="col-lg-12">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src={require('../../images/work-img4.jpg')} alt="work" />

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3>
                                        <Link href="#">
                                            <a>Network Marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src={require('../../images/work-img5.jpg')} alt="work" />

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3>
                                        <Link href="#">
                                            <a>Network Marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-12">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src={require('../../images/work-img6.jpg')} alt="work" />

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3>
                                        <Link href="#">
                                            <a>Network Marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
                <canvas id="canvas"></canvas>
            </section>
            </React.Fragment>
        );
    }
}

export default Works;
