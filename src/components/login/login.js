import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ( { setLoginUser } ) => {
  let history = useHistory();
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
    .then(res => {
      alert(res.data.message)
      setLoginUser(res.data.a)
      history.push('/')

    
    })
    

  }
  return (
    <div className="login">
        {console.log(user)}
      <h1>login</h1>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        autocomplete="false"
        placeholder="Enter your email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        autocomplete="false"
        placeholder="Enter your password"
      ></input>
      <div className="button" onClick={login}>Login</div>
      <div>or</div>
      <div className="button" onClick={() => history.push("/register")}>Register</div>
    </div>
  );
};

export default Login;
