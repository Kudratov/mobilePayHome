import React, { Component } from 'react';
import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';
import Banner from '../components/Gallery/Banner';
import GalleryContent from '../components/Gallery/GalleryContent';

class Gallery extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <GalleryContent />

                <Footer />
            </React.Fragment>
        );
    }
}

export default Gallery;
