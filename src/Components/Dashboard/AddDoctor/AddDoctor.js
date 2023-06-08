
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, handleSubmit} = useForm();
    const onDoctorSubmit = data => {
        console.log(data);
    }
  const[specialities,setSpecialities] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/appointmentCollections')
    .then(res=>res.json())
    .then(data=>setSpecialities(data))
  },[])

   

    return (
        <div style={{textAlign:"left",padding:'40px'}}>
            <Typography sx={{mb:"30px"}} variant='h5'>Add a Doctor</Typography>
            <form style={{display:'flex',flexDirection:'column',width:'50%'}} onSubmit={handleSubmit(onDoctorSubmit)}>
                <Typography>Name</Typography>
      
      <input style={{padding:"5px",borderRadius:"10px",marginBottom:"10px"}} defaultValue="" {...register("name")} />
      
      <Typography>Email</Typography>
      <input style={{padding:"5px",borderRadius:"10px",marginBottom:"10px"}}  {...register("email", { required: true })} />
   
      <Typography>Speciality</Typography>
      <select style={{padding:"5px",borderRadius:"10px",marginBottom:"10px"}} {...register("specialty")}>
        
        {
            specialities?.map(specialty=><option
                key={specialty._id}
                value={specialty.name}
            >
          {specialty.name}
            </option>)
        }
      </select>
   
     
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddDoctor;