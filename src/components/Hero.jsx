import React from 'react';
import Typed from 'react-typed';

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">DEVELOPING SCALEABLE SOFTWARE</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold py-6">Building to ship</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Enterprise Software</p>
          <Typed className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2" strings={['BUSINESS', 'TECH', 'FINANCE']} typeSpeed={120} backSpeed={140} loop />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 p-5">Taking your business fast to the market !</p>
        <button type="button" className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black ">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;