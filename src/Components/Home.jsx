import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1  className='text-4xl font-bold text-center mt-6 mb-10'>User Management System</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;