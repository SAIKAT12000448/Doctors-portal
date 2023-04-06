import React from 'react';


import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';




// var today = new Date();

const Calender = ({date,setDate}) => {
    

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        
        value={date}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  
    );
};

export default Calender;