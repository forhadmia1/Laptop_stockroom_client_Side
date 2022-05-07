import React from 'react';
import Banner from '../Banner/Banner';
import Countersection from '../Countersection/Countersection';
import Feature from '../Feature/Feature';
import Inventory from '../Inventory/Inventory';
import PageTitle from '../PageTitle/PageTitle';

const Home = () => {
    return (
        <div>
            <PageTitle title={'Home-Laptop Stockroom'} />
            <Banner />
            <Inventory />
            <Feature />
            <Countersection />
        </div>
    );
};

export default Home;