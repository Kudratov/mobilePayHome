import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/ProductLanding/Banner';
import Features from '../components/ProductLanding/Features';
import NewFeatures from '../components/ProductLanding/NewFeatures';
import VirtualReality from '../components/ProductLanding/VirtualReality';
import Overview from '../components/ProductLanding/Overview';
import WorkProcess from '../components/ProductLanding/WorkProcess';
import Works from '../components/ProductLanding/Works';
import LatestProducts from '../components/ProductLanding/LatestProducts';
import Blog from '../components/ProductLanding/Blog';
import Feedback from '../components/ProductLanding/Feedback';
import Download from '../components/ProductLanding/Download';
import Platform from '../components/ProductLanding/Platform';

class ProductLanding extends React.Component {
    render() {
        return (
            <React.Fragment>
               <Navbar />
               <Banner />
               <Features />
               <NewFeatures />
               <VirtualReality />
               <Overview />
               <WorkProcess />
               <Works />
               <LatestProducts />
               <Blog />
               <Feedback />
               <Download />
               <Platform />

               <Footer />
            </React.Fragment>
        );
    }
}

export default ProductLanding;
