import React from 'react';

const Review = () => {
    const data = [
  {
    name: "Lamiya Akter",
    profile: "https://i.ibb.co/example/lamiya.jpg",
    rating: 5,
    comment: "Absolutely love the tips shared here! My garden has never looked better.",
    date: "2025-05-20"
  },
  {
    name: "John Doe",
    profile: "https://i.ibb.co/example/john.jpg",
    rating: 4,
    comment: "Great community and very helpful advice. Would love to see more tips on indoor plants.",
    date: "2025-04-15"
  },
  {
    name: "Ayesha Rahman",
    profile: "https://i.ibb.co/example/ayesha.jpg",
    rating: 5,
    comment: "User-friendly platform and the gardeners are super supportive!",
    date: "2025-03-10"
  },
  {
    name: "Rahim Uddin",
    profile: "https://i.ibb.co/example/rahim.jpg",
    rating: 3,
    comment: "It's good, but I faced some issues uploading images.",
    date: "2025-05-01"
  }
];

    return (
        <div>
              <div className='w-11/12 mx-auto mt-[100px] text-center'>
            <h1 className='text-4xl font-bold mb-5'>Customer Reviews</h1>
            <p className='text-xl font-semibold'>See what your customers are saying about their billing experience. Gather insights, build trust, and improve your service with real-time feedback and ratings.</p>
       
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