import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import Lightbox from 'react-image-lightbox';
import '../../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-image-lightbox/style.css';

const images = [
    require('../../images/work-img2.jpg'),
    require('../../images/work-img3.jpg')
]

class DetailsContent extends Component {

    state = {
        isOpen: false,
        photoIndex: 0,
        isOpenImage: false,
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
            <section className="project-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require('../../images/work-img1.jpg')} alt="work" />

                                <Link href="#">
                                    <a 
                                        className="popup-youtube"
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                    >
                                        <i className="icofont-ui-play"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        
                        <ModalVideo 
                            channel='youtube' 
                            isOpen={this.state.isOpen} 
                            videoId='bk7McNUjWgw' 
                            onClose={() => this.setState({isOpen: false})} 
                        />

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
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
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require('../../images/work-img4.jpg')} alt="work" />

                                <Link href="#">
                                    <a 
                                        className="popup-youtube"
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                    >
                                        <i className="icofont-ui-play"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
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

                        <div className="col-lg-12 col-md-12">
                            <div className="project-details-desc">
                                <h3>Network Marketing</h3>
                                <p>Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed diam no nu m nibhie eui smod. Facil isis atve eros et accumsan etiu sto odi dignis sim qui blandit praesen lup ta de er. At molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei latine prop riae na, mea cu purto debitis. Primis nost rud no eos, no impedit dissenti as mea, ea vide labor amus neglegentur vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise.  Ad po exerci nusquam eos te. Cu altera expet enda qui, munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui, munere oblique theophr astus ea vix modus civiu mod eratius.</p>

                                <p>Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed diam no nu m nibhie eui smod. Facil isis atve eros et accumsan etiu sto odi dignis sim qui blandit praesen lup ta de er. At molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei latine prop riae na, mea cu purto debitis. Primis nost rud no eos, no impedit dissenti as mea, ea vide labor amus neglegentur vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise.  Ad po exerci nusquam eos te. Cu altera expet enda qui, munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui, munere oblique theophr astus ea vix modus civiu mod eratius.</p>

                                <div className="project-details-information">
                                    <div className="single-info-box">
                                        <h4>Happy Client</h4>
                                        <p>John Doe</p>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Category</h4>
                                        <p>Portfolio, Persoanl</p>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Date</h4>
                                        <p>February 28, 2019</p>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Share</h4>
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-facebook"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-twitter"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-instagram"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-linkedin"></i></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="single-info-box">
                                        <Link href="#">
                                            <a className="btn btn-primary">Live Preview</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DetailsContent;
