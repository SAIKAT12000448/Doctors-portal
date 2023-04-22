
import React, { Fragment } from 'react';
// import Register from '../Login/Register/Register';
// import ScrollButton from '../ScrollButton/ScrollButton';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import OurDoctor from './Ourdoctor/OurDoctor';
import Services from './Services/Services';
import Footer from './Shared/Footer';
import Navigation from './Shared/Navigation';
import Treatment from './Treatment/Treatment';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
          <Fragment>
          <Navigation></Navigation>
            <Outlet></Outlet>
            <Banner></Banner>
            <Contact></Contact>
            <Services></Services>
            <Treatment></Treatment>
            <AppointmentBanner></AppointmentBanner>
            <OurDoctor></OurDoctor>
            <Footer></Footer>
          </Fragment>
        </div>
    );
};

export default Home;