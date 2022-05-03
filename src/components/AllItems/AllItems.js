import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri'
import Item from '../Item/Item';

const AllItems = () => {
    const [allItems, setAllItems] = useState([]);
    let count = 0;

    useEffect(() => {
        axios.get('http://localhost:5000/allproducts')
            .then(function (response) {
                // handle success
                setAllItems(response.data);
            })
    }, [])

    // const handleDelete = async (id) => {
    //     axios.delete(`http://localhost:5000/inventory/${id}`)
    //         .then(function (response) {
    //             // handle success
    //             console.log(response);
    //         })
    //     const rest = allLaptops.filter(laptop => laptop._id !== id)
    //     setAllLaptops(rest)
    // }

    return (
        <table className="w-full text-center">
            <thead className="border-b bg-gray-800">
                <tr>
                    <th scope="col" className="text-sm font-medium text-white px-4 py-4">
                        #
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-4 py-4">
                        Image
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-4 py-4">
                        Name
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-4 py-4">
                        Stock
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-4 py-4">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    allItems.map(laptop => {

                        // const { name, image, quantity, _id, suplierName } = laptop;
                        count++;
                        return <Item
                            key={laptop._id}
                            laptop={laptop}
                            count={count}
                            data={[allItems, setAllItems]}
                        // handleDelete={handleDelete}
                        />
                        // return <tr
                        //     key={_id} className="bg-white border-b">
                        //     <td className="px-6 py-4 text-sm font-medium text-gray-900">{count}</td>
                        //     <td className="text-sm text-gray-900 font-light px-4 py-4    ">
                        //         <img className='w-10' src={image} alt="" />
                        //     </td>
                        //     <td className="text-sm text-gray-900 font-light px-4 py-4    ">
                        //         {name}
                        //     </td>
                        //     <td className="text-sm text-gray-900 font-light px-4 py-4    ">
                        //         {quantity}
                        //     </td>
                        //     <td className="text-sm text-gray-900 font-light px-4 py-4    ">
                        //         <button onClick={() => handleDelete(_id)}><RiDeleteBin5Line className='text-2xl text-red-600' /></button>
                        //     </td>
                        // </tr>
                    })
                }
            </tbody>
        </table>
    );
};

export default AllItems;