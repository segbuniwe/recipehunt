import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSignupMutation } from "./app/apiSlice";
import AlertMessage from "./AlertMessage";

const SignUpForm = () => {
  const [signup, signupResult] = useSignupMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (signupResult.error) {
      if (signupResult.error.status == 400) {
        setAlertMessage(signupResult.error.data.detail);
      }
    }
    if (signupResult.isSuccess) {
      navigate("/");
    }
  }, [signupResult]);

  const handleRegistration = (e) => {
    e.preventDefault();
    const accountData = {
      email: email,
      password: password,
      first_name: first,
      last_name: last,
    };
    if (password !== confirmPassword) {
      setAlertMessage("Passwords do not match");
      return;
    }
    signup(accountData);
  };

  return (
    <div className="card text-bg-light mb-3">
      <h5 className="card-header">Signup</h5>
      {alertMessage && <AlertMessage>{alertMessage}</AlertMessage>}
      <div className="card-body">
        <form onSubmit={(e) => handleRegistration(e)}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              name="first_name"
              type="text"
              className="form-control"
              value={first}
              onChange={(e) => {
                setFirst(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              name="last_name"
              type="text"
              className="form-control"
              value={last}
              onChange={(e) => {
                setLast(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              name="confirm_password"
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <div className="text-center">
            Already have an account? Click here to <Link to={"/login"}>login</Link>
          </div>
          <div>
            <input className="btn btn-primary" type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
