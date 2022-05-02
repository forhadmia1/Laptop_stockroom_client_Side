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
        axios.post('http://localhost:5000/inventory/additem', newItem)
            .then(function (response) {
                e.target.reset();
                toast('hello')
                console.log(response);
            })

    }

    return (
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
            <h1 className='text-center text-2xl font-semibold mb-8'>Add product details here</h1>
            <form onSubmit={handleAddItem}>
                <div class="form-group mb-6">
                    <input type="text"
                        ref={nameRef}
                        class="form-control block
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
                        placeholder="Name"
                        required
                    />
                </div>
                <div class="form-group mb-6">
                    <input type="text"
                        ref={imageRef}
                        class="form-control block
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
                        placeholder="Image url"
                        required
                    />
                </div>
                <div class="form-group mb-6">
                    <input type="text"
                        ref={suplierNameRef}
                        class="form-control block
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
                        placeholder="Suplier Name"
                        required
                    />
                </div>
                <div class="form-group mb-6">
                    <input type="number"
                        ref={quantityRef}
                        class="form-control block
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
                        placeholder="Quantity"
                        required
                    />
                </div>
                <div class="form-group mb-6">
                    <input type="number"
                        ref={priceRef}
                        class="form-control block
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
                        placeholder="Price"
                        required
                    />
                </div>

                <div class="form-group mb-6">
                    <textarea
                        ref={descriptionRef}
                        class="form-control
                        block
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        id="exampleFormControlTextarea13"
                        rows="3"
                        placeholder="Description"
                        required
                    ></textarea>
                </div>
                <button type="submit"
                    class="
                    w-full
                    px-6
                    py-2.5
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