import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useProductCount from '../../hooks/useProductCount';
import PageTitle from '../PageTitle/PageTitle';
import SingleProduct from '../SingleProduct/SingleProduct';
import Spinner from '../Spinner/Spinner';

const ManageItems = () => {
    const [page, setPage] = useState(0);
    const [productCount] = useProductCount();
    const [products, setProducts] = useState([])
    const [active, setActive] = useState(0)
    const [limit, setLimit] = useState(9)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setPage(Math.ceil(productCount / limit))
        const url = `https://protected-atoll-86406.herokuapp.com/allproducts?skip=${active * limit}&limit=${limit}`

        const getData = async () => {
            const { data } = await axios.get(url)
            setProducts(data)
            setIsLoading(!true)
        }
        getData()

    }, [active, productCount, limit])

    const handleSelect = (e) => {
        setLimit(e.target.value)

    }


    return (isLoading ? <Spinner /> : <>
        <div div className='container mx-auto' >
            <PageTitle title={'Manage items-Laptop Stockroom'} />
            <div className='grid grid-cols-1 gap-16 mt-16 md:grid-cols-3 p-4'>
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
                                className={`border-2 p-1 border-blue-500 font-semibold ${active === number ? 'bg-blue-500' : ''}`}
                            > {number + 1}</button>
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
    </>
    );
};

export default ManageItems;