import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';

const Inventory = () => {
    const [laptops, setLaptops] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:5000/laptops')
            .then(function (response) {
                setLaptops(response.data);
            })
    }, [])
    return (
        <div id='inventory' className="container my-16 px-6 mx-auto">
            <section className="text-gray-800 text-center">

                <h2 className="text-4xl font-bold pb-4 text-center text-slate-600">Inventory</h2>

                <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
                    {
                        laptops.map(laptop => <SingleProduct
                            key={laptop._id}
                            laptop={laptop}
                        />)
                    }
                </div>
                <div className='mt-16'>
                    <button onClick={() => navigate('/manageinventories')} type="button" className="inline-block px-10 py-3 bg-blue-400 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">Manage Inventories</button>
                </div>
            </section>
        </div>
    );
};

export default Inventory;