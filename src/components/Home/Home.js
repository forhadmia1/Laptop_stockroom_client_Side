import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory/Inventory';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Inventory />
            <Testimonials />
            <Feature />
            <Footer />
        </div>
    );
};

export default Home;