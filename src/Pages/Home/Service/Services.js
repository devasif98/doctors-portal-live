import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServicesCard from './ServicesCard';

const Services = () => {
    const serviceData =[
        {
            id: 1,
            icon: fluoride,
            title: 'Fluoride Treatment',
            des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            icon: cavity,
            title: 'Cavity Filling',
            des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            icon: whitening,
            title: 'Teeth Whitening',
            des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]
    return (
        <div>
            <div className='my-32'>
                <p className='text-center text-primary text-xl'>OUR SERVICES</p>
                <p className='text-center text-accent text-4xl'>Services We Provide</p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    serviceData.map(service=>(
                        <ServicesCard
                        key={service.id}
                        service={service}
                        ></ServicesCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;