import React from 'react';
import Banner from '../Banner/Banner';
import Countersection from '../Countersection/Countersection';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner />
            <Inventory />
            <Feature />
            <Countersection />
            <Footer />
        </div>
    );
};

export default Home;