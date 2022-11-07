import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes({ loggedIn }) {
  const token = localStorage.getItem('token');
  return (
    (token || loggedIn) ? <Outlet /> : <Navigate to="/" />
  );
}

export default ProtectedRoutes;
