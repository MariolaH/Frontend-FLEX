import { useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import jwtDecode from "jwt-decode";

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
document.body.style.zoom = "initial";
      navigate("/main");
    });
  };

  return (
    <div className="c-form">
      <form onSubmit={handleLogin}>
        <div className="login">
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
          className="btn btn4 btn-outline-dark button rounded-pill btn-lg"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
