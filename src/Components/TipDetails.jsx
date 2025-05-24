import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router';

const TipDetails = () => {
    const data=useLoaderData()
   const {_id,title,type,difficulty,description,image,category,name,totalLiked}=data
   const [like,setLike]=useState(totalLiked||0)
   const handleLikes=()=>{
    fetch(`http://localhost:3000/sharedtips/${_id}`,{
      method:'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
         totalLiked:(totalLiked||0)+1
      })
    }).then(res=>res.json()).then(data=>setLike(like+1))
    .catch(err=>{
      console.log(err)
    })

   }
    return (
        <div className='mx-auto w-5/6 bg-green-50 p-10 border-2 border-green-400 rounded-3xl my-[80px] shadow-2xl shadow-green-100'>
        <div className='flex justify-around items-center gap-5'>
            <div className='w-1/2'>
                <img src={image} className='h-[500px] rounded-3xl'></img>
            </div>
            <div className='w-1/2 space-y-3'>
                  <p className='text-3xl font-semibold text-[#0B3D2C] mb-6'>{title}</p>
                    <p className='text-lg text-green-800 font-medium'><span className='text-xl font-semibold text-[#0B3D2C]'>Plant Type/Topic: </span>{type}</p>
                      <p className='text-lg text-green-800 font-medium'><span className='text-xl font-semibold text-[#0B3D2C]'>Difficulty Level: </span>{difficulty}</p>
                        <p className='text-lg text-green-800 font-medium'><span className='text-xl font-semibold text-[#0B3D2C]'>Description: </span>{description}</p>
                          <p className='text-lg text-green-800 font-medium'><span className='text-xl font-semibold text-[#0B3D2C]'>Category: </span>{category}</p>
                            <p className='text-lg text-green-800 font-medium'><span className='text-xl font-semibold text-[#0B3D2C]'>Shared By: </span>{name}</p>
                            <p className='text-lg text-green-800 font-medium'><span className='text-xl font-semibold text-[#0B3D2C]'>Total likes:</span>{like}</p>
                            <button className='btn bg-green-950 border-green-400 border-2 text-white' onClick={handleLikes}><FaThumbsUp size={24}/></button>
            </div>
        </div>
        </div>
    );
};

export default TipDetails;