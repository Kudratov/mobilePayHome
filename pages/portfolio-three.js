import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Portfolio/Banner';
import ContentThree from '../components/Portfolio/ContentThree';

class PortfolioThree extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <ContentThree />

                <Footer />
            </React.Fragment>
        );
    }
}

export default PortfolioThree;
