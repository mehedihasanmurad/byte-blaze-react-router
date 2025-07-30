import React from 'react';
import { Link } from 'react-router';

const EmptyBookmark = ({message,address,label}) => {
    return (
        <div className='flex flex-col justify-center items-center pb-16 gap-4 min-h-[calc(100vh-117px)]'>
            <p className='text-2xl font-bold'>{message}</p>
            <Link to={address} className="relative inline-block px-4 py-2 font-medium group mr-2">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                <span className="relative text-black group-hover:text-white">{label}</span>
            </Link>
        </div>
    );
};

export default EmptyBookmark;