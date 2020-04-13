import React, { Component } from 'react';

class AnalysisForm extends Component {
    render() {
        return (
            <section className="analysis-area ptb-100 bg-gray">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="analysis-form">
                                <h3>Free SEO Analysis</h3>
                                <form>
                                    <div className="form-group">
                                        <input type="text" placeholder="Name*" className="form-control" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <input type="email" placeholder="Email*" className="form-control" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <input type="text" placeholder="Phone*" className="form-control" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <input type="text" placeholder="Website*" className="form-control" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <input type="text" placeholder="Company Name*" className="form-control" />
                                    </div>
                                    
                                    <button type="submit" className="btn btn-primary">Get Free Report</button>
                                </form>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                            <div className="analysis-text">
                                <span>Free SEO Analysis</span>
                                <h3>Be on the Top & Get More Traffic to Your Website</h3>
                                <p>The following services explain how we approach SEO for a range of common purposes:</p>
                                <ul>
                                    <li>If Google can’t crawl your site, it’s not going to rank – but that doesn’t mean avoiding Javascript.</li>
                                    <li>For businesses which sell products online and and improve their product listings in the search results.</li>
                                    <li>If you’re investing in a new website it’s important to ensure it’s built to succeed in the search results too.</li>
                                    <li>If Google can’t crawl your site, it’s not going to rank – but that doesn’t mean avoiding Javascript.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AnalysisForm;
