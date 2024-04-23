import React from "react";

const ServicesCard = ({ service }) => {
  const { icon, title, des } = service;
  return (
    <div>
      <div className="rounded-md shadow-md">
        <div className="flex justify-center">
        <img
          src={icon}
          alt=""
          className=""
        />
        </div>
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="font-semibold tracking-wide text-xl text-accent">
              {title}
            </h2>
            <p className="text-base text-accent">
              {des}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
