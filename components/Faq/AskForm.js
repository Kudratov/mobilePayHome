import React, { Component } from 'react';

class AskForm extends Component {
    render() {
        return (
            <div className="faq-contact">
                <h3>Ask Your Question</h3>
                <form>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="text" placeholder="Name" className="form-control" />
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="email" placeholder="Email" className="form-control" />
                            </div>
                        </div>
                        
                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <input type="text" placeholder="Subject" className="form-control" />
                            </div>
                        </div>
                        
                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <textarea name="message" cols="30" rows="6" placeholder="Message" className="form-control" />
                            </div>
                        </div>
                        
                        <div className="col-lg-12 col-md-12">
                            <button className="btn btn-primary" type="submit">Submit Now!</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AskForm;
