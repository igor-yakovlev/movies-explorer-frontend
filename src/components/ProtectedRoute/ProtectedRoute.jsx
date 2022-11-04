import React from 'react';
import {Navigate, Outlet} from "react-router-dom";


const ProtectedRoutes = ({loggedIn}) => {
  const token = localStorage.getItem('token');
  return (
    token ? <Outlet/> : <Navigate to={'/signin'}/>
  )
}

export default ProtectedRoutes;
