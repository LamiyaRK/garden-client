import React, { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Tips from './Tips';
import logo from '/llogo.jpg'; 
import { AuthContext } from '../Context/AuthContext';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useLoaderData } from 'react-router';
const TipsTable = () => {
  
   const [tips1,setTips1]=useState(useLoaderData())
   const [stored,setStored]=useState([])
   
    const [selected,setSelected]=useState('')
    const handleSort=(e)=>{
    
            const val=e.target.value;
             setSelected(val)
           fetch(`https://garden-server-beta.vercel.app/sharedtips/diff/easy/medium/hard/${val}`)
           .then(res=>res.json())
           .then(data=>{setStored(data)
          console.log(val)}).
         catch(err=>{
          toast(err,{
            theme:'colored',
            type:'error'
          })
         })
            
    }
    return (
        <div className='my-[80px]'>
        <div className="flex items-center justify-center gap-3 mt-6 w-5/6 mx-auto ">
                <p className="badge text-base bg-[#2A7D2E] h-8 rounded-3xl text-white">
                  Browse Tips 🌱
                </p>
               
              </div>
              <div>
          <h1 className='text-3xl text-[#0B3D2C] font-bold mb-5 text-center'>Explore Public Tips</h1>
          <p className="w-[70%] mx-auto text-center mb-6 text-gray-500">
            Discover helpful tips shared publicly by our community. Browse tips by category and click the eye icon to view full details.
</p> 
<div className='flex justify-center mb-8'>
  <select class="select" onChange={handleSort} Value={selected}>
  <option disabled selected>Sort by<MdOutlineKeyboardArrowDown /></option>
  <option>Easy</option>
  <option>Medium</option>
  <option>Hard</option>
</select>
</div>
        </div>
            <div className="overflow-x-auto w-5/6 mx-auto">
  <table className="table bg-green-50 rounded-2xl ">
    {/* head */}
    <thead>
      <tr className='text-xl bg-[#7bdcb5] text-green-950 '>
        <th>Image</th>
        <th>Title</th>
        <th>Category</th>
        <th></th>
       </tr>
    </thead>
    <tbody>
     
      
        {(stored.length > 0 ? stored : tips1).map((tip, index) => (
  <Tips key={index} tip={tip} />
))}
      
      
     
    </tbody>
   
    
  </table>
</div>

        </div>
    );
};

export default TipsTable;