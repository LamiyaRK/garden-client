import React from 'react';
import Slides from './Slides';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { SwiperSlide,Swiper } from 'swiper/react';
import 'swiper/css';
const Banner = () => {

  const data = [
  {
    id: 1,
    title: "Community Composting 101",
    description: "Learn how to turn your kitchen scraps into gold for your garden. Perfect for beginners!",
    date: "2025-06-05",
    time: "10:00 AM - 12:00 PM",
    location: "Urban Garden Center, Brooklyn, NY",
    image: "/1.jpg",
    ctaText: "Register for Composting"
  },
  {
    id: 2,
    title: "Balcony Gardening for Beginners",
    description: "Discover the best plants, pots, and layout tips to make your balcony lush and functional.",
    date: "2025-06-12",
    time: "4:00 PM - 6:00 PM",
    location: "GreenNest Studio, Austin, TX",
    image: "/2.jpg",
    ctaText: "Join the Balcony Workshop"
  },
  {
    id: 3,
    title: "Elegant Herb Garden Workshop",
    description: "Plant your own herbs and learn to care for them the elegant way. Includes DIY planter kits.",
    date: "2025-06-18",
    time: "2:00 PM - 4:00 PM",
    location: "Willow & Sage Farm, Portland, OR",
    image: "/3.jpg",
    ctaText: "Reserve Your Spot"
  },
  {
    id: 4,
    title: "Hydroponics for Small Spaces",
    description: "A hands-on session on setting up your first indoor hydroponic system with easy-to-find materials.",
    date: "2025-06-22",
    time: "11:00 AM - 1:00 PM",
    location: "The Plant Lab, San Diego, CA",
    image: "/4.jpg",
    ctaText: "Join Hydroponics Demo"
  }
];




    return (
         <div className='w-5/6    mx-auto my-10'>
     <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000,     
         
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className='rounded-lg'
      >
      {data.map(da=>
        <SwiperSlide>
         <Slides  alt={`Slide ${da.id}`} da={da} className='rounded-lg ' />
         
        </SwiperSlide>
    )}
      </Swiper>
    </div>
  


    );
};

export default Banner;