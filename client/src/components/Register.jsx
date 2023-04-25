import React, { useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";


const Register = () => {
  let navigate = useNavigate();

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
  };

  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(user);
    navigate("/exercises");
  };

  return (
    <div className="c-form">
      <form onSubmit={handleRegister}>
        <div className="login">
          {/* <label htmlFor="username">Username:</label> */}
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
          {/* <label htmlFor="email">Email:</label> */}
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
          {/* <label htmlFor="pass">Password (8 characters minimum):</label> */}
          <input
            placeholder="Password"
            type="password"
            id="pass"
            name="password"
            minLength="8"
            required
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>
        <div className="login">
          {/* <label htmlFor="passConf">Confirm Password:</label> */}
          <input
            placeholder="Confirm Password"
            type="password"
            id="passConf"
            name="password"
            minLength="8"
            required
            onChange={(e) => handleChange("passwordConf", e.target.value)}
          />
        </div>
        <div className="login">
          {/* <label htmlFor="firstName">First Name:</label> */}
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
          {/* <label htmlFor="lastName">Last Name:</label> */}
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
          className="btn btn4 btn-outline-dark button btn-lg"
          type="submit"
          value="Register"
          disable={
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
