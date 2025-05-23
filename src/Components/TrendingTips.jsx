import React, { useEffect, useState } from 'react';
import TipDetails from './TipDetails';
import TrendingTipdet from './TrendingTipdet';
import logo from '/llogo.jpg'
import { Fade } from 'react-awesome-reveal';
const TrendingTips = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/sharedtips/sorted/sortedlist/arr')
        .then(res=>res.json())
        .then(dat=>{
            setData(dat)
        })
    },[])
    console.log(data)
    return (
        <div className='my-[100px]'>
            <div className='flex items-center justify-center  '>
                        <p className='badge text-xl bg-[#2A7D2E] h-12 rounded-3xl text-white text-center'> Trending Tips</p>
                        <img src={logo} className='h-[80px]  '></img>
                    </div>
         <Fade cascade>
        <div className='mx-auto w-5/6  grid grid-cols-3 gap-5 mt-[40px]'>
            {
                data.map(da=><TrendingTipdet da={da}></TrendingTipdet>)
            }
            
        </div>
        </Fade>
        </div>
    );
};

export default TrendingTips;