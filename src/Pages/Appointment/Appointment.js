import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AppointmentBook from "./AppointmentBook";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date ());
  return (
    <div>
      <AppointmentBanner
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      ></AppointmentBanner>
      <AppointmentBook
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      ></AppointmentBook>
    </div>
  );
};

export default Appointment;
