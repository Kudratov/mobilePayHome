import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
const images = [
    require('../../images/work-img1.jpg'),
    require('../../images/work-img2.jpg'),
    require('../../images/work-img3.jpg'),
    require('../../images/work-img4.jpg'),
    require('../../images/work-img5.jpg'),
    require('../../images/work-img6.jpg')
]

class ContentThree extends Component {

    state = {
        photoIndex: 0,
        isOpenImage: false
    }

    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
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
                                    <h3><Link href="#"><a>Network Marketing</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
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
                                    <h3><Link href="#"><a>Network Marketing</a></Link></h3>
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

                        <div className="col-lg-3 col-sm-6">
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
                                    <h3><Link href="#"><a>Network Marketing</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
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
                                    <h3><Link href="#"><a>Network Marketing</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
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
                                    <h3><Link href="#"><a>Network Marketing</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
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
                                    <h3><Link href="#"><a>Network Marketing</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
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
                                    <h3><Link href="#"><a>Network Marketing</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
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
                                    <h3><Link href="#"><a>Network Marketing</a></Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ContentThree;
