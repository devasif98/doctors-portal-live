import { format } from "date-fns";
import React, { useContext } from "react";
import Swal from 'sweetalert2';
import { AuthContext } from "../../../Context/AuthProvider";
import './booking.css'

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const date = format(selectedDate, "PP");
  const { name, slots } = treatment;
  const {user} = useContext(AuthContext)

  const handleData = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const names = form.names.value;
    const email = form.email.value;
    const phone = form.phone.value;
  
    if (!user) {
      Swal.fire({
        icon: 'info',
        title: 'You must log in first',
        showConfirmButton: false,
        timer: 2000,
        footer: '<a id="loginButton" href="/login">Login</a>'
      });
      return;
    }
    
  
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: names,
      slot,
      email,
      phone,
    };
  
    fetch("https://doctors-portal-server23.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
  
        if (data.acknowledged) {
          setTreatment(null);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Booking",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        } else {
          alert("already booked");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error, perhaps show an alert
      });
  
    setTreatment(null);
  };
  
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleData}>
            <div>
              <div className="relative mt-1">
                <input
                  type=""
                  disabled
                  id="date"
                  className="bg-slate-200 w-full rounded-lg font-bold p-4 pr-12 text-sm shadow-sm"
                  placeholder="Data"
                  value={date}
                  name="date"
                />
              </div>
            </div>

            <div>
              <select
                className="select select-bordered w-full mt-1"
                name="slot"
              >
                {slots.map((slot, i) => (
                  <option value={slot} key={i}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <div className="relative mt-1">
                <input
                  type="text"
                  id=" name"
                  defaultValue={user?.displayName}
                  disabled
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  
                  name="names"
                />
              </div>
            </div>
            <div>
              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  defaultValue={user?.email}
                  disabled
                  name="email"
                />
              </div>
            </div>
            <div>
              <div className="relative mt-1">
                <input
                  type="phone"
                  id="phone"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="phone"
                />
              </div>
            </div>
            <button
              type="submit"
              className="block w-full rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
