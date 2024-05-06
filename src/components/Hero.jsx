import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          FINANCIAL FREEDOM THROUGH BINARY OPTIONS TRADING
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>        
          Unlock Your Financial Potential.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for{' '}
            <Typed
              strings={['Binary Options Trading', 'Financial Freedom Services']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Empowering you to achieve financial independence through binary options trading and personalized financial freedom services.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
