
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddDoctor = () => {
    const { register, handleSubmit} = useForm();
    const imgbbKey = "e0cf219143d55c964d12d89bd9af83d6";
    console.log(imgbbKey);
    const navigate = useNavigate()


    const onDoctorSubmit = data => {


        
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData=>{
          console.log(imgData);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url
          }

         if(imgData.success){
          fetch('http://localhost:5000/doctors', {
            method:'POST',
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(doctor)
         })
         .then(res=>res.json())
         .then(data=>{
          console.log(data);
          toast.success(` added successfully`)
          navigate('/dashboard/manageDoctors')
         })
         }
        })




       







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
                defaultValue={specialty.name}
            >
          {specialty.name}
            </option>)
        }
      </select>

      <Typography>image</Typography>
   
      <input type='file' style={{padding:"5px",borderRadius:"10px",marginBottom:"10px"}} defaultValue="" {...register("img")} />
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddDoctor;