import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate()
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [errormsg, setErrormsg] = useState('')

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if (password !== confirmPassword) {
            return setErrormsg('Password didnt match!!')
        }
        await createUserWithEmailAndPassword(email, password)
        updateProfile({ displayName: name })
    }
    if (user) {
        navigate('/')
    }

    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mt-10 mx-auto">
            <form onSubmit={handleRegister}>
                <h2 className='text-center text-sky-500 text-4xl font-semibold mb-6'>Register</h2>
                <div className="form-group mb-6">
                    <label htmlFor="exampleInputName" className="form-label inline-block mb-2 text-gray-700">Name</label>
                    <input type="text"
                        ref={nameRef}
                        className="form-control
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputName" placeholder="Enter name" required />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                    <input type="email"
                        ref={emailRef}
                        className="form-control
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
                        aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Password</label>
                    <input type="password"
                        ref={passwordRef}
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                        placeholder="Password" required />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="exampleInputConfirmPassword" className="form-label inline-block mb-2 text-gray-700">Confirm Password</label>
                    <input type="password"
                        ref={confirmPasswordRef}
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputConfirmPassword"
                        placeholder="Confirm Password" required />
                </div>
                <p className='text-red-600 text-center mb-3'><small>{errormsg}</small></p>
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
            <GoogleSignIn />
        </div>
    );
};

export default Register;