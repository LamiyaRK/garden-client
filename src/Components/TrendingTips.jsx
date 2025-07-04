import React, { useEffect, useState } from 'react';
import TipDetails from './TipDetails';
import TrendingTipdet from './TrendingTipdet';
import logo from '/llogo.jpg'
import { Fade } from 'react-awesome-reveal';
const TrendingTips = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://garden-server-beta.vercel.app/sharedtips/sorted/sortedlist/arr')
        .then(res=>res.json())
        .then(dat=>{
            setData(dat)
        })
    },[])
    //console.log(data)
    return (
        <div className='my-[100px]'>
            <div className='flex items-center justify-center  '>
                        <p className='badge text-base bg-[#2A7D2E] h-8 rounded-3xl text-white text-center'> Trending Tips 🌱</p>
                      
                    </div>
         <Fade cascade>
        <div className='mx-auto w-5/6  grid  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[40px]'>
            {
                data.map(da=><TrendingTipdet da={da}></TrendingTipdet>)
            }
            
        </div>
        </Fade>
        </div>
    );
};

export default TrendingTips;