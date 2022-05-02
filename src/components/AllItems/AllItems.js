import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri'

const AllItems = () => {
    const [allLaptops, setAllLaptops] = useState([]);
    let count = 0;

    useEffect(() => {
        axios.get('http://localhost:5000/allproducts')
            .then(function (response) {
                // handle success
                setAllLaptops(response.data);
            })
    }, [])

    const handleDelete = async (id) => {
        axios.delete(`http://localhost:5000/inventory/${id}`)
            .then(function (response) {
                // handle success
                console.log(response);
            })
        const rest = allLaptops.filter(laptop => laptop._id !== id)
        setAllLaptops(rest)
    }

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center">
                            <thead className="border-b bg-gray-800">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        #
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Image
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Name
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Suplier Name
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Quantity
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allLaptops.map(laptop => {
                                        const { name, image, quantity, _id, suplierName } = laptop;
                                        count++;
                                        return <tr
                                            key={_id} className="bg-white border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{count}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <img className='w-10' src={image} alt="" />
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {name}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {suplierName}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {quantity}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <button onClick={() => handleDelete(_id)}><RiDeleteBin5Line className='text-2xl text-red-600' /></button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllItems;