import React from 'react';

const Gardener = ({ac}) => {
    const {name,age,gender,status,experiences,image,totalSharedTips,bio,yearsOfExperience}=ac




    return (
        <div>
            <div class="card bg-white  shadow-sm">
  <figure>
    <img src={image} className='h-[400px] w-full object-cover object-top'/>
  </figure>
  <div class="card-body text-green-800 text-base">
 <div className='flex gap-2'>  <span className={`badge badge-soft ${status=='active'?"badge-success":"badge-error"}`}>{status}</span>
  <span className='badge badge-info badge-soft'>{yearsOfExperience}+years of experience</span>
  </div>
    <h2 class="card-title text-green-950">{name}</h2>
    <p>{bio}</p>
      <p><span className='text-green-950 font-medium'>Age:</span> {age}</p>
        <p><span className='text-green-950 font-medium'>Gender:</span> {gender}</p>
        <p className='flex flex-col xl:flex-row gap-2 xl:gap-1 xl:items-center '><span className='text-green-950 font-medium'>Experiences: </span>
        {
            experiences.map(exp=><span className='badge badge-accent badge-soft '>{exp}</span>)
        }
        </p>
    <p><span className='text-green-950 font-medium'>Total Shared Tips: </span>{totalSharedTips}</p>
  </div>
</div>
        </div>
    );
};

export default Gardener;