import React from 'react';

const SingleProduct = ({ laptop }) => {
    console.log(laptop)
    const { name, image, price, description, quantity, _id, suplierName } = laptop;
    return (
        <div className="mb-6 lg:mb-0">
            <div className="relative block bg-white rounded-lg shadow-lg">
                <div className='p-4'>
                    <img src={image} alt="" className="w-full" />
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
                    <p className="mb-4 pb-2">
                        {description}
                    </p>
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light"
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</a>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;