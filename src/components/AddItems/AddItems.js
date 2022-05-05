import axios from 'axios';
import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth)
    const nameRef = useRef()
    const imageRef = useRef()
    const suplierNameRef = useRef()
    const priceRef = useRef()
    const quantityRef = useRef()
    const descriptionRef = useRef()


    const handleAddItem = (e) => {
        e.preventDefault()
        const name = nameRef.current.value;
        const image = imageRef.current.value;
        const suplierName = suplierNameRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const description = descriptionRef.current.value;
        const author = user.email;
        const newItem = { author, name, image, suplierName, price, quantity, description }
        axios.post('https://protected-atoll-86406.herokuapp.com/inventory/additem', newItem)
            .then(function (response) {
                e.target.reset();
                toast('hello')
                console.log(response);
            })

    }

    return (
        <div className="block p-6 rounded-lg shadow-lg w-8/12 bg-white mx-auto">
            <h1 className='text-center text-2xl font-semibold mb-8'>Add product details here</h1>
            <form onSubmit={handleAddItem}>
                <div className="form-group mb-6">
                    <label htmlFor="pdName" className='text-lg font-semibold
                    text-gray-700'>Name:</label>
                    <input type="text"
                        ref={nameRef}
                        className="form-control block
                        mt-1
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="pdName"
                        required
                    />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="imageurl" className='text-lg font-semibold
                    text-gray-700'>Image Url:</label>
                    <input type="text"
                        ref={imageRef}
                        className="form-control block
                        w-full
                        mt-1
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="imageurl"
                        required
                    />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="SuplierName" className='text-lg font-semibold
                    text-gray-700'>Suplier Name:</label>
                    <input type="text"
                        ref={suplierNameRef}
                        className="form-control block
                        w-full
                        mt-1
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="SuplierName"
                        required
                    />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="SuplierName" className='text-lg font-semibold
                    text-gray-700'>Quantity:</label>
                    <input type="number"
                        ref={quantityRef}
                        className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                        required
                    />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="pdPrice" className='text-lg font-semibold
                    text-gray-700'>Price:</label>
                    <input type="number"
                        ref={priceRef}
                        className="form-control block
                        w-full
                        mt-1
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="pdPrice"
                        required
                    />
                </div>

                <div className="form-group mb-6">
                    <label htmlFor="Description" className='text-lg font-semibold
                    text-gray-700'>Description:</label>
                    <textarea
                        ref={descriptionRef}
                        className="form-control
                        block
                        w-full
                        mt-1
                        px-3
                        py-1.5
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
                        id="Description"
                        rows="3"
                        required
                    ></textarea>
                </div>
                <button type="submit"
                    className="
                    ml-auto
                    block
                    px-12
                    py-3
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out"
                >Add Item</button>
            </form>
        </div>
    );
};

export default AddItems;