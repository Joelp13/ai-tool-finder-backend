import { Navigate } from "react-router-dom";

function ProtectedRoute({ role, children }) {
  const storedRole = localStorage.getItem("role");

  if (!storedRole) {
    return <Navigate to="/login" />;
  }

  if (role && storedRole !== role) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
