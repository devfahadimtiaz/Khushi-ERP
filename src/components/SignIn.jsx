import React, { useState } from "react";
import styles from "./SignIn.module.css";
import InputField from "./InputField";
import logo from "../uploads/KM-LOGO.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const values = {
    email: email,
    password: password,
  };
  const handleLogin = (event) => {
    // Navigate to the dashboard after login
    event.preventDefault(); // Prevent the default form submission behavior
    axios
      .post("http://localhost:8081/SignIn", values)
      .then((res) => {
        if (res.data.message === "Login successful") {
          navigate("/Dashboard");
        }
        else{
          alert("Invalid email or password");

        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
        <div className={styles.testimonialCard}>
          Employee Recruitment process was never easier. Hire new employees
          seamlessly.
        </div>
        <div className={styles.dotIndicators}>
          <div className={styles.dotInactive} />
          <div className={styles.dotActive} />
          <div className={styles.dotInactive} />
        </div>
      </div>
      <div className={styles.rightPanel}>
        <img src={logo} alt="Khushi Media Logo" className={styles.logo} />
        <form onSubmit={handleLogin}>
          <div className={styles.inputWrapper}>
            <InputField
              label="Email"
              type="email"
              placeholder="Enter email here"
              value={email}
              onChange={handleEmailChange}
              iconType="email"
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
