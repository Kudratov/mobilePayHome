import React from 'react';
import {connect} from 'react-redux';
import Router from 'next/router';
import axios from 'axios';
import Link from 'next/link';

class CreditCards extends React.Component {
    render() {        
        return (
            <div>
                <div className="bg-light shadow-sm rounded p-4 mb-4">
                <h3 className="text-5 font-weight-400 mb-4">Credit or Debit Cards <span className="text-muted text-4">(for payments)</span></h3>
                <div className="row">

                {this.props.cards && 
                        <>
                        {this.props.cards.map((element, i) => {
                            return (
                                <>

                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="account-card account-card-primary text-white rounded p-3 mb-4 mb-lg-0">                        
                                            <p className="d-flex align-items-center">
                                                <span className="text-2 opacity-9 text-white">{element.cardNumber.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim()}</span>
                                                <span className="text-2 opacity-9 text-white ml-auto">{element.expiresOn ? element.expiresOn.substring(0,2) + "/" + element.expiresOn.substring(2) : ''}</span>
                                            </p>
                                            <p className="d-flex align-items-center">
                                            <span className="text-4 opacity-9 text-white">{element.balance.toLocaleString().split(',').join(' ')} {element.currencyCode}</span> {element.isMainCard ? <span className="bg-light text-0 text-body font-weight-500 rounded-pill d-inline-block px-2 line-height-4 opacity-8 ml-auto">Primary</span> : ''} </p>
                                            <p className="d-flex align-items-center m-0"> <span className="text-uppercase font-weight-500 text-white">{element.name}</span> <img className="ml-auto" src="./../../images/visa.png" alt="visa" title /> </p>
                                            <div className="account-card-overlay rounded"> <a href="#" data-target={`#edit-card-details-${element.id}`} data-toggle="modal" className="text-light btn-link mx-2"><span className="mr-1"><i className="fas fa-edit" /></span>Edit</a> <a href="#" className="text-light btn-link mx-2"><span className="mr-1"><i className="fas fa-minus-circle" /></span>Delete</a> </div>
                                        </div>
                                    </div>
                                    </>
                                )
                        })}                        
                        </>
                    }

{/* 
                    CARD FOR INACTIVE CARD TYPE
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="account-card text-white rounded p-3 mb-4 mb-lg-0">
                            <p className="text-4">XXXX-XXXX-XXXX-6296</p>
                            <p className="d-flex align-items-center"> <span className="account-card-expire text-uppercase d-inline-block opacity-6 mr-2">Valid<br />
                                thru<br />
                            </span> <span className="text-4 opacity-9">07/23</span> </p>
                            <p className="d-flex align-items-center m-0"> <span className="text-uppercase font-weight-500">Smith Rhodes</span> <img className="ml-auto" src="./../../images/mastercard.png" alt="mastercard" title /> </p>
                            <div className="account-card-overlay rounded"> <a href="#" data-target="#edit-card-details" data-toggle="modal" className="text-light btn-link mx-2"><span className="mr-1"><i className="fas fa-edit" /></span>Edit</a> <a href="#" className="text-light btn-link mx-2"><span className="mr-1"><i className="fas fa-minus-circle" /></span>Delete</a> </div>
                        </div>
                    </div> */}

                    <div className="col-12 col-sm-6 col-lg-4"> <a href data-target="#add-new-card-details" data-toggle="modal" className="account-card-new d-flex align-items-center rounded h-100 p-3 mb-4 mb-lg-0">
                        <p className="w-100 text-center line-height-4 m-0"> <span className="text-3"><i className="fas fa-plus-circle" /></span> <span className="d-block text-body text-3">Add New Card</span> </p>
                    </a> </div>
                </div>
                </div>
                {/* Edit Card Details Modal
                ================================== */}

                {this.props.cards && 
                        <>
                        {this.props.cards.map((element, i) => {
                            return (
                                <>


                                    <div id={`edit-card-details-${element.id}`} className="modal fade" role="dialog" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title font-weight-400">Update Card</h5>
                                            <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
                                        </div>
                                        <div className="modal-body p-4">
                                            <form id="updateCard" method="post">
                                            <div className="form-group">
                                                <label htmlFor="edircardNumber">Card Number</label>
                                                <div className="input-group">
                                                <div className="input-group-prepend"> <span className="input-group-text"><img className="ml-auto" src="./../../images/visa.png" alt="visa" title /></span> </div>
                                                <input type="text" className="form-control" data-bv-field="edircardNumber" id="edircardNumber" disabled defaultValue={`${element.cardNumber.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim()}`} placeholder="Card Number" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="editexpiryDate">Expiry Date</label>
                                                    <input id="editexpiryDate" type="text" className="form-control" data-bv-field="editexpiryDate" disabled defaultValue={`${element.expiresOn ? element.expiresOn.substring(0,2) + "/" + element.expiresOn.substring(2) : ''}`} placeholder="MM/YY" />
                                                </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="editcardHolderName">Card Holder Name</label>
                                                <input type="text" className="form-control" data-bv-field="editcardHolderName" id="editcardHolderName" required defaultValue={`${element.name}`} placeholder="Card Holder Name" />
                                            </div>
                                            <button className="btn btn-primary btn-block" type="submit">Update Card</button>
                                            </form>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    </>
                                )
                        })}                        
                        </>
                    }

                {/* Add New Card Details Modal
                ================================== */}
                <div id="add-new-card-details" className="modal fade" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title font-weight-400">Add a Card</h5>
                        <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
                    </div>
                    <div className="modal-body p-4">
                        <form id="addCard" method="post">
                        <div className="btn-group d-flex btn-group-toggle mb-3" data-toggle="buttons">
                            <label className="btn btn-outline-secondary btn-sm shadow-none w-100 active">
                            <input type="radio" name="options" id="option1" defaultChecked />
                            Debit </label>
                            <label className="btn btn-outline-secondary btn-sm shadow-none w-100">
                            <input type="radio" name="options" id="option2" />
                            Credit </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cardType">Card Type</label>
                            <select id="cardType" className="custom-select" required>
                            <option value>Card Type</option>
                            <option>Visa</option>
                            <option>MasterCard</option>
                            <option>American Express</option>
                            <option>Discover</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cardNumber">Card Number</label>
                            <input type="text" className="form-control" data-bv-field="cardnumber" id="cardNumber" required defaultValue placeholder="Card Number" />
                        </div>
                        <div className="form-row">
                            <div className="col-lg-6">
                            <div className="form-group">
                                <label htmlFor="expiryDate">Expiry Date</label>
                                <input id="expiryDate" type="text" className="form-control" data-bv-field="expiryDate" required defaultValue placeholder="MM/YY" />
                            </div>
                            </div>
                            <div className="col-lg-6">
                            <div className="form-group">
                                <label htmlFor="cvvNumber">CVV <span className="text-info ml-1" data-toggle="tooltip" data-original-title="For Visa/Mastercard, the three-digit CVV number is printed on the signature panel on the back of the card immediately after the card's account number. For American Express, the four-digit CVV number is printed on the front of the card above the card account number."><i className="fas fa-question-circle" /></span></label>
                                <input id="cvvNumber" type="password" className="form-control" data-bv-field="cvvnumber" required defaultValue placeholder="CVV (3 digits)" />
                            </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cardHolderName">Card Holder Name</label>
                            <input type="text" className="form-control" data-bv-field="cardholdername" id="cardHolderName" required defaultValue placeholder="Card Holder Name" />
                        </div>
                        <button className="btn btn-primary btn-block" type="submit">Add Card</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        language: state.language,
        token: state.authToken,
        pNumber: state.phoneNumber,
        cardCred: state.cardCred,
        cards: state.cards
    }
}

export default connect(mapStateToProps)(CreditCards)