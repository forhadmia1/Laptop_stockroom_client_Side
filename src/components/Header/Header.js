import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="
            relative
            w-full
            flex flex-wrap
            items-center
            justify-center
            py-4
            bg-gray-100
            text-gray-500
            hover:text-gray-700
            focus:text-gray-700
            shadow-lg
            navbar navbar-expand-lg navbar-light
        ">
            <div className="container w-full flex flex-wrap items-center justify-between px-6">
                <button className="
                navbar-toggler
                text-gray-500
                border-0
                hover:shadow-none hover:no-underline
                py-2
                px-2.5
                bg-transparent
                focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
                " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars className='text-2xl' />
                </button>
                <Link className="text-xl text-gray-500 font-semibold" to="/">Laptop Stockroom</Link>
                <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                    {/* nav links start */}
                    <ul className="navbar-nav flex flex-col pl-2 list-style-none ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item pr-2">
                            <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item pr-2">
                            <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/login">Login</Link>
                        </li>
                    </ul>
                    {/* Left links end*/}
                </div>
            </div>
        </nav>
    );
};

export default Header;