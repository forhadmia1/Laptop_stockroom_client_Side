import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaBars } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
        navigate('/')
    }

    return (
        <div className='sticky-top'>
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
                        <ul className="navbar-nav flex flex-col pl-2 list-style-none ml-auto md:items-center">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item pr-2">
                                <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/blogs">Blogs</Link>
                            </li>
                            {!user ?
                                <li className="nav-item pr-2">
                                    <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/login">Login</Link>
                                </li> :
                                <>
                                    <li className="nav-item pr-2">
                                        <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/manageinventories">Manage Items</Link>
                                    </li>
                                    <li className="nav-item pr-2">
                                        <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/myitems">My Items</Link>
                                    </li>
                                    <li className="nav-item pr-2">
                                        <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/additem">Add Items</Link>
                                    </li>
                                    <li className="nav-item pr-2">
                                        <button onClick={handleSignOut} type="button" className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">SignOut</button>
                                    </li>
                                </>
                            }
                        </ul>
                        {/* Left links end*/}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;