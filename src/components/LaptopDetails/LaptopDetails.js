import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs'

const LaptopDetails = () => {
    const { id } = useParams();
    const [laptop, setLaptop] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:5000/inventory/${id}`)
            .then(function (response) {
                // handle success
                setLaptop(response.data);
            })
    }, [id])

    const { name, image, price, description, quantity, suplierName } = laptop;

    const handleDelivered = async () => {
        const { quantity, _id, ...rest } = laptop;
        const newQuantity = parseInt(quantity) - 1;
        const update = { quantity: newQuantity, ...rest }

        const { data } = await axios.put(`http://localhost:5000/inventory/${id}`, update)
        if (data.modifiedCount > 0) {
            setLaptop(update)
        }

    }

    return (
        <div className="container my-24 px-6 mx-auto">

            {/* Section: Design Block  */}
            <section className="mb-32 text-gray-800 text-center md:text-left">
                <div className="block rounded-lg shadow-lg bg-white">
                    <div className="flex flex-wrap items-center">
                        <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                            <img src={image} alt="Trendy Pants and Shoes"
                                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                            <div className="px-6 py-12 md:px-12">
                                <h2 className="text-3xl font-bold mb-6 pb-2">{name}</h2>
                                <p className="text-gray-500 mb-6 pb-2">
                                    {description}
                                </p>
                                <div className="flex flex-wrap mb-6">
                                    <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                        <p className="flex items-center justify-center md:justify-start">
                                            <BsFillCheckCircleFill className='mr-3' /><span className='font-semibold'>Price:</span> {price}
                                        </p>
                                    </div>
                                    <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                        <p className="flex items-center justify-center md:justify-start">
                                            <BsFillCheckCircleFill className='mr-3' /><span className='font-semibold'>Quantity:</span> {quantity}
                                        </p>
                                    </div>
                                    <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                        <p className="flex items-center justify-center md:justify-start">
                                            <BsFillCheckCircleFill className='mr-3' /><span className='font-semibold'>Suplier Name:</span> {suplierName}
                                        </p>
                                    </div>
                                </div>
                                <button type="button" onClick={handleDelivered}
                                    className="inline-block px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                                    Delivered
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Section: Design Block  */}
        </div>
    );
};

export default LaptopDetails;