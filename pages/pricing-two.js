import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Pricing/Banner';
import PricingPlanTwo from '../components/Pricing/PricingPlanTwo';

class PricingTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <PricingPlanTwo />

                <Footer />
            </React.Fragment>
        );
    }
}

export default PricingTwo;
