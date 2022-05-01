import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Inventory = () => {
    const [laptops, setLaptops] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/laptops')
            .then(function (response) {
                // handle success
                setLaptops(response.data);
            })
    }, [])
    return (
        <div className="container my-16 px-6 mx-auto">
            <section className="mb-32 text-gray-800 text-center">

                <h2 className="text-3xl font-bold pb-4 text-center">Inventory</h2>

                <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
                    {
                        laptops.map(laptop => <SingleProduct
                            key={laptop._id}
                            laptop={laptop}
                        />)
                    }
                </div>

            </section>
        </div>
    );
};

export default Inventory;