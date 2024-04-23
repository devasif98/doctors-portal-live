import React from "react";
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import 'animate.css';

const Description = () => {
  return (
    <div className="lg:px-40 mt-14 lg:my-40">
      <div className="lg:flex items-center bg-base-100 gap-24">
        <div className="lg:w-1/2 flex justify-center">
          <img className="rounded-lg" src={treatment} alt="Album" />
        </div>
        <div className=" lg:w-1/2 mt-9 lg:mt-0">
          <h2 className="card-title text-[#3A4256] text-5xl font-bold animate__animated animate__fadeInRight">Exceptional Dental Care, on Your Terms</h2>
          <p className="text-base text-[#3A4256] mt-6 animate__animated animate__fadeInUp">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
          <div className="card-actions mt-11">
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
