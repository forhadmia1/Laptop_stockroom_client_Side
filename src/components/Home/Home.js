import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Countersection from '../Countersection/Countersection';
import Feature from '../Feature/Feature';
import Inventory from '../Inventory/Inventory';
import PageTitle from '../PageTitle/PageTitle';
import Spinner from '../Spinner/Spinner';

const Home = () => {

    const [laptops, setLaptops] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('https://protected-atoll-86406.herokuapp.com/allproducts?skip=0&limit=6')
            .then(function (response) {
                setLaptops(response.data);
                setLoading(false)
            })
    }, [])

    return (loading ? <Spinner /> :
        <div>
            <PageTitle title={'Home-Laptop Stockroom'} />
            <Banner />
            <Inventory laptops={laptops} />
            <Feature />
            <Countersection />
        </div>
    );
};

export default Home;