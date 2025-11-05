import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth, getConfigKey } from "../utils/auth";

export default function ProtectedRoute({ children, requireConfig = false }) {
  const auth = getAuth();
  if (!auth) return <Navigate to="/auth" replace />;
  if (requireConfig && (!getConfigKey() || getConfigKey().length < 100))
    return <Navigate to="/config" replace />;
  return children;
}
