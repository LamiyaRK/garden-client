import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterH1 = ({ words }) => {
  return (
    <h1 className="text-3xl font-bold text-center">
      <Typewriter
        words={words}
        loop
       
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
  );
};

export default TypewriterH1;