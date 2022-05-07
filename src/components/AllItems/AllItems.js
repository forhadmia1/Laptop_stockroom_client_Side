import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import PageTitle from '../PageTitle/PageTitle';
import Spinner from '../Spinner/Spinner';

const AllItems = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    let count = 0;

    useEffect(() => {
        setIsLoading(true)
        axios.get('https://protected-atoll-86406.herokuapp.com/allproducts')
            .then(function (response) {
                setItems(response.data);
                setIsLoading(!true)
            })
    }, [])

    return (
        isLoading ? <Spinner /> :
            <table className="w-full text-center mt-6">
                <PageTitle title={'All items-Laptop Stockroom'} />
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