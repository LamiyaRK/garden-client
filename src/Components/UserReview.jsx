import React from 'react';
import { FaStar } from 'react-icons/fa';

const UserReview = ({da}) => {
    const {name,profile,rating,date,comment}=da
    return (
          <div
  className="hero text-accent relative h-[250px] rounded-2xl "
  style={{
    backgroundImage:
      "url(grenbg.jpg)",
  }}
> 
<div className="avatar ">
  <div className="w-24 rounded-full absolute  -top-45 -left-15">
    <img src={profile} />
  </div>
</div>
  <div className="hero-overlay "></div>
  <div className="hero-content text-accent text-center">
    <div className="max-w-md flex flex-col relative">
      <h1 className="mb-5  font-bold flex  ">{comment}</h1>
      <p className="mb-5 ">
        {name}
      </p>
      <div className='flex justify-around items-center'>
      <div className='flex items-center'>
      <FaStar size={24} color='yellow' />
      <p className='text-xl font-semibold'>{rating}</p>
      </div>
      <div>
        <button className="badge badge-accent">{date}</button>
      </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default UserReview;