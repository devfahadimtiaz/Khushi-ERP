import React, { useState, useEffect } from "react";
import styles from "./SignIn.module.css";
import InputField from "./InputField";
import logo from "../uploads/KM-LOGO.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

function SignIn() {
 const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const values = {
    username: username,
    password: password,
  };

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get(`${API_URL}/dashboard`)
      .then((res) => {
        if (res.data.valid) {
          navigate("/dashboard");
        } else {
          navigate("/SignIn");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  const handleLogin = (event) => {
    // Navigate to the dashboard after login
    event.preventDefault();
    axios.post(`${API_URL}/signIn`, values).then((res) => {
      if (res.data.message === "Login Success") {
        console.log("Login Success");
        navigate("/dashboard");
      } else {
        alert("Invalid email or password");
      }
    });
  };

  const handleEmailChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return ( 
    <div className={styles.signInContainer}>
      <div className={styles.leftPanel}>
        <div className={styles.welcomeTitle}>Let's sign you in</div>
        <div className={styles.welcomeSubtitle}>
          Welcome back!
          <br />
          Manage you teams effectively.
        </div>
       
      </div>
      <div className={styles.rightPanel}>
        <img src={logo} alt="Khushi Media Logo" className={styles.logo} />
        <form onSubmit={handleLogin}>
          <div className={styles.inputWrapper}>
            <InputField
              label="Username"
              type="text"
              placeholder="Enter username here"
              value={username}
              onChange={handleEmailChange}
              iconType="username"
            />
          </div>
          <div className={styles.inputWrapper}>
            <InputField
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password here"
              value={password}
              onChange={handlePasswordChange}
              iconType="password"
              showPasswordToggle
              onTogglePassword={togglePasswordVisibility}
              showPassword={showPassword}
            />
          </div>
          <div className={styles.rememberForgotRow}>
            <div className={styles.checkboxContainer}>
              <div className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className={styles.checkbox}
                />
                <label htmlFor="rememberMe" className={styles.checkboxLabel}>
                  Remember me
                </label>
              </div>
            </div>
            <div className={styles.forgotPassword}>Forgot Password</div>
          </div>
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
        <div className={styles.copyright}>
          <span className={styles.copyrightGray}>Copyrights © 202</span>
          <span className={styles.copyrightSmall}>5</span>
          <span className={styles.copyrightGray}>
            {" "}
            All Rights Reserved by
          </span>{" "}
          <span className={styles.copyrightDark}>Khushi Media</span>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
