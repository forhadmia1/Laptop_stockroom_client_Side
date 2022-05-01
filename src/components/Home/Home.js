import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner />
            <Inventory />
            <Footer />
        </div>
    );
};

export default Home;