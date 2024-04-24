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
        <div className="hero-content flex-col lg:flex-row md:px-5 xl:px-32 relative">
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
