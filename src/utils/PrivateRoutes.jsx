import { Outlet, Navigate } from "react-router-dom";
import useAuthStore from "../authStore";

const PrivateRoutes = () => {
  const authStore = useAuthStore((state) => state.auth);
  let auth = { token: authStore };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
