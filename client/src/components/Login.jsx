import React, { useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import jwtDecode from "jwt-decode";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";



const Login = () => {
  let navigate = useNavigate();

  const [state, dispatch] = useGlobalState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService.login(username, password).then(async (resp) => {
      let data = jwtDecode(resp.access);
      await dispatch({
        currentUserToken: resp.access,
        currentUser: data,
        
      });
      
      navigate("/main");
    });
    
  };

  return (
    <div className="c-form">
      <form onSubmit={handleLogin}>
        <div className="login">
          {/* <label htmlFor="username">Username:</label> */}
          <input
            placeholder="Username"
            variant="outline-secondary"
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="login">
          {/* <label htmlFor="pass">Password:</label> */}
          <input
            placeholder="Password"
            type="password"
            id="pass"
            name="password"
            minLength="8"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          className="btn btn4 btn-outline-dark button btn-lg"
          type="submit"
          value="Sign in"
        />
      </form>
    </div>
  );
};

export default Login;
