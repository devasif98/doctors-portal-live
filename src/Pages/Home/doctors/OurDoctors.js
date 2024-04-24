import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, FreeMode } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './OurDoctors.css';

import doc1 from "../../../assets/images/doc1.png";
import doc2 from "../../../assets/images/doc2.png";
import doc3 from "../../../assets/images/doc3.png";
import doc4 from "../../../assets/images/doc4.png";
import doc5 from "../../../assets/images/doc5.png";
import doc6 from "../../../assets/images/doc6.png";

SwiperCore.use([FreeMode, Autoplay]);

const OurDoctors = () => {
    const doctors = [
        {
            "_id": 1,
            "img": doc1,
            "name": "Dr Sumit Agrawal",
            "phone": "01911111111"
        },
        {
            "_id": 2,
            "img": doc2,
            "name": "Dr. Aisha Patel",
            "phone": "01922222222"
        },
        {
            "_id": 3,
            "img": doc3,
            "name": "Dr. Devi Singh",
            "phone": "01933333333"
        },
        {
            "_id": 4,
            "img": doc4,
            "name": "Dr. Malikah Khan",
            "phone": "01944444444"
        },
        {
            "_id": 5,
            "img": doc5,
            "name": "Dr. Vikram Choudhury",
            "phone": "01955555555"
        },
        {
            "_id": 6,
            "img": doc6,
            "name": "Dr. Priya Mehta",
            "phone": "01966666666"
        }
    ];

    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    };

    return (
        <div className='my-24'>
            <div>
                <p className="font-bold text-xl text-primary text-center">Our Doctors</p>
                <p className="text-4xl text-accent text-center">Compassionate, Skilled doctors.</p>
            </div>
            <div className='my-5'>
                <Swiper
                    breakpoints={breakpoints}
                    freeMode={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    {doctors.map(doctor => (
                        <SwiperSlide key={doctor._id}>
                            <div className="doctor-slide">
                                <img src={doctor.img} alt={doctor.name} className="doctor-image w-auto h-[300px] md:h-[250px] xl:h-[400px] mx-auto" />
                                <p className="doctor-name">{doctor.name}</p>
                                <p className="doctor-phone">{doctor.phone}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default OurDoctors;