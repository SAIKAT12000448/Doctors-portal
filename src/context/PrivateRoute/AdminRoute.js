import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../useAuth';
import LinearProgress from '@mui/material/LinearProgress';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const{user,isLoading} = useAuth();
    const location = useLocation()
    const[isAdmin,isAdminLoading] = useAdmin(user?.email)


    if(isLoading||isAdminLoading){
        return  <LinearProgress color="success" />
    }
    if(user.email && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace/>;

};

export default AdminRoute;