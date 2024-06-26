import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <div>
      <div
        className="mt-32 container mx-auto"
        style={{
          background: `url(${appointment})`,
        }}
      >
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row lg:px-32">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-lg text-center">
                <h1 className="text-xl font-bold sm:text-3xl text-secondary">
                  Contact Us
                </h1>

                <p className="mt-4 text-white text-4xl">
                  Stay connected with us
                </p>
              </div>

              <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4 border border-primary rounded-xl lg:w-[450px] p-6">
                <div>
                  <label className="sr-only">Email</label>

                  <div className="relative">
                    <input
                      type="email"
                      className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only">Subject</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only">Message</label>
                  <div className="relative">
                    <textarea
                      type="textarea"
                      className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                      placeholder="Your Message....."
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <PrimaryButton>Submit</PrimaryButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
