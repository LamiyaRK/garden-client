import React from 'react';

const ActiveUsers = ({ac}) => {
    const {image,yearsOfExperience,bio,name,totalSharedTips}=ac
    return (
        <div className='bg-green-100 p-5  rounded-2xl pb-5 space-y-3'>
            <div >
                <img src={image} className='h-[200px] w-full  object-top object-cover rounded-xl'></img>
            </div>
            <div>
            <div className='flex gap-2 justify-start'>
               <button className='badge bg-[#2A7D2E] text-white  '>Active</button>
               <button className='badge bg-[#0B3D2C] text-white'>{yearsOfExperience}+ Years Experience</button>
            </div>
            
                <p className='text-xl font-bold text-[#0B3D2C]'>{name}</p>
                <p className='text-sm font-semibold text-[#2A7D2E]'>{bio}</p>
                <p className='text-sm font-semibold text-[#0B3D2C]'>Total Shared Tips: {totalSharedTips}</p>
            </div>
        </div>
    );
};

export default ActiveUsers;