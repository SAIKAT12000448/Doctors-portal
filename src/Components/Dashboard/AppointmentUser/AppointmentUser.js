import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../context/useAuth';
// import { useQuery } from 'react-query';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,  
    },
  }));


  
const AppointmentUser = ({date}) => {
    const[AppointmentUser,setAppointments] = useState([]);
    const{user,token} = useAuth();
      
    useEffect(()=>{
        const url = `http://localhost:5000/appointmentList?email=${user?.email}&date=${date}`;
        fetch(url,{
          headers:{
            authorization: `Bearer ${token}`
          }
        })
        .then(res=>res.json())
        .then(data=>setAppointments(data))
        .catch(error => console.error(error));

    },[date])





    return (
        <TableContainer component={Paper}>
        <Table  aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Patient-Name</StyledTableCell>
              <StyledTableCell align="right">Treatment</StyledTableCell>
              <StyledTableCell align="right">Time</StyledTableCell>
              <StyledTableCell align="right">phone</StyledTableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
            {AppointmentUser?.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.treatmentname}</StyledTableCell>
                <StyledTableCell align="right">{row.slot}</StyledTableCell>
                <StyledTableCell align="right">{row.phone}</StyledTableCell>
            
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  
    );
};

export default AppointmentUser;