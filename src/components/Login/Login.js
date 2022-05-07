import React, { useEffect, useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import PageTitle from '../PageTitle/PageTitle';
import Spinner from '../Spinner/Spinner';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user)

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const emailRef = useRef()
    const passwordRef = useRef()
    const handleLogin = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password)
    }


    if (token) {
        navigate(from, { replace: true });
    }

    useEffect(() => {
        if (error) {
            if (error.code === 'auth/wrong-password') {
                setErrorMsg("Incorrect password")
            } else if (error.code === 'auth/user-not-found') {
                setErrorMsg("User not found,Check email please!!")
            }
        }
    }, [error])

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (!email) {
            toast.error('Enter an email please!')
        } else {
            await sendPasswordResetEmail(email)
            toast.success('Password reset email sent!')
        }

    }


    return (loading ? <Spinner /> :
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mt-10 mx-auto">
            <PageTitle title={'Login-Laptop Stockroom'} />
            <form onSubmit={handleLogin}>
                <h2 className='text-center text-sky-500 text-4xl font-semibold mb-6'>Login</h2>
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
                <div className="flex justify-center items-center mb-6">
                    <button onClick={handleResetPassword} type="button" className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-md leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out">Forget Password?</button>
                </div>
                <p className='text-center text-red-500 mb-2'>{errorMsg}</p>
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
                    Sign in</button>
                <p className="text-gray-800 mt-6 text-center">Not a member? <Link to="/register"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</Link>
                </p>
            </form>
            <GoogleSignIn />
        </div>
    );
};

export default Login;