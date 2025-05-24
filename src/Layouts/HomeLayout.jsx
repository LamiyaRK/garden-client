import React, { use, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';

const HomeLayout = () => {
const [theme,setTheme]=useState(false)
console.log(theme)
    return (
        <div className={`${theme==1?'bg-black':'bg-white'}`}>
            <Navbar theme={theme} setTheme={setTheme}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default HomeLayout;