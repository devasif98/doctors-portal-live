import React from "react";
import doctorImg from "../../../assets/images/ydoctor.png";
import appointment from "../../../assets/images/appointment.png";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <div
      className="mt-32 container mx-auto"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row md:px-5 xl:px-32 py-10 relative">
          <div className="absolute -left-2 xl:left-3 bottom-0">
            <img
              src={doctorImg}
              className="rounded-lg hidden lg:block w-auto"
              alt=""
            />
          </div>
          <div className="lg:w-1/2">

          </div>

          <div className="lg:w-1/2">
            <h1 className="text-lg font-bold text-primary">Appointment</h1>
            <h1 className="text-4xl font-semibold text-white xl:text-justify ">
              Make an appointment Today
            </h1>
            <p className="pt-5 pb-3 text-base text-white mb-5">
            Experience Seamless Scheduling: Book Your Appointment Today! Enjoy Effortless Booking, Tailored Services, and Prompt Confirmations—Start Now!
            </p>
            <Link to={'/appointment'}>
              <PrimaryButton>Make Appointment</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
