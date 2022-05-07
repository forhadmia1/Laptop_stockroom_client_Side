import React from 'react';
import PageTitle from '../PageTitle/PageTitle';

const Blogs = () => {
    return (
        <div className='container mx-auto mt-4'>
            <PageTitle title={'Blogs-Laptop Stockroom'} />
            <div className='p-3'>
                <h1 className='text-xl font-semibold'>1. Difference between javascript and node js?</h1>
                <div className='flex flex-col justify-around md:flex-row mt-4'>
                    <ol className='list-disc p-4'>
                        <h4 className='text-center font-semibold'>Javascript</h4>
                        <li>Javascript is a programming language.</li>
                        <li>Javascript run in browser only.</li>
                        <li>It usually used for client side.</li>
                        <li>Javascript is used in frontend devlopment.</li>
                        <li>Javascript framework is react js.</li>
                    </ol>
                    <ol className='list-disc p-4'>
                        <h4 className='text-center font-semibold'>Node js</h4>
                        <li>Node js is a javascript runtime.</li>
                        <li>Through node js we can run javascript code outside browser.</li>
                        <li>It usually used for server side.</li>
                        <li>Node js is used in backend devlopment.</li>
                        <li>Node js framework is express js.</li>
                    </ol>
                </div>
            </div>
            <div className="p-3">
                <h1 className="text-xl font-semibold">
                    2. What is the purposre of jwt and how does it works?
                </h1>
                <p>
                    jwt is json web token. It is used for secure API for transmitting information between two parties client and server. when the client sign creates a JWT for him and stores it and when a client wants to access any resource the JWTis sent with the rest API and in server verify this JWTs signature, when it matches with its payload and header then give the access otherwise deny the request.
                </p>
            </div>
            <div className='p-3'>
                <h1 className='text-xl font-semibold'>3. Difference between SQL and NoSQL database?</h1>
                <div className='flex flex-col justify-around md:flex-row mt-4'>
                    <ol className='list-disc p-4'>
                        <h4 className='text-center font-semibold'>SQL</h4>
                        <li>SQL is ralational database management system.</li>
                        <li>SQL database have fixed or static or predefined schema.</li>
                        <li>SQL is not suited for fierarchical data storage.</li>
                        <li>SqL is best for complex queries.</li>
                        <li>Example: MySQL</li>
                    </ol>
                    <ol className='list-disc p-4'>
                        <h4 className='text-center font-semibold'>NoSQL</h4>
                        <li>NoSQL is non relational database system.</li>
                        <li>It has dynamic schema</li>
                        <li>The database is best for heirarchical data storage.</li>
                        <li>It is not good for complex queries.</li>
                        <li>Example: MongoDb</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Blogs;