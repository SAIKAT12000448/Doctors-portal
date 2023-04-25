import React from 'react';
import Navigation from '../Home/Shared/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>






            
        </div>
    );
};

export default Main;