import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "./app/apiSlice";
import AlertMessage from "./AlertMessage";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, loginResult] = useLoginMutation();
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (loginResult.error) {
      if (loginResult.error.status == 401) {
        setAlertMessage(loginResult.error.data.detail);
      }
      else if (loginResult.error.status == 422) {
        setAlertMessage(loginResult.error.data.detail[0].msg);
      }
    }
    if (loginResult.isSuccess) {
      navigate("/");
    }
  }, [loginResult]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({username, password});
  };

  return (
    <div className="card text-bg-light mb-3">
      <h5 className="card-header">Login</h5>
      {alertMessage && <AlertMessage>{alertMessage}</AlertMessage>}
      <div className="card-body">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              name="username"
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              name="password"
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;