import React from 'react';

const TrendingTipdet = ({da}) => {
    const {image,description,title,totalLiked,category}=da
    return (
        <div>
        
      <div className="relative ">
  <img src={image} className="h-[300px] w-full object-cover rounded-3xl" alt="" />

 
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />


  <div className="absolute bottom-4 left-4 text-white z-10">
  <p className='badge text-green-950 bg-green-300 font-semibold '>{category}</p>
    <h2 className="text-2xl font-bold">{title}</h2>
    <p className='text-sm'>{description}</p>
    <p className='font-bold'>❤️ {totalLiked}</p>
  </div>
</div> 
        </div>
    );
};

export default TrendingTipdet;