import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Team/Banner';
import Team from '../components/Team/Team';

class TeamOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <Team />

                <Footer />
            </React.Fragment>
        );
    }
}

export default TeamOne;
