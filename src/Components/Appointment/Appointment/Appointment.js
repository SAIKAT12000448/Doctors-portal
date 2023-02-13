import React from 'react';
import Navigation from '../../Home/Shared/Navigation';
import AppointmentHeader from './AppointmentHeader';
import AvailableAppointment from './AvailableAppointment';
import dayjs from 'dayjs';
import Footer from '../../Home/Shared/Footer';


const Appointment = () => {
    var today = new Date();
    const [date, setDate] = React.useState(dayjs(today));
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
