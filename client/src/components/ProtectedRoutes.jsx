import { useLoaderData, Outlet, Navigate } from "react-router-dom";

// Loader function to fetch user data
export const fetchUserData = async () => {
  try {
    const res = await fetch("/api/login");
    if (res.ok) {
      const userData = await res.json();
      return userData;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

// ProtectedRoutes component
const ProtectedRoutes = () => {
  const user = useLoaderData();
  console.log(user);

  const auth = { token: user !== null };

  return auth.token ? <Outlet /> : <Navigate to="/LoginSignup" />;
};

export default ProtectedRoutes;
