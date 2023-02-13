
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';
import NoPage from './Components/NoPage/NoPage';
import ScrollButton from './Components/ScrollButton/ScrollButton';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className="App">
   <AuthProvider>
   <BrowserRouter>
     <Routes>
    

      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path='/appointment' element={<Appointment/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      {/* <Route path='/register  ' element={<Register/>}/> */}
      <Route path='*' element={<NoPage/>}/>

     </Routes>
     <ScrollButton></ScrollButton>
     
     </BrowserRouter>
   </AuthProvider>
    </div>
  );
}

export default App;
