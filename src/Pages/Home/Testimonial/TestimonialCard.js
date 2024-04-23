import React from 'react';

const TestimonialCard = ({peopleSay}) => {
    const {description, img, name, address} = peopleSay;
    return (
        <div>
            <div className="rounded-lg border-none border-gray-100 p-4 shadow-sm transition hover:shadow-2xl sm:p-6">
        <div className="mt-4 text-gray-500 sm:pr-8">
          <p className="mt-2 text-sm sm:block">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <div>
            <img
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full ring ring-primary"
              src={img}
              alt=""
            />
          </div>
          <div>
            <p className=" text-xl font-bold text-gray-900">{name}</p>
            <p className="text-base">{address}</p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default TestimonialCard;