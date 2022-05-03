import React from 'react';
import NotFoundImage from '../../Assets/Image/3747371.jpg'

const NotFound = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <img className='w-8/12' src={NotFoundImage} alt="" />

        </div>
    );
};

export default NotFound;