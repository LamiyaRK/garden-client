import React, { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Tips from './Tips';
import logo from '/llogo.jpg'; 
import { AuthContext } from '../Context/AuthContext';
const TipsTable = () => {
   
   const [tips1,setTips1]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/sharedtips').
        then(res=>res.json())
        .then(data=>{
          
            const data1=data.filter(da=>da.availability==='Public')
        
            setTips1(data1)})
        .catch(err=>{
            toast(err,{
                            type:"error",
                            theme:"colored"
                        })
        })
    },[])
    //console.log(tips)
    return (
        <div className='my-[80px]'>
        <div className="flex items-center justify-center gap-3 mt-6 w-5/6 mx-auto ">
                <p className="badge text-lg bg-[#2A7D2E] h-8 rounded-3xl text-white">
                  Browse Tips
                </p>
                <img src={logo} alt="logo" className="h-[60px]" />
              </div>
              <div>
          <h1 className="text-3xl font-bold text-center mb-3">Explore Public Tips</h1>
          <p className="w-[70%] mx-auto text-center mb-6">
            Discover helpful tips shared publicly by our community. Browse tips by category and click the eye icon to view full details.
</p>
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
     
      {
        tips1.map(tip=><Tips tip={tip}></Tips>)
      }
      
     
    </tbody>
   
    
  </table>
</div>

        </div>
    );
};

export default TipsTable;