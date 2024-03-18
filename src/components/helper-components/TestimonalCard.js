import React from 'react';

const TestimonialCard = ({ profileImg, name, title, quote }) => {
  return (
    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
      <div className="w-full flex mb-4 items-center">
        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
          <img src={profileImg} alt="" />
        </div>
        <div className="flex-grow pl-3">
          <h6 className="font-bold text-sm uppercase text-gray-600">{name}</h6>
        </div>
      </div>
      <div className="w-full space-y-5">
        <p className='font-bold'>{title}</p>
        <p className='text-sm'>{quote}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;