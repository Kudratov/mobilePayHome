import React, { Component } from 'react';
import Link from 'next/link';

class Main extends Component {
    render() {
        return (
            <section className="ptb-1001 container-fluid clearfix">
                    <div className="row">                        
                        <div className="col-md-6">
                            <h2>Kartadan kartaga pul o'tkazish</h2>
                            <p>Xizmat narxi</p>
                        </div>
                    </div>
                <div className="phone-payment d-flex">
                        <div className="col-md-12">
                            <form className="form-inline-payment">
                                <div className="form-row phone-payment-form-main d-flex justify-content-center">
                                    <div className="col-phone">
                                        <label className="d-flex justify-content-start">Phone Number</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text beginning-phone-num">+998</span>
                                                <input type="text" className="form-control form-inline-input body-phone-num" placeholder="--- -- --"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-amount">
                                        <label className="d-flex justify-content-start">Amount of money</label>
                                        <div className="input-group">
                                            <div className="input-group-append">
                                                <input type="text" className="form-control form-inline-input body-amount" placeholder="Summani kiriting"/>
                                                <span className="input-group-text end-amount">So'm</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-button">
                                    <input type="submit" className="form-control form-inline-button-submit"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                <div className="selected-payments">
                    <div className="row">
                        <div className="col">
                            <h3>Saralanga to'lovlar</h3>
                        </div>
                    </div>
                </div>
                <div className="selected-payments">
                    <div className="row">
                        <div className="col">
                            <div className="card div-card-img">
                                <img className="card-img-top" alt="Card image" src="https://cdn.payme.uz/merchants/3a9f50a0737ffe196d5a6268f1fa3ac3858f2013.png"/>
                                <div className="card-body">
                                    <p className="card-text">Mening raqamim +9989566253</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Main;
