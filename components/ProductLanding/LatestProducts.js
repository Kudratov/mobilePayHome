import React, { Component } from 'react';
import Link from 'next/link';
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
            items:3,
        }
    }
}

class LatestProducts extends Component {
    state = { display:false};

    componentDidMount(){ 
        this.setState({ display: true }) 
    }
    render() {
        return (
            <section className="product-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Latest Product</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                    {this.state.display ? <OwlCarousel 
                            className="product-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <img src={require('../../images/shop-item1.jpg')} alt="item" />

                                        <Link href="#">
                                            <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Drop Side Watch</a>
                                            </Link>
                                        </h3>

                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-5 col-6">
                                                <h5>$8.50 <span>$12.00</span></h5>
                                            </div>

                                            <div className="col-lg-7 col-6">
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <img src={require('../../images/shop-item2.jpg')} alt="item" />
                                        <Link href="#">
                                            <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Drop Side Watch</a>
                                            </Link>
                                        </h3>

                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-5 col-6">
                                                <h5>$8.50 <span>$12.00</span></h5>
                                            </div>

                                            <div className="col-lg-7 col-6">
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <img src={require('../../images/shop-item3.jpg')} alt="item" />
                                        <Link href="#">
                                            <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Drop Side Watch</a>
                                            </Link>
                                        </h3>

                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-5 col-6">
                                                <h5>$8.50 <span>$12.00</span></h5>
                                            </div>

                                            <div className="col-lg-7 col-6">
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <img src={require('../../images/shop-item4.jpg')} alt="item" />

                                        <Link href="#">
                                            <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Drop Side Watch</a>
                                            </Link>
                                        </h3>

                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-5 col-6">
                                                <h5>$8.50 <span>$12.00</span></h5>
                                            </div>

                                            <div className="col-lg-7 col-6">
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <img src={require('../../images/shop-item5.jpg')} alt="item" />

                                        <Link href="#">
                                            <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Drop Side Watch</a>
                                            </Link>
                                        </h3>

                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-5 col-6">
                                                <h5>$8.50 <span>$12.00</span></h5>
                                            </div>

                                            <div className="col-lg-7 col-6">
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <img src={require('../../images/shop-item6.jpg')} alt="item" />

                                        <Link href="#">
                                            <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Drop Side Watch</a>
                                            </Link>
                                        </h3>

                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-5 col-6">
                                                <h5>$8.50 <span>$12.00</span></h5>
                                            </div>

                                            <div className="col-lg-7 col-6">
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default LatestProducts;
