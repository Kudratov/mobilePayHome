import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:true,
    autoplay:true,
    autoplayHoverPause: true,
    mouseDrag: true,
    center: true,
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
        1024:{
            items:3,
        },
        1200:{
            items:3,
        }
    }
}

const images = [
    require('../../images/page1.jpg'),
    require('../../images/page1.jpg'),
    require('../../images/page1.jpg'),
    require('../../images/page1.jpg'),
    require('../../images/page1.jpg'),
    require('../../images/page1.jpg'),
    require('../../images/page1.jpg')
]

class Screenshot extends Component {
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
            <section className="screenshot-area page-from-book ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Pages From Book</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="screenshot-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12">
                                <div className="screenshot-item">
                                    <Link href="#">
                                        <a><img src={require('../../images/page1.jpg')} alt="screenshot" /></a>
                                    </Link>

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="screenshot-item">
                                    <Link href="#">
                                        <a><img src={require('../../images/page1.jpg')} alt="screenshot" /></a>
                                    </Link>

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
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
                                <div className="screenshot-item">
                                    <Link href="#">
                                        <a><img src={require('../../images/page1.jpg')} alt="screenshot" /></a>
                                    </Link>

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="screenshot-item">
                                    <Link href="#">
                                        <a><img src={require('../../images/page1.jpg')} alt="screenshot" /></a>
                                    </Link>

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="screenshot-item">
                                    <Link href="#">
                                        <a><img src={require('../../images/page1.jpg')} alt="screenshot" /></a>
                                    </Link>

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="screenshot-item">
                                    <Link href="#">
                                        <a><img src={require('../../images/page1.jpg')} alt="screenshot" /></a>
                                    </Link>

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="screenshot-item">
                                    <Link href="#">
                                        <a><img src={require('../../images/page1.jpg')} alt="screenshot" /></a>
                                    </Link>

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default Screenshot;
