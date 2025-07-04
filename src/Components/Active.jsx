import React, {  useEffect, useState } from 'react';
import ActiveUsers from './ActiveUsers';
import logo from '/llogo.jpg'
import { Typewriter } from 'react-simple-typewriter';
import TypewriterH1 from './TypeWriterH1';
const Active = () => {
    const [activeUsers,setActiveUsers]=useState([])
    useEffect(()=>{
 fetch('https://garden-server-beta.vercel.app/gardeners')
    .then(res=>res.json())
    .then(data=>{
         const acUsers=data.filter(ac=>ac.status==='active')
       setActiveUsers(acUsers)
    })
  },[])
    
   
    return (
        <div className='w-5/6 mx-auto  mt-[80px]'>
        <div className='flex items-center justify-center'>
            <p className='badge text-base bg-[#2A7D2E] h-8 rounded-3xl text-white text-center'> Meet Our Active Gardeners 🌱</p>
           
        </div>
    <h1 className='text-3xl text-[#0B3D2C] font-bold mb-5 text-center'>  <TypewriterH1 words={['Nurturing Green Dreams, One Plant at a Time']}/> </h1>
        <p className='text text-gray-500 font-medium w-[80%] mx-auto text-center'> Discover some of the most engaged members of our gardening community. These passionate individuals regularly share tips, attend events, and inspire others with their experience in balcony gardens, composting, hydroponics, and more.

</p>
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-[50px]'>
            {
                activeUsers.map(ac=><ActiveUsers key={ac.id} ac={ac}></ActiveUsers>)
            }
        </div>
        </div>
    );
};

export default Active;