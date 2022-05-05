import React from 'react';
import { FaFacebookF, FaHome } from 'react-icons/fa';
import { ImLinkedin2 } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { AiOutlineTwitter, AiOutlineGoogle } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
            <div className='border-b border-t border-gray-300 flex justify-center'>
                <div className="container flex justify-center items-center lg:justify-between py-4 px-6 ">
                    <div className="mr-12 hidden lg:block">
                        <span className='text-2xl font-semibold'>Laptop Stockroom</span>
                    </div>
                    <div className="flex justify-center">
                        <a href="https://www.facebook.com/Dr.ForhadHasan/" rel='noreferrer' target={'_blank'} className="mr-6 text-gray-600 text-xl hover:bg-slate-500 p-3 rounded-full hover:text-white duration-500">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.facebook.com/Dr.ForhadHasan/" rel='noreferrer' target={'_blank'} className="mr-6 text-gray-600 text-xl hover:bg-slate-500 p-3 rounded-full hover:text-white duration-500">
                            <AiOutlineTwitter />
                        </a>
                        <a href="https://www.facebook.com/Dr.ForhadHasan/" rel='noreferrer' target={'_blank'} className="mr-6 text-gray-600 text-xl hover:bg-slate-500 p-3 rounded-full hover:text-white duration-500">
                            <AiOutlineGoogle />
                        </a>
                        <a href="https://www.linkedin.com/in/md-forhad-mia-94b9781b6/" rel='noreferrer' target={'_blank'} className="mr-6 text-gray-600 text-xl hover:bg-slate-500 p-3 rounded-full hover:text-white duration-500">
                            <ImLinkedin2 />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mx-8 py-10 text-center md:text-left">
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
                            Best Dealer
                        </h6>
                        <p>
                            Feel free to contact us, We help you to create a bestt deal with us. Thanks
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Contact
                        </h6>
                        <div>
                            <p className="flex items-center justify-start mb-4">
                                <FaHome className='mr-4 text-xl' />
                                Rangpur, Bangladesh
                            </p>
                            <p className="flex items-center justify-start mb-4">
                                <GrMail className='mr-4 text-xl' />
                                forhad8613@gmail.com
                            </p>
                            <p className="flex items-center justify-start mb-4">
                                <BsFillTelephoneFill className='mr-4 text-xl' />
                                + 01717 - 000000
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center p-6 bg-gray-200">
                <span>&copy; 2022 Copyright:</span>
                <a className="text-gray-600 font-semibold" href="https://tailwind-elements.com/">Laptop Stockroom</a>
            </div>
        </footer>
    );
};

export default Footer;