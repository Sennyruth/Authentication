// import { useEffect, useState } from "react";
import useAuthStore from "./authStore";
import { useNavigate } from "react-router-dom";

function Login() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  const handleAuth = () => {
    setAuth(true);
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleAuth}>Login</button>
    </div>
  );
}

export default Login;
