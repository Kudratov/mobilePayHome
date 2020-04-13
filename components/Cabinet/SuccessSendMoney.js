import React, { Component } from 'react';
import Link from 'next/link';
import {connect} from 'react-redux';    
import Router from 'next/router';
import axios from 'axios';

import {url} from './../../store/urls';


class SuccessSendMoney extends React.Component {

    render() {
        return (
            <div id="content" className="py-4">
                <div className="container">
                <h2 className="font-weight-400 text-center mt-3 mb-4">Send Money</h2>
                <div className="row">
                    <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
                    {/* Send Money Success
                ============================================= */}
                    <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                        <div className="text-center my-5">
                        <p className="text-center text-success text-20 line-height-07"><i className="fas fa-check-circle" /></p>
                        <p className="text-center text-success text-8 line-height-07">Success!</p>
                        <p className="text-center text-4">Transactions Complete</p>
                        </div>
                        <p className="text-center text-3 mb-4">You've Succesfully sent <span className="text-4 font-weight-500">$1000</span> to <span className="font-weight-500">demo@gmail.com</span>, See transaction details under <a href="#">Activity</a>.</p>
                        <button className="btn btn-primary btn-block">Send Money Again</button>
                        <button className="btn btn-link btn-block"><i className="fas fa-print" /> Print</button> 
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

export default connect(mapStateToProps)(SuccessSendMoney)