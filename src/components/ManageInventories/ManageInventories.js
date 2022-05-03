import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ManageInventories = () => {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col md:flex-row'>
            <div className='w-48 pt-4'>
                <button onClick={() => navigate('/manageinventories/allitems')} type="button" className="block font-bold px-6 py-2.5 bg-transparent text-blue-600 text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out">Manage Inventories</button>
                <button onClick={() => navigate('/manageinventories/additems')} type="button" className="block px-6 py-2.5 bg-transparent text-blue-600 font-bold text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out">Add items</button>
            </div>
            <div className="flex-grow">
                <Outlet />
            </div>

        </div>
    );
};

export default ManageInventories;