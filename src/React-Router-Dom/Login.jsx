import React, { useState } from "react";
import { AuthUser } from "./ProtectedRouteAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [userLogin, setuserLogin] = useState("");

  const { login } = AuthUser();

  const navigate = useNavigate();
  const location = useLocation();

  const pathDirect = location.state?.path || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userLogin);
    navigate(pathDirect, { replace: true });
  };

  return (
    <div>
      {" "}
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="">User Name</label> <br />
        <input
          type="text"
          placeholder="type your name"
          onChange={(e) => setuserLogin(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
