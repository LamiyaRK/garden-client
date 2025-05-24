import React from 'react';

import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
      <Link to='/'> <button className='btn bg-green-950 text-white m-10'><IoMdArrowBack /> Back to home </button></Link> 
            <img src='/error.jpg' className='max-h-screen mx-auto'></img>
            
        </div>
    );
};

export default Error;