import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import backgroundImage from "../assets/login.jpg";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const toShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = formValues;

      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
      alert(error.code);
    }
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
    });
  }, []);

  return (
    <section className="login">
      <img src={backgroundImage} alt="background" className="background-image" />
      <div className="layout"></div>
      <div className="container">
        <div className="form">
          <form>
            <span>Login</span>

            <div className="input">
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="form-control inp_text"
                id="email"
                onChange={(e) => {
                  setFormValues({ ...formValues, email: e.target.value });
                }}
              />
            </div>

            <div className="input">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                className="form-control"
                onChange={(e) => {
                  setFormValues({ ...formValues, password: e.target.value });
                }}
              />

              <span className="icon-eye" onClick={toShowPassword}>
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </span>
            </div>

            <button type="submit" onClick={handleLogin}>
              Login
            </button>

            <Link to="/signup" className="to-signup">
              You Don't Have Acount
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
