import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return 
  }

  if (!user) {
    <Navigate to={`/login`} state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
