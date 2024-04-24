import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import AppointmentBookCard from "./AppointmentBookCard";
import BookingModal from "./BookingModal/BookingModal";

const AppointmentBook = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP');
    // console.log(date);

    const {data: appointmentOptions = [], refetch, isLoading } = useQuery({
      queryKey: ['appointmentOptions', date],
      queryFn: async()=>{
        const res = await fetch(`https://doctors-portal-server23.vercel.app/appointmentOptions?date=${date}`);
        const data = await res.json();
        return data
      }
    })
    // const {data:appointmentOptions = []} = useQuery({
    //   queryKey: ['appointmentOptions'],
    //   queryFn: () => fetch('https://doctors-portal-server23.vercel.app/appointmentOptions')
    //   .then(res=> res.json())
    // })\
    if(isLoading){
      return <Loading></Loading>
    }
    
  return (
    <div>
        <div>
        <p className="text-center text-2xl text-secondary  my-5 lg:my-0">Available Appointments on: {format(selectedDate, 'PP')}</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mt-32">
        {
            appointmentOptions.map(bookCard=>(
                <AppointmentBookCard
                key={bookCard._id}
                bookCard={bookCard}
                setTreatment={setTreatment}
                ></AppointmentBookCard>
            ))
        }
      </div>
      {
        treatment &&
        <BookingModal
      treatment={treatment}
      selectedDate={selectedDate}
      setTreatment={setTreatment}
      refetch={refetch}
      ></BookingModal>
      }
    </div>
  );
};

export default AppointmentBook;
