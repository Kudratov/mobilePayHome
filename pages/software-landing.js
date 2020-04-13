import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/SoftwareLanding/Banner';
import Partner from '../components/SoftwareLanding/Partner';
import Features from '../components/SoftwareLanding/Features';
import Overview from '../components/SoftwareLanding/Overview';
import CtaCard from '../components/SoftwareLanding/CtaCard';
import SaasTools from '../components/SoftwareLanding/SaasTools';
import Funfact from '../components/SoftwareLanding/Funfact';
import GetStarted from '../components/SoftwareLanding/GetStarted';
import Blog from '../components/SoftwareLanding/Blog';
import Download from '../components/SoftwareLanding/Download';
import Platform from '../components/SoftwareLanding/Platform';

class HomeFive extends React.Component {
    render() {
        return (
            <React.Fragment>
               <Navbar />
               <Banner />
               <Partner />
               <Features />
               <Overview />
               <CtaCard />
               <SaasTools />
               <Funfact />
               <GetStarted />
               <Blog />
               <Download />
               <Platform />

               <Footer />
            </React.Fragment>
        );
    }
}

export default HomeFive;
