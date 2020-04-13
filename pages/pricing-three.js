import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Pricing/Banner';
import PricingPlanThree from '../components/Pricing/PricingPlanThree';

class PricingThree extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <PricingPlanThree />

                <Footer />
            </React.Fragment>
        );
    }
}

export default PricingThree;
