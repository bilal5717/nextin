import { Navigate, useLocation } from 'react-router-dom';
const RequireAuth = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('adminToken'); // or your auth state
  
  if (!isAuthenticated) {
    // Redirect to login page, saving the current location they were trying to go to
    return <Navigate to="/adminToLogin" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;