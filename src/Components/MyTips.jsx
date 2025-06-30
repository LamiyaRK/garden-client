import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Mytip from './Mytip';
import logo from '/llogo.jpg'; 

const MyTips = () => {
    
   
     const [data,setData]=useState(useLoaderData())
    return (
        <div>
            <div className="overflow-x-auto w-5/6 mx-auto my-[80px]">
             <div className="flex items-center justify-center gap-3 mt-6 w-5/6 mx-auto mb-6 ">
                            <p className="badge text-base bg-[#2A7D2E] h-8 rounded-3xl text-white">
                              My Tips 🌱
                            </p>
                          
                          </div>
            
  <table className="table bg-green-50 rounded-2xl">
    {/* head */}
    <thead>
      <tr className='text-xl bg-[#7bdcb5] text-green-950 '>
        
        <th>Title</th>
        <th>Type</th>
        <th>Availability</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        data.map(da=><Mytip key={da._id} da={da} data={data} setData={setData}></Mytip>)
      }
      
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyTips;