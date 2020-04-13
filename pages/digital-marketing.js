import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/DigitalMarketing/Banner';
import Partner from '../components/DigitalMarketing/Partner';
import Features from '../components/DigitalMarketing/Features';
import Services from '../components/DigitalMarketing/Services';
import Overview from '../components/DigitalMarketing/Overview';
import Join from '../components/DigitalMarketing/Join';
import AnalysisForm from '../components/DigitalMarketing/AnalysisForm';
import Funfact from '../components/DigitalMarketing/Funfact';
import Works from '../components/DigitalMarketing/Works';
import Team from '../components/DigitalMarketing/Team';
import Pricing from '../components/DigitalMarketing/Pricing';
import Blog from '../components/DigitalMarketing/Blog';
import Feedback from '../components/DigitalMarketing/Feedback';
import GetStarted from '../components/DigitalMarketing/GetStarted';
import Platform from '../components/DigitalMarketing/Platform';

class DigitalMarketing extends React.Component {
    render() {
        return (
            <React.Fragment>
               <Navbar />
               <Banner />
               <Partner />
               <Features />
               <Services />
               <Overview />
               <Join />
               <AnalysisForm />
               <Funfact />
               <Works />
               <Team />
               <Pricing />
               <Blog />
               <Feedback />
               <GetStarted />
               <Platform />
               <Footer />
            </React.Fragment>
        );
    }
}

export default DigitalMarketing;