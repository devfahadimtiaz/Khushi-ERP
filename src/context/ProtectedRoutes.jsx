// components/ProtectedRoute.js
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const ProtectedRoute = ({ children, module, subModule, permissionType }) => {
  const [hasAccess, setHasAccess] = useState(null); // null = loading

  useEffect(() => {
    const verifyAccess = async () => {
      try {
        const res = await axios.get(`${API_URL}/authenticate`, {
          params: {
            module,
            subModule,
            permission: permissionType,
          },
          withCredentials: true,
        });
        setHasAccess(res.data.valid);
      } catch (error) {
        console.error("Error checking access:", error);
        setHasAccess(false);
      }
    };

    verifyAccess();
  }, [module, subModule, permissionType]);

  if (hasAccess === null) return <div>Loading...</div>; // loading
  if (!hasAccess) return <Navigate to="/AccessDenied" />; // no permission
  return children; // allowed
};

export default ProtectedRoute;
