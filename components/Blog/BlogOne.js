import React, { Component } from 'react';

class BlogOne extends Component {
    render() {
        return (
            <section className="blog-area blog-section ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <a href="#" className="post-image">
                                    <img src={require('../../images/blog-img1.jpg')} alt="blog-image" />
                                </a>

                                <div className="blog-post-content">
                                    <ul>
                                        <li><i className="icofont-user-male"></i> <a href="#">Admin</a></li>
                                        <li><i className="icofont-wall-clock"></i> January 23, 2019</li>
                                    </ul>
                                    <h3><a href="#">The Most Popular New Business Apps</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <a href="#" className="post-image">
                                    <img src={require('../../images/blog-img2.jpg')} alt="blog-image" />
                                </a>

                                <div className="blog-post-content">
                                    <ul>
                                        <li><i className="icofont-user-male"></i> <a href="#">Admin</a></li>
                                        <li><i className="icofont-wall-clock"></i> January 16, 2019</li>
                                    </ul>
                                    <h3><a href="#">The Best Marketing Management Tools</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <a href="#" className="post-image">
                                    <img src={require('../../images/blog-img3.jpg')} alt="blog-image" />
                                </a>

                                <div className="blog-post-content">
                                    <ul>
                                        <li><i className="icofont-user-male"></i> <a href="#">Admin</a></li>
                                        <li><i className="icofont-wall-clock"></i> January 14, 2019</li>
                                    </ul>
                                    <h3><a href="#">3 WooCommerce Plugins to Boost Sales</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <a href="#" className="post-image">
                                    <img src={require('../../images/blog-img4.jpg')} alt="blog-image" />
                                </a>

                                <div className="blog-post-content">
                                    <ul>
                                        <li><i className="icofont-user-male"></i> <a href="#">Admin</a></li>
                                        <li><i className="icofont-wall-clock"></i> January 06, 2019</li>
                                    </ul>
                                    <h3><a href="#">CakeMail Review – Design Custom Emails</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <a href="#" className="post-image">
                                    <img src={require('../../images/blog-img5.jpg')} alt="blog-image" />
                                </a>

                                <div className="blog-post-content">
                                    <ul>
                                        <li><i className="icofont-user-male"></i> <a href="#">Admin</a></li>
                                        <li><i className="icofont-wall-clock"></i> January 04, 2019</li>
                                    </ul>
                                    <h3><a href="#">The Most Popular New Apps in 2019</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <a href="#" className="post-image">
                                    <img src={require('../../images/blog-img3.jpg')} alt="blog-image" />
                                </a>

                                <div className="blog-post-content">
                                    <ul>
                                        <li><i className="icofont-user-male"></i> <a href="#">Admin</a></li>
                                        <li><i className="icofont-wall-clock"></i> January 26, 2019</li>
                                    </ul>
                                    <h3><a href="#">The Fastest Growing Apps in 2019</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                    
                                        <li className="page-item"><a className="page-link" href="#"><i className="icofont-double-left"></i></a></li>
                                        
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        
                                        <li className="page-item"><a className="page-link" href="#"><i className="icofont-double-right"></i></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogOne;
