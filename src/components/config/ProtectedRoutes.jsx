import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const ProtectedRoutes = () => {
  const { user } = useContext(AuthContext);

  return user.userData && user.login ? <Outlet /> : <Navigate to="/" />; //Si existe el usuario puede navegar por las rutas, sino se redirige al login
};
