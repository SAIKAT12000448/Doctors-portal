
import { Route, Routes } from 'react-router-dom';

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
      
<<<<<<< HEAD
      >
       
        </Route>



    
=======
      />
>>>>>>> a6d4ff8490f5e62b07161ca321364c528209a138
      

      <Route path='*' element={<NoPage/>}/>

     </Routes>
      <Toaster></Toaster>
     <ScrollButton></ScrollButton>
     
    
   
    </div>
  );
}

export default App;
