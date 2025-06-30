import React from 'react';
import UserReview from './UserReview';
import logo from '/llogo.jpg'
const Review = () => {
    const data = [
  
  { id:1,
    name: "John Doe",
    profile: "/beda.jpg",
    rating: 4,
    comment: "Great community and very helpful advice. Would love to see more tips on indoor plants.",
    date: "2025-04-15"
  },
  {id:2,
    name: "Ayesha Rahman",
    profile: "/woman.jpg",
    rating: 5,
    comment: "User-friendly platform and the gardeners are super supportive!",
    date: "2025-03-10"
  },
  {id:3,
    name: "Rahim Uddin",
    profile: "/man.jpg",
    rating: 3,
    comment: "It's good, but I faced some issues uploading images.",
    date: "2025-05-01"
  }
];

    return (
        <div>
              <div className='w-11/12 mx-auto my-[100px] text-center'>
              <div className='flex items-center justify-center'>
                          <p className='badge text-base bg-[#2A7D2E] h-8 rounded-3xl text-white text-center'> Testimonials 🌱</p>
                         
                      </div>
            <h1 className='text-3xl text-[#0B3D2C] font-bold mb-5 text-center'>Customer Reviews</h1>
            <p className='text-lg text-gray-500 font-medium w-[80%] mx-auto text-center'>See what your customers are saying about their billing experience. Gather insights, build trust, and improve your service with real-time feedback and ratings.</p>
       
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-10 mt-40'>
          {
            data.map(da=><UserReview key={da.id}  da={da}></UserReview>)
          }  
        </div>
        </div>
        </div>
    );
};

export default Review;