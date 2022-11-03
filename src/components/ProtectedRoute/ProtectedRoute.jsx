import React from 'react';
import {Navigate, Outlet} from "react-router-dom";


const ProtectedRoutes = ({loggedIn}) => {
  console.log(loggedIn)
  return (
    loggedIn ? <Outlet/> : <Navigate to={'/signin'}/>
  )
}

export default ProtectedRoutes;
