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
            Oral health is a key indicator of overall health, well-being and quality of life. It encompasses a range of diseases and conditions that include dental caries, Periodontal disease, Tooth loss, Oral cancer, Oral manifestations of HIV infection, Oro-dental trauma, Noma and birth defects such as cleft lip and palate.
            </p>
            <button className="btn bg-gradient border-none text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
