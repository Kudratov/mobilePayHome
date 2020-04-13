import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Portfolio/Banner';
import ContentOne from '../components/Portfolio/ContentOne';

class PortfolioOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <ContentOne />

                <Footer />
            </React.Fragment>
        );
    }
}

export default PortfolioOne;
