import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getAuthState } from "../helpers/authCheck";

function ProtectedRoute({ children, ...rest }) {
  const user = getAuthState();

  return <Route {...rest}>{user ? children : <Redirect to="/login" />}</Route>;
}

export default ProtectedRoute;
