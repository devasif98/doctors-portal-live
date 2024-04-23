import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import icon1 from '../../../assets/icons/clock.svg'
import icon2 from '../../../assets/icons/marker.svg'
import icon3 from '../../../assets/icons/phone.svg'

const CardsInfo = () => {
    const cardData =[
        {
            id: 1,
            icon: icon1,
            title: "Opening Hours",
            describe:"opening at 8.00am to 10.00pm",
            bgClass: "bg-gradient-to-r from-primary to-secondary"
        },
        {
            id: 2,
            icon: icon2,
            title: "Visit our location",
            describe:"Brooklyn, NY 10036, United States",
            bgClass: "bg-accent"
        },
        {
            id: 3,
            icon: icon3,
            title: "Contact us now",
            describe:"+000 123 456789",
            bgClass: "bg-gradient-to-r from-primary to-secondary"
        },
    ]
    return (
        <div>
            <div className='conatainer mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    cardData.map(card =>(
                        <CardInfo
                        key={card.id}
                        card={card}
                        ></CardInfo>
                    ))
                }
            
            </div>
        </div>
    );
};

export default CardsInfo;