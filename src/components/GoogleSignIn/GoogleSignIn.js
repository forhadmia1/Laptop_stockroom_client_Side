import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user)
    const location = useLocation()
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div className='mt-4'>
            <div
                class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
            >
                <p class="text-center font-semibold mx-4 mb-0">OR</p>
            </div>
            <button
                onClick={() => signInWithGoogle()}
                type="button"
                className="inline-block w-full py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                <div className='flex justify-center items-center'>
                    <FcGoogle className='mr-10 text-xl' />
                    <p>Sign in with google</p>
                </div>
            </button>
        </div>
    );
};

export default GoogleSignIn;