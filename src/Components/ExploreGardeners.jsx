import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import Gardener from './Gardener';
import logo from '/llogo.jpg'
import { AuthContext } from '../Context/AuthContext';
const ExploreGardeners = () => {
    const gardeners=useLoaderData()
    const {theme}=use(AuthContext);
    return (
        <div className={`${theme}?"bg-black": "bg-green-50"`}>
         <div className='w-5/6 mx-auto py-[100px] '>
        <div className='flex items-center justify-center '>
            <p className='badge text-xl bg-[#2A7D2E] h-12 rounded-3xl text-white text-center'> Meet Our  Gardeners</p>
            <img src={logo} className='h-[80px]  '></img>
        </div>
        <h1 className='text-3xl text-[#0B3D2C] font-bold mb-5 text-center'>Nurturing Green Dreams, One Plant at a Time</h1>
        <p className=' text-gray-500 font-medium w-[80%] mx-auto text-center'> Discover passionate gardeners from our community! Each profile showcases their experience, gardening expertise, and the tips they've shared. Learn more about their journey and find inspiration from their green thumbs. 🌱

</p>
        <div className=' grid grid-cols-2 gap-7 mt-[50px]'>
            {
                gardeners.map(ac=><Gardener key={ac._id} ac={ac}></Gardener>)
            }
        </div>
        </div>
        </div>
    );
};

export default ExploreGardeners;