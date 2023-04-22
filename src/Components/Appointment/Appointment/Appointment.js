import React from 'react';
import Navigation from '../../Home/Shared/Navigation';
import AppointmentHeader from './AppointmentHeader';
import AvailableAppointment from './AvailableAppointment';
import Footer from '../../Home/Shared/Footer';


const Appointment = () => {
    // const currentDate = new Date();

    // const year = currentDate.getFullYear();
    // const month = currentDate.getMonth()+1;
    // const day = currentDate.getDate();
    // const formattedDate = `${month}/${day}/${year}`;
      const newDate  = new Date();
    
        const [date, setDate] = React.useState(newDate);
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;
