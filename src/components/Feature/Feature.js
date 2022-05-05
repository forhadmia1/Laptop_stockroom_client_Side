import React from 'react';
import { BsGlobe, BsWallet2 } from 'react-icons/bs'
import { MdOutlineLocalShipping } from 'react-icons/md'

const Feature = () => {
    return (
        <div className='my-20 bg-slate-200 py-24'>
            <div className='container mx-auto flex justify-around gap-20 flex-col md:flex-row'>
                <div className='flex flex-col items-center p-4'>
                    <BsGlobe className='text-2xl' />
                    <h2 className='text-xl font-semibold text-slate-700 mt-4'>WORLDWIDE DELIVERY</h2>
                    <p className='text-xs mt-2 text-gray-400 px-16'> We work with the biggest delivery networks. It doesn't matter where in the world you are.</p>
                </div>
                <div className='flex flex-col items-center p-4'>
                    <MdOutlineLocalShipping className='text-2xl' />
                    <h2 className='text-xl font-semibold text-slate-700 mt-4'>FREE SHIPPING</h2>
                    <p className='text-xs mt-2 text-gray-400 px-10'>Stop wondering about shipping costs, what you see is what you pay.</p>
                </div>
                <div className='flex flex-col items-center p-4'>
                    <BsWallet2 className='text-2xl' />
                    <h2 className='text-xl font-semibold text-slate-700 mt-4'>MONEY BACK GUARANTEE</h2>
                    <p className='text-xs mt-2 text-gray-400 px-10'>Got a problem with the product? Don't worry, we have a 30 day money back guarantee.</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;