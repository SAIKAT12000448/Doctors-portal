import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useQuery } from 'react-query';
import { toast } from 'react-hot-toast';
// import { toast } from 'react-hot-toast';
import useAuth from '../../../context/useAuth';
// import { useQuery } from '@tanstack/react-query';






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



const AllUsers = () => {
    //   const[users,setUsers] = useState([])
      const{token} = useAuth();
    //   const[isAdmin,setIsAdmin] = useState(false);
      
    const {data: users = [],refetch} = useQuery({
        queryKey:['users'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/users');
            const data =await res.json();
            return data;
        }


    })


    // useEffect(()=>{
    //     fetch('http://localhost:5000/users')
    //     .then(res=>res.json())
    //     .then(data=>setUsers(data))
    // },[])



    const handleOnSubmit=(id)=>{
        console.log(id)
        fetch(`http://localhost:5000/users/admin/${id}`,{
               method:'PUT' ,
               authorization: `Bearer ${token}`
  
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            toast('successfully added admin')
            refetch()
            
        })


    }
   






    return (
        <div>
             <TableContainer component={Paper}>
        <Table  aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Make Admin</StyledTableCell>
              <StyledTableCell align="left">Delete</StyledTableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user,i) => (
              <StyledTableRow key={user._id}>
                <StyledTableCell component="th" scope="row">
                  {i+1}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {user.name || user.user.name}
                </StyledTableCell>
                <StyledTableCell align="left">{user.email}</StyledTableCell>
                <StyledTableCell align="left">

                
                    {user?.role!=='admin' && <Button onClick={()=>handleOnSubmit(user._id)} variant='contained'>Make Admin</Button>}
                
                </StyledTableCell>
                <StyledTableCell align="left"><Button style={{backgroundColor:"#750e07",color:"white"}}>Delete</Button></StyledTableCell>
            
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
    );
};

export default AllUsers;