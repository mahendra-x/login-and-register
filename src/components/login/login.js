import React, { useState } from "react";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:9002/login", user)
    .then(res => console.log(res))

  }
  return (
    <div className="login">
        {console.log(user)}
      <h1>login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your password"
      ></input>
      <div className="button" onClick={login}>Login</div>
      <div>or</div>
      <div className="button">Register</div>
    </div>
  );
};

export default Login;
