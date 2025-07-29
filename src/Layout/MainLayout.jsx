import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <div className='h-[65px]'>
                <Navbar></Navbar>
            </div>
            {/* packer */}
            <div className='min-h-[calc(100vh-117px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;