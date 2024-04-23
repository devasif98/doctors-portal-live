import React from "react";
import bannerImg from '../../../assets/images/chair.png';
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <div className="hero py-20 lg:py-56 lg:pr-10 lg:pl-12 bg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="lg:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className='text-5xl font-bold text-[#3A4256]'>Your New Smile Starts Here</h1>
            <p className="py-6 text-[#3A4256] text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            </p>
            <button className="btn bg-gradient border-none text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
