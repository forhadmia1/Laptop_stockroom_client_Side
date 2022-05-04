import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Item from '../Item/Item';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([]);
    let count = 0;

    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:5000/myitems?email=${user.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(function (response) {
                    setItems(response.data);
                })
        }
    }, [user])

    return (
        <table className="w-full text-center container mx-auto mt-4">
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

export default MyItems;