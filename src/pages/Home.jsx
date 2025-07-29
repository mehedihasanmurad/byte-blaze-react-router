import React from 'react';
import Banner from '../components/Banner/Banner';
import wave from '../assets/wave.svg'

const Home = () => {
    return (
        <div className='flex relative flex-col justify-center items-center min-h-[calc(100vh-117px)]'>
            {/* banner part */}
            <Banner></Banner>
            <img className='w-full absolute bottom-0' src={wave} alt="" />
        </div>
    );
};

export default Home;