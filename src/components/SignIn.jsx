"use client";
import React, { useState } from "react";
import styles from "./SignIn.module.css";
import InputField from "./InputField";
import logo from "../uploads/KM-LOGO.png";

function SignIn({ onBack, onSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
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
          <button type="submit" className={styles.loginButton} onClick={onSignIn}>
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
