import React, { Component } from 'react';
import Link from 'next/link';
import {connect} from 'react-redux';    
import Router from 'next/router';
import axios from 'axios';

import {url} from './../../store/urls';


class ConfirmSendMoney extends React.Component {

    render() {
        return (
            <div id="content" className="py-4">
                <div className="container">
                <h2 className="font-weight-400 text-center mt-3">Send Money</h2>
                <p className="text-4 text-center mb-4">You are sending money to <span className="font-weight-500">demo@gmail.com</span></p>
                <div className="row">
                    <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
                    <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4"> 
                        {/* Send Money Confirm
                    ============================================= */}
                        <form id="form-send-money" method="post">
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" rows={4} id="description" required placeholder="Payment Description" defaultValue={""} />
                        </div>
                        <h3 className="text-5 font-weight-400 mb-3">Details</h3>
                        <p className="mb-1">Send Amount <span className="text-3 float-right">1,000.00 USD</span></p>
                        <p className="mb-1">Total fees <span className="text-3 float-right">7.21 USD</span></p>
                        <hr />
                        <p className="font-weight-500">Total<span className="text-3 float-right">1,007.21 USD</span></p>
                        <button className="btn btn-primary btn-block">Send Money</button>
                        </form>
                        {/* Send Money Confirm end */} 
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

export default connect(mapStateToProps)(ConfirmSendMoney)