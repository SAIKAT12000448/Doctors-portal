import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../useAuth';
import LinearProgress from '@mui/material/LinearProgress';

const PrivateRoute = ({children}) => {
    const{user,isLoading} = useAuth();
    const location = useLocation()

    if(isLoading){
        return  <LinearProgress color="success" />
    }
    if(user.email) {
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace/>;

};

export default PrivateRoute;