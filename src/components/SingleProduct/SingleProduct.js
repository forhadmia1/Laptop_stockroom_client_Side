import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ laptop }) => {
    const { name, image, price, description, quantity, _id, suplierName } = laptop;
    return (
        <div className="mb-6 lg:mb-0">
            <div className="relative block bg-white rounded-lg shadow-xl border h-full">
                <div className='p-4'>
                    <img className='hover:scale-110 w-full duration-500' src={image} alt="" />
                </div>
                <div className="p-4 text-left">
                    <h5 className="font-bold text-lg mb-3">{name}</h5>
                    <p className="text-gray-500 mb-4">
                        price: {price}
                    </p>
                    <p className="text-gray-500 mb-4">
                        Quantity: {quantity}
                    </p>
                    <p className="text-gray-500 mb-4">
                        <small>Suplier: {suplierName}</small>
                    </p>
                    <p className="mb-16 pb-2">
                        {description.slice(0, 100)} <small className='font-semibold'>...<Link to={`/inventory/${_id}`} >see more</Link></small>
                    </p>
                    <div className='absolute bottom-6 left-1/2 -translate-x-1/2'>
                        <Link to={`/inventory/${_id}`} data-mdb-ripple="true" data-mdb-ripple-color="light"
                            className="text-center block px-8 py-2.5 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out">Update</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;