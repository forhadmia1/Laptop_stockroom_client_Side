import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { toast } from 'react-toastify';

const LaptopDetails = () => {
    const { id } = useParams();
    const [laptop, setLaptop] = useState({});

    useEffect(() => {
        axios.get(`https://protected-atoll-86406.herokuapp.com/inventory/${id}`)
            .then(function (response) {
                // handle success
                setLaptop(response.data);
            })
    }, [id])

    const { name, image, price, description, quantity, suplierName } = laptop;

    //handle delivered btn
    const handleDelivered = async () => {
        const { quantity, _id, ...rest } = laptop;

        if (quantity > 0) {
            const newQuantity = parseInt(quantity) - 1;
            const update = { quantity: newQuantity, ...rest }

            const { data } = await axios.put(`https://protected-atoll-86406.herokuapp.com/inventory/${id}`, update)
            if (data.modifiedCount > 0) {
                setLaptop(update)
                toast.success('Delivered Complete!')
            }
        }
    }
    //handle restock btn
    const stockRef = useRef();
    const handleRestock = async (e) => {
        const newQuantity = stockRef.current.value;

        if (newQuantity || newQuantity > 0) {
            const { quantity, _id, ...rest } = laptop;
            const restock = parseInt(quantity) + parseInt(newQuantity);
            const update = { quantity: restock, ...rest }

            const { data } = await axios.put(`https://protected-atoll-86406.herokuapp.com/inventory/${id}`, update)
            if (data.modifiedCount > 0) {
                setLaptop(update)
                toast.success('Stock update successfully!')
            }
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
                                <div className='flex justify-between flex-col gap-6 md:flex-row'>
                                    <button type="button" onClick={handleDelivered}
                                        className="inline-block px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                                        Delivered
                                    </button>
                                    <div className="flex justify-center">
                                        <div className="xl:w-96 flex">
                                            <input
                                                ref={stockRef}
                                                type="number"
                                                className="
                                                        form-control
                                                        block
                                                        py-1.5
                                                        md:px-2
                                                        text-base
                                                        font-normal
                                                        text-gray-700
                                                        bg-white bg-clip-padding
                                                        border border-solid border-gray-300
                                                        rounded
                                                        transition
                                                        ease-in-out
                                                        m-0
                                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                                        "
                                                id="exampleNumber0"
                                                placeholder="Add Quantity"
                                            />
                                            <button type="button" onClick={handleRestock}
                                                className="inline-block px-4 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                                                Restock
                                            </button>
                                        </div>
                                    </div>
                                </div>
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