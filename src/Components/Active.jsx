import React, {  useEffect, useState } from 'react';
import ActiveUsers from './ActiveUsers';
import logo from '/llogo.jpg'
import { Typewriter } from 'react-simple-typewriter';
import TypewriterH1 from './TypeWriterH1';
const Active = () => {
    const [activeUsers,setActiveUsers]=useState([])
    useEffect(()=>{
 fetch('http://localhost:3000/gardeners')
    .then(res=>res.json())
    .then(data=>{
         const acUsers=data.filter(ac=>ac.status==='active')
       setActiveUsers(acUsers)
    })
  },[])
    
   
    return (
        <div className='w-5/6 mx-auto  mt-[150px]'>
        <div className='flex items-center justify-center'>
            <p className='badge text-xl bg-[#2A7D2E] h-12 rounded-3xl text-white text-center'> Meet Our Active Gardeners</p>
            <img src={logo} className='h-[80px]  '></img>
        </div>
    <h1 className='text-5xl text-[#0B3D2C] font-bold mb-5 text-center'>  <TypewriterH1 words={['Nurturing Green Dreams, One Plant at a Time']}/> </h1>
        <p className='text-lg text-gray-500 font-medium w-[80%] mx-auto text-center'> Discover some of the most engaged members of our gardening community. These passionate individuals regularly share tips, attend events, and inspire others with their experience in balcony gardens, composting, hydroponics, and more.

</p>
        <div className=' grid grid-cols-3 gap-7 mt-[50px]'>
            {
                activeUsers.map(ac=><ActiveUsers key={ac.id} ac={ac}></ActiveUsers>)
            }
        </div>
        </div>
    );
};

export default Active;