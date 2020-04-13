import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
    require('../../images/gallery1.jpg'),
    require('../../images/gallery2.jpg'),
    require('../../images/gallery3.jpg'),
    require('../../images/gallery4.jpg'),
    require('../../images/gallery5.jpg'),
    require('../../images/gallery6.jpg'),
    require('../../images/gallery7.jpg'),
    require('../../images/gallery8.jpg')
]

class Works extends Component {

    state = {
        photoIndex: 0,
        isOpenImage: false,
    }

    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
            <section className="gallery-area ptb-100 pb-0">
                <div className="container">
                    <div className="section-title">
                        <h2>User Gallery</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="row m-0">
                    <div className="col-lg-3 col-md-6 p-0">
                        <div className="single-image">
                            <img src={require('../../images/gallery1.jpg')} alt="gallery" />

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

                    <div className="col-lg-3 col-md-6 p-0">
                        <div className="single-image">
                            <img src={require('../../images/gallery2.jpg')} alt="gallery" />

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

                    <div className="col-lg-3 col-md-6 p-0">
                        <div className="single-image">
                            <img src={require('../../images/gallery3.jpg')} alt="gallery" />

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

                    <div className="col-lg-3 col-md-6 p-0">
                        <div className="single-image">
                            <img src={require('../../images/gallery4.jpg')} alt="gallery" />

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

                    <div className="col-lg-3 col-md-6 p-0">
                        <div className="single-image">
                            <img src={require('../../images/gallery5.jpg')} alt="gallery" />

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

                    <div className="col-lg-3 col-md-6 p-0">
                        <div className="single-image">
                            <img src={require('../../images/gallery6.jpg')} alt="gallery" />

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

                    <div className="col-lg-3 col-md-6 p-0">
                        <div className="single-image">
                            <img src={require('../../images/gallery7.jpg')} alt="gallery" />

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

                    <div className="col-lg-3 col-md-6 p-0">
                        <div className="single-image">
                            <img src={require('../../images/gallery8.jpg')} alt="gallery" />

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
                </div>
            </section>
        );
    }
}

export default Works;
