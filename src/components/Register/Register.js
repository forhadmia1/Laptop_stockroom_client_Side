import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mt-10 mx-auto">
            <form>
                <h2 className='text-center text-sky-500 text-4xl font-semibold mb-6'>Register</h2>
                <div className="form-group mb-6">
                    <label for="exampleInputName" className="form-label inline-block mb-2 text-gray-700">Name</label>
                    <input type="text" className="form-control
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputName" placeholder="Enter name" />
                </div>
                <div className="form-group mb-6">
                    <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                    <input type="email" className="form-control
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                        aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group mb-6">
                    <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Password</label>
                    <input type="password" className="form-control block
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                        placeholder="Password" />
                </div>
                <div className="form-group mb-6">
                    <label for="exampleInputConfirmPassword" className="form-label inline-block mb-2 text-gray-700">Password</label>
                    <input type="password" className="form-control block
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputConfirmPassword"
                        placeholder="Confirm Password" />
                </div>
                <button type="submit" className="
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
                >
                    Register</button>
                <p className="text-gray-800 mt-6 text-center">Already have an account? <Link to="/login"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;