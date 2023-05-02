import React, { useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import jwtDecode from "jwt-decode";

const Register = () => {
  let navigate = useNavigate();
  let [, dispatch] = useGlobalState();
   const [passwordError, setPasswordError] = useState("");
   const [PasswordConfError, setPasswordConfError] = useState("");

  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
     if (key === "password" && value.length < 8) {
       setPasswordError("Password must be 8 characters");
  setPasswordConfError("");
     } else if (key === "passwordConf" && value !== user.password) {
      setPasswordError("");
       setPasswordConfError("Password does not match");
     } else {
      setPasswordError("");
      setPasswordConfError("");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await AuthService.register(user).then(async (resp) => {
      let data = jwtDecode(resp.access);
      await dispatch({
        currentUserToken: resp.access,
        currentUser: data,
      });
      navigate("/about");
    });
  };

  return (
    <div className="c-form">
      <form onSubmit={handleRegister}>
        <div className="login">
          <input
            placeholder="Username"
            type="text"
            id="username"
            name="username"
            onChange={(e) => handleChange("username", e.target.value)}
            required
          />
        </div>
        <div className="login">
          <input
            placeholder="Email"
            type="text"
            id="email"
            name="email"
            onChange={(e) => handleChange("email", e.target.value)}
            required
          />
        </div>
        <div className="login">
          <input
            placeholder="Password"
            type="password"
            id="pass"
            name="password"
            minLength="8"
            pattern=".{8,}"
            required
            onChange={(e) => handleChange("password", e.target.value)}
          />
          <br />
          {passwordError && <span className="error">{passwordError}</span>}
        </div>
        <div className="login">
          <input
            placeholder="Confirm Password"
            type="password"
            id="passConf"
            name="password"
            minLength="8"
            pattern=".{8,}"
            required
            onChange={(e) => handleChange("passwordConf", e.target.value)}
          />
          <br />
          {PasswordConfError && (
            <span className="error">{PasswordConfError}</span>
          )}
        </div>
        <div className="login">
          <input
            placeholder="First Name"
            type="text"
            id="firstName"
            name="fname"
            required
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
        </div>
        <div className="login">
          <input
            placeholder="Last Name"
            type="text"
            id="lastName"
            name="lname"
            required
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
        </div>

        <input
          className="btn btn4 btn-outline-dark button rounded-pill btn-lg"
          type="submit"
          value="Register"
          disabled={
            user.password &&
            user.password.length >= 8 &&
            user.password === user.passwordConf &&
            user.firstName &&
            user.lastName &&
            user.email
              ? false
              : true
          }
        />
      </form>
    </div>
  );
};

export default Register;
