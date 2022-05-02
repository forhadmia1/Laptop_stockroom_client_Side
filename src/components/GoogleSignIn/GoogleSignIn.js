import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const GoogleSignIn = () => {
    return (
        <div className='mt-4'>
            <button type="button" class="inline-block w-full py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                <div className='flex justify-center items-center'>
                    <FcGoogle className='mr-10 text-xl' />
                    <p>Sign in with google</p>
                </div>
            </button>
        </div>
    );
};

export default GoogleSignIn;