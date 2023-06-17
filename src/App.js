
import { Route, Routes} from 'react-router-dom';

import './App.css';
import { Toaster } from 'react-hot-toast';

import Appointment from './Components/Appointment/Appointment/Appointment';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';
import NoPage from './Components/NoPage/NoPage';
import ScrollButton from './Components/ScrollButton/ScrollButton';
import PrivateRoute from './context/PrivateRoute/PrivateRoute';
import Makeadmin from './Components/Dashboard/makeAdmin/Makeadmin';
import UserAppointments from './Components/Dashboard/userinfo/UserAppointments';
import AllUsers from './Components/Dashboard/AllUsers/AllUsers';
import AdminRoute from './context/PrivateRoute/AdminRoute';
import AddDoctor from './Components/Dashboard/AddDoctor/AddDoctor';
import ManageDoctor from './Components/Dashboard/ManageDoctor/ManageDoctor';
import Payment from './Components/Dashboard/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe("pk_test_51NJf5NGr9ldt4Z8fi2HQcykV8EdjllpV0jo0pJ6WKzKS0ZjEM0cGO2nYhm4wJcTejOd4sAbfg1jchoqEw5Mf2qco00Bn7I113o");
console.log(stripePromise);



function App() {
  return (
    <div className='App' >
    

  
     <Routes>
    

      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path='/appointment' element={<Appointment/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={
        <PrivateRoute>
          
          <Dashboard></Dashboard>
        </PrivateRoute>
      }
      
      >
       <Route path='' element={<UserAppointments></UserAppointments>}/>
       <Route path='makeadmin' element={<Makeadmin></Makeadmin>}/>
       <Route path='userAppointment' element={<UserAppointments></UserAppointments>}/>
       <Route path='allusers' element={
<AdminRoute><AllUsers></AllUsers></AdminRoute>

       }/>
       <Route path='addDoctor' element={
<AdminRoute><AddDoctor></AddDoctor></AdminRoute>

       }/>


       <Route path='manageDoctors' element={
<AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>

       }/>
       <Route path='payment/:id' element={
<AdminRoute>


  <Payment></Payment>


</AdminRoute>
}

/>
     


        </Route>




      <Route path='*' element={<NoPage/>}/>

     </Routes>
      <Toaster></Toaster>
     <ScrollButton></ScrollButton>
     
    
   
    </div>
  );
}

export default App;
