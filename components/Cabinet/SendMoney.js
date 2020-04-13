import React, { Component } from 'react';
import Link from 'next/link';
import {connect} from 'react-redux';    
import Router from 'next/router';
import axios from 'axios';

import {url} from './../../store/urls';
import {addRecieverInfo, addTransferAmount} from './../../store/actions/cartActions';


class MoneySend extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            cardHolder: '',
            amount: ''
        }
        this.handleCardNumber = this.handleCardNumber.bind(this);
        this.handleAmount = this.handleAmount.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    handleCardNumber (e) {
        e.target.value = e.target.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim()
        let cardNumber = e.target.value;
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${this.props.token}`
            }
            let __url = `${url}p2p-api/v1.0/receiverdetails/${cardNumber.replace(/\s+/g, "")}`
            axios.get(`${__url}`, {headers: headers})
            .then((response) => {
                let __expiresOn = response.data.expiresOn.substring(4,6) + response.data.expiresOn.substring(2,4);
                this.props.dispatch(addRecieverInfo(`${response.data.cardNumber}-${__expiresOn}-${response.data.cardholderFullName}`));
                this.setState({cardHolder: response.data.cardholderFullName})
            })
            .catch((error) => {
                console.log(error)
                this.setState({cardHolder: ''})
            })
        
    }

    handleAmount (e) {
        let amount = e.target.value;
        this.props.dispatch(addTransferAmount(amount))
        this.setState({amount: amount.toLocaleString().split(',').join(' ')})
    }
    //.replace(/\s+/g, "")
    handleSend () {
        Router.push('/cabinet-transfer-checkout');
    }

    render() {
        return (
            <div id="content" className="py-4">
                <div className="container">
                <h2 className="font-weight-400 text-center mt-3">Send Money</h2>
                <p className="text-4 text-center mb-4">Send your money on anytime, anywhere in the world.</p>
                <div className="row">
                    <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
                    <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                        <h3 className="text-5 font-weight-400 mb-3">Personal Details</h3>
                        {/* Send Money Form
                    ============================================= */}
                        <form id="form-send-money" method="post">
                        <div className="form-group">
                            <label htmlFor="emailID">Recipient</label>
                            <input type="text" className="form-control" maxLength="19" onChange={(e) => this.handleCardNumber(e)} pattern="^[0-9]{16}$" placeholder="0000 0000 0000 0000" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="youSend">You Send</label>
                            <div className="input-group">
                            <input type="number" className="form-control" onChange={(e) => this.handleAmount(e)} pattern="^[0-9]{16}$" placeholder="Enter The Amount"/>
                            <div className="input-group-append"> <span className="input-group-text p-2">
                                UZS
                                </span> </div>
                            </div>
                        </div>
                        {this.state.cardHolder && <p className="text-muted text-center">CardHolder: <span className="font-weight-500">{this.state.cardHolder}</span></p>}
                        <hr />
                        {this.state.amount && 
                            <>
                            
                            <p className="mb-1">Total fees <span className="text-3 float-right">{(Number(this.state.amount) * 0.05).toLocaleString().split(',').join(' ')} UZS</span></p>
                            <p className="font-weight-500">Total To Pay <span className="text-3 float-right">{(Number(this.state.amount) * 1.05).toLocaleString().split(',').join(' ')} UZS</span></p>
                        </>
                        }
                        <button className="btn btn-primary btn-block" disabled={!this.state.cardHolder ? true : false}>Continue</button>
                        </form>
                        {/* Send Money Form end */} 
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
        transferAmount: state.transferAmount,
        recieverInfo: state.recieverInfo
    }
}

export default connect(mapStateToProps)(MoneySend)