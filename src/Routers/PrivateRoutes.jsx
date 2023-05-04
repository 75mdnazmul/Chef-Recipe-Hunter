/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <p>Loading......</p>
    }

    if(user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace={true} ></Navigate>
};

export default PrivateRoutes;