import React from "react";
// people
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";

import quote from "../../../assets/icons/quote.svg";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
    const testimonial = [
        {
            _id: 1,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
            img: people1,
            name: "Winson Herry",
            address: "California"
        },
        {
            _id: 2,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
            img: people2,
            name: "Mia Sophia.",
            address: "America"
        },
        {
            _id: 3,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
            img: people3,
            name: "Ava Olivia",
            address: "California"
        },
    ]
  return (
    <div className="mt-24">
      <div className="flex justify-between">
        <div>
          <p className="font-bold text-xl text-primary">Testimonial</p>
          <p className="text-4xl text-accent">What Our Patients Says</p>
        </div>
        <figure>
          <img className="w-48" src={quote} alt="" />
        </figure>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            testimonial.map(peopleSay=>(
                <TestimonialCard
                key={peopleSay._id}
                peopleSay={peopleSay}
                ></TestimonialCard>
            ))
        }
      </div>
    </div>
  );
};

export default Testimonial;
