import React from "react";
import { useAuth } from "./context/auth-context";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ PrivateItem }) => {
  const { user } = useAuth();
  return (
    <div>
      {user.isUserLoggedIn ? PrivateItem : <Navigate replace to="/login" />}
    </div>
  );
};

export { PrivateRoute};