import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  let auth = { token: true }; //Fetch user här istället från Databsen
  return auth.token ? <Outlet /> : <Navigate to="/LoginSignup" />;
};

export default ProtectedRoutes;
