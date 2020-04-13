import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Project/Banner';
import DetailsContent from '../components/Project/DetailsContent';

class ProjectDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <DetailsContent />
                
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProjectDetails;
