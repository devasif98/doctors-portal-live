import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col md:flex-row-reverse lg:gap-32 lg:py-60 lg:px-40">
          <div className="lg:w-1/2 mx-5 lg:mx-0">
            <img src={chair} alt="" />
          </div>

          <div className="">
            <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            ></DayPicker>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
