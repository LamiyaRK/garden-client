import React from 'react';
import { FaCalendar, FaClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Slides = ({ da }) => {
    const {title,description,image,ctaText,date,time,location}=da
  return (
        <div
  className="hero "
  style={{
    backgroundImage:
      `url(${image})`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="text-center">
      <h1 className="mb-3 text-3xl font-bold">{title}</h1>
      <p className="mb-3 text-base  mx-auto max-w-lg">
      {description}
      </p>
      <p className="mb-3 text-sm flex  items-center justify-center gap-2">
    <FaCalendar/>{date} </p>
    <p className="mb-3 text-sm flex  items-center justify-center gap-2 "><FaClock/>{time}</p>
     
      <p className="mb-3 text-sm flex  items-center justify-center gap-2">
   <FaLocationDot/> {location}
      </p>
     
      <button className="btn bg-[#0B3D2C] text-white border-none">{ctaText}</button>
    </div>
  </div>
</div>

  );
};


export default Slides;