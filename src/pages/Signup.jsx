import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import { FiEye, FiEyeOff } from "react-icons/fi";
import backgroundImage from "../assets/login.jpg";

function Signup() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const toShowPassword = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formValues;
      // console.log(formValues);
      //
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
      alert(error.code);
    }
  };

  useEffect(() => {
    onAuthStateChanged(
      firebaseAuth,
      (currentUser) => {
        // if (currentUser) navigate("/home");
      },
      []
    );
  });

  return (
    <section className="signup">
      <img src={backgroundImage} alt="background" className="background-image" />
      <div className="layout"></div>
      <div className="container">
        <div className="form">
          <form>
            <span>Signup</span>

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

            <button type="submit" onClick={handleSignIn}>
              Get Start
            </button>

            <Link to="/login" className="to-login">
              You Have Acount
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
