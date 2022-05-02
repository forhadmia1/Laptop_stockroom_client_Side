import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation()
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }



    return (
        <div className='mt-4'>
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