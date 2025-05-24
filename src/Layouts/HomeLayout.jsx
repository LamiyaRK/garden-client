import React, { use } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet,  useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';
import Loader from '../Components/Loader';

const HomeLayout = () => {
 const {theme}=use(AuthContext)
 const {state}=useNavigation()
    return (
        <div className={`${theme==1?'bg-black':'bg-white'}`}>
            <Navbar ></Navbar>
        {state=='loading' ?<Loader></Loader>:<Outlet></Outlet>}   
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default HomeLayout;