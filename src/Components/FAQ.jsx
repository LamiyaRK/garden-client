import React, { useEffect, useState } from 'react';
import QNA from './QNA';
import TypewriterH1 from './TypeWriterH1';
import logo from '/llogo.jpg'
const FAQ = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('/FAQ.json')
        .then(res=>res.json())
        .then(da=>setData(da))
    },[])
    return (
        <div className='my-[80px] bg-green-50 py-10 rounded-3xl'>
         <div className='flex items-center justify-center'>
                    <p className='badge text-base bg-[#2A7D2E] h-8 rounded-3xl text-white text-center'> Meet Our Active Gardeners 🌱</p>
                    
                </div>
                <h1 className='text-5xl text-[#0B3D2C] font-bold mb-5 text-center'><TypewriterH1 words={['Have any question?']}/></h1>
                <div className='w-5/6 mx-auto'>
            {
                data.map(da=><QNA da={da}></QNA>)
            }
            </div>
        </div>
    );
};

export default FAQ;