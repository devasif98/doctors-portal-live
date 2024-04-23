import React from "react";

const AppointmentBookCard = ({ bookCard, setTreatment }) => {
  const { name, slots } = bookCard;
  return (
    <div className="flex justify-center">
      <article className="overflow-hidden rounded-lg transition hover:shadow-lg text-center px-10">
        <div className="bg-white p-4 sm:p-6">
          <time className="block text-xl text-secondary font-semibold">
            {name}
          </time>

          <a href="/">
            <p className="mt-0.5 text-sm text-gray-900">
              {slots.length > 0 ? slots[0] : "Try Another Day"}
            </p>
          </a>

          <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp- mb-5">
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(bookCard)}
            htmlFor="booking-modal"
            className="btn bg-gradient-to-r from-primary to-secondary text-white border-none"
          >
            Make Appointment
          </label>
        </div>
      </article>
    </div>
  );
};

export default AppointmentBookCard;
