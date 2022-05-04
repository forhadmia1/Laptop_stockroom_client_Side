import React from 'react';
import './Banner.css'
import laptop from '../../Assets/Image/Laptop.jpg'

const Banner = () => {
    return (
        <div className="px-6 py-12 md:px-12 text-center lg:text-left background-radial-gradient">
            <div className="container mx-auto xl:px-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="mt-12 lg:mt-0">
                        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-white">Mackbook pro<br /><span className='text-blue-500'>The best one</span></h1>
                        {/* <a className="inline-block px-7 py-3 mr-2 bg-gray-200 text-gray-700 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a> */}
                    </div>
                    <div className="mb-12 lg:mb-0">
                        <img
                            src={laptop}
                            className="w-full rounded-lg shadow-lg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;