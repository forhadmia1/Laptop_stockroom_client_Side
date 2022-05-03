import axios from 'axios';
import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri'

const Item = ({ laptop, count, data }) => {

    const { name, image, quantity, _id } = laptop;
    const [allItems, setAllItems] = data;

    const handleDelete = async (id) => {
        axios.delete(`http://localhost:5000/inventory/${id}`)
            .then(function (response) {
                // handle success
                console.log(response);
            })
        const rest = allItems.filter(laptop => laptop._id !== id)
        setAllItems(rest)
    }

    return (
        <tr className="bg-white border-b">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">{count}</td>
            <td className="text-sm text-gray-900 font-light px-4 py-4    ">
                <img className='w-10' src={image} alt="" />
            </td>
            <td className="text-sm text-gray-900 font-light px-4 py-4    ">
                {name}
            </td>
            <td className="text-sm text-gray-900 font-light px-4 py-4    ">
                {quantity}
            </td>
            <td className="text-sm text-gray-900 font-light px-4 py-4    ">
                <button onClick={() => handleDelete(_id)}><RiDeleteBin5Line className='text-2xl text-red-600' /></button>
            </td>
        </tr>
    );
};

export default Item;