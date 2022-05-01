import React from 'react';
import { FaFacebookF, FaHome } from 'react-icons/fa';
import { ImLinkedin2 } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { AiOutlineTwitter, AiOutlineGoogle } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
            <div className='border-b border-gray-300 flex justify-center'>
                <div className="container flex justify-center items-center lg:justify-between p-6 ">
                    <div className="mr-12 hidden lg:block">
                        <span className='text-2xl font-semibold'>Laptop Stockroom</span>
                    </div>
                    <div className="flex justify-center">
                        <a href="#!" className="mr-6 text-gray-600">
                            <FaFacebookF />
                        </a>
                        <a href="#!" className="mr-6 text-gray-600">
                            <AiOutlineTwitter />
                        </a>
                        <a href="#!" className="mr-6 text-gray-600">
                            <AiOutlineGoogle />
                        </a>
                        <a href="#!" className="mr-6 text-gray-600">
                            <ImLinkedin2 />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="container px-6 flex justify-between flex-col md:flex-row gap-8">
                    <div className="">
                        <h6 className="
                            uppercase
                            font-semibold
                            mb-4
                            flex
                            items-center
                            justify-center
                            md:justify-start
                        ">
                            Tailwind ELEMENTS
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your footer content.
                            <br /> Lorem ipsum dolor
                            sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Contact
                        </h6>
                        <div>
                            <p className="flex items-center justify-start mb-4">
                                <FaHome className='mr-4' />
                                New York, NY 10012, US
                            </p>
                            <p className="flex items-center justify-start mb-4">
                                <GrMail className='mr-4' />
                                info@example.com
                            </p>
                            <p className="flex items-center justify-start mb-4">
                                <BsFillTelephoneFill className='mr-4' />
                                + 01 234 567 88
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center p-6 bg-gray-200">
                <span>© 2021 Copyright:</span>
                <a className="text-gray-600 font-semibold" href="https://tailwind-elements.com/">Tailwind Elements</a>
            </div>
        </footer>
    );
};

export default Footer;