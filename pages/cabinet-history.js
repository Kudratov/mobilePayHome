import React, { Component } from 'react';
import Navbar from '../components/Cabinet/Navbar';
import CabinetHistory from '../components/Cabinet/History';
import Sideber from '../components/Cabinet/Sideber';

class Payment extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Sideber url={"history"}/>
                <CabinetHistory />
            </React.Fragment>
        );
    }
}

export default Payment;
