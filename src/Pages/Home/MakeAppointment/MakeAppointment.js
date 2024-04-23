import React from "react";
import doctorImg from "../../../assets/images/doctor-small.png";
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
        <div className="hero-content flex-col lg:flex-row lg:px-32">
          <img
            src={doctorImg}
            className="-mt-32 -mb-4 lg:w-1/2 rounded-lg hidden lg:block"
            alt=""
          />

          <div className="lg:w-1/2">
            <h1 className="text-lg font-bold text-primary">Appointment</h1>
            <h1 className="text-4xl font-semibold text-white lg:text-justify ">
              Make an appointment Today
            </h1>
            <p className="pt-5 pb-3 text-base text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
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
