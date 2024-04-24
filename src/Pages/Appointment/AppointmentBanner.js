import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import { startOfMonth, isBefore, isFriday, isSaturday } from 'date-fns';
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  const today = new Date();
  const startOfCurrentMonth = startOfMonth(today);

  const isPastDate = (date) => {
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return isBefore(date, yesterday);
  };

  const handleDateSelect = (date) => {
    if (!isPastDate(date)) {
      setSelectedDate(date);
    }
  };

  const isFridayOrSaturday = (date) => {
    return isFriday(date) || isSaturday(date);
  };

  const disabledDays = (date) => {
    return isPastDate(date);
  };

  const modifiers = {
    past: disabledDays,
    today: today,
    fridayOrSaturday: (date) => !disabledDays(date) && isFridayOrSaturday(date),
  };
  

  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col md:flex-row-reverse lg:gap-32 lg:py-20 lg:px-30">
          <div className="lg:w-1/2 mx-5 lg:mx-0">
            <img src={chair} alt="" />
          </div>

          <div className="">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              fromMonth={startOfCurrentMonth}
              modifiers={modifiers}
              modifiersStyles={{
                past: {
                  color: 'grey'
                },
                fridayOrSaturday: {
                  color: 'red' // Change color for Fridays and Saturdays
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
