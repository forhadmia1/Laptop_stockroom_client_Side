import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import PopUpModal from '../PopUpModal/PopUpModal';

const Item = ({ laptop, count, data }) => {

    const { name, image, quantity, _id } = laptop;
    const [items, setItems] = data;

    const handleDelete = async (id) => {
        axios.delete(`https://protected-atoll-86406.herokuapp.com/inventory/${id}`)
            .then(function (response) {
                // handle success
                if (response.data.deletedCount > 0) {
                    toast.error('Deleted Item!')
                };
            })
        const rest = items.filter(laptop => laptop._id !== id)
        setItems(rest)
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
                <PopUpModal handleDelete={handleDelete} id={_id} />
            </td>
        </tr>
    );
};

export default Item;