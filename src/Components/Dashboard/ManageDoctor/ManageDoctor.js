import { Button, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




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


const ManageDoctor = () => {
    const[doctors,setDoctors] = useState([])
    const [openMenu, setOpen] = React.useState(false);
    const[deletingDoctor,setDeletingDoctor] = useState(null);
   
   




    console.log(deletingDoctor);

   useEffect(()=>{
           fetch('http://localhost:5000/getDoctors')
           .then(res=>res.json())
           .then(data=>setDoctors(data))
   },[])


const openDeleteModal=(doctor)=>{
setDeletingDoctor(doctor)


setOpen(true)
       
}


const handleDeleteButton=()=>{




  fetch(`http://localhost:5000/doctors/${deletingDoctor._id}`,{
  method:"DELETE",

})
.then(res=>res.json())
.then(data=>{
  console.log(data);
  if(data.acknowledged){
    handleClose()
    setDeletingDoctor(null)
    
  }
})
}







const handleClose = () => {

  setOpen(false);
 
};


    return (
        <div>
            <Typography>Doctors {doctors?.length}</Typography>

           
        <TableContainer component={Paper}>
            <Table  aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>img</StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="left">Email</StyledTableCell>
                
                  <StyledTableCell align="left">Delete</StyledTableCell>
                
                </TableRow>
              </TableHead>
              <TableBody>
                {doctors?.map((doctor,i) => (
                  <StyledTableRow key={doctor._id}>
                    <StyledTableCell component="th" scope="row">
                      <img style={{borderRadius:'50%'}} width="70px"height="70px" src={doctor.image} alt="" />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {doctor.name || doctor.user.name}
                    </StyledTableCell>
                    <StyledTableCell align="left">{doctor.email}</StyledTableCell>
                   
                    <StyledTableCell align="left"><Button onClick={()=>openDeleteModal(doctor)} style={{backgroundColor:"#750e07",color:"white"}}>Delete</Button></StyledTableCell>
                 
               
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
           





      {
        deletingDoctor &&  <Dialog
        open={openMenu}
        onClose={handleClose}
        // PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Delete Doctor
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
        Are you sure you want to delete {deletingDoctor.name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleDeleteButton}>Yes</Button>
        </DialogActions>
      </Dialog>
      }




        </div>
    );
};

export default ManageDoctor;