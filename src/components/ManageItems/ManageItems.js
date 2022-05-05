import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useProductCount from '../../hooks/useProductCount';
import SingleProduct from '../SingleProduct/SingleProduct';

const ManageItems = () => {
    const [page, setPage] = useState(0);
    const [productCount] = useProductCount();
    const [products, setProducts] = useState([])
    const [active, setActive] = useState(0)
    const [limit, setLimit] = useState(12)

    useEffect(() => {
        setPage(Math.ceil(productCount / 12))
        const url = `https://protected-atoll-86406.herokuapp.com/allproducts?skip=${active * limit}&limit=${limit}`

        const getData = async () => {
            const { data } = await axios.get(url)
            setProducts(data)
        }
        getData()

    }, [active, productCount, limit])

    const handleSelect = (e) => {
        setLimit(e.target.value)

    }


    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-3 gap-16 mt-16'>
                {
                    products.map(laptop => <SingleProduct
                        key={laptop._id}
                        laptop={laptop}
                    />
                    )
                }
            </div>

            <div className='flex justify-center gap-2 my-12 items-center'>
                <div className='flex gap-2'>
                    {
                        [...Array(page).keys()].map(number => <>
                            <button
                                onClick={() => setActive(number)}
                                key={number}
                                className={`border-2 p-1 border-blue-500 font-semibold ${active === number ? 'bg-red-500' : ''}`}
                            > {number}</button>
                        </>)
                    }
                </div>
                <div>
                    <select onChange={handleSelect}>
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="18">18</option>
                    </select>
                </div>
            </div>
        </div >
    );
};

export default ManageItems;