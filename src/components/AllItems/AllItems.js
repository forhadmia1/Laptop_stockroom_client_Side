import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const AllItems = () => {
    const [items, setItems] = useState([]);
    let count = 0;

    useEffect(() => {
        axios.get('https://protected-atoll-86406.herokuapp.com/allproducts')
            .then(function (response) {
                setItems(response.data);
            })
    }, [])

    return (
        <table className="w-full text-center mt-6">
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
                    items.map(laptop => {

                        count++;
                        return <Item
                            key={laptop._id}
                            laptop={laptop}
                            count={count}
                            data={[items, setItems]}
                        />

                    })
                }
            </tbody>
        </table>
    );
};

export default AllItems;