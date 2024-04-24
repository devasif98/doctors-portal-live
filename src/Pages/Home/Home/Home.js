import React from 'react';

import Banner from '../Banner/Banner';
import CardsInfo from '../CardsInfo/CardsInfo';
import Contact from '../Contact/Contact';
import Description from '../Description/Description';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Service/Services';
import Testimonial from '../Testimonial/Testimonial';
import OurDoctors from '../doctors/OurDoctors';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className='mx-5'>
            <Helmet>
                <title>Home | Doctors Portal</title>
            </Helmet>
            <Banner></Banner>
            <CardsInfo></CardsInfo>
            <Services></Services>
            <Description></Description>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <OurDoctors />
            <Contact></Contact>

        </div>
    );
};

export default Home;