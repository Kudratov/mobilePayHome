import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Team/Banner';
import TeamSecond from '../components/Team/TeamSecond';

class TeamOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <TeamSecond />

                <Footer />
            </React.Fragment>
        );
    }
}

export default TeamOne;
