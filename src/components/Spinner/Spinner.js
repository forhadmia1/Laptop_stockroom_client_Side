import React from 'react';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p className='text-xl ml-4'>Loading...</p>
        </div>
    );
};

export default Spinner;