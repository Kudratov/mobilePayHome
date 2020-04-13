import React, { Component } from 'react';
import Banner from '../components/Features/Banner';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import FeaturesContent from '../components/Features/FeaturesContent';
import Overview from '../components/Features/Overview';
import Platform from '../components/Features/Platform';

class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <FeaturesContent />
                <Overview />
                <Platform />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Features;
