import React, { useState } from "react";
import styles from "./AccessDenied.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL;

const AccessDenied = () => {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate()

  const handleGoBack = () => {
    window.history.go(-3);
  };

  const handleReturnToDashboard = () => {
    // Navigate to dashboard - can be customized based on routing setup
    window.location.href = "/dashboard";
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
   const handleLogout = async () => {
    axios
      .post(`${API_URL}/logout`, {}, { withCredentials: true })
      .then((response) => {
        console.log(response.data.message);
        navigate("/");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <svg
            className={styles.warningIcon}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 12V17.3333M16 22.6667H16.0133M28 16C28 22.6275 22.6275 28 16 28C9.37259 28 4 22.6275 4 16C4 9.37259 9.37259 4 16 4C22.6275 4 28 9.37259 28 16Z"
              stroke="#DC2626"
              strokeWidth="2.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className={styles.title}>Access Denied</h1>

        <p className={styles.description}>
          You don't have permission to access this page. Please contact your
          administrator if you believe this is an error.
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton} onClick={handleGoBack}>
            Go Back
          </button>

          <button
            className={styles.secondaryButton}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        <div className={styles.divider}></div>

        <button className={styles.detailsToggle} onClick={toggleDetails}>
          <span>Show Details</span>
          <svg
            className={`${styles.arrowIcon} ${showDetails ? styles.arrowUp : ""}`}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6664 6L7.99968 10.6666L3.33301 6"
              stroke="#64748B"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {showDetails && (
          <div className={styles.detailsContent}>
            <p>Error Code: 403</p>
            <p>Timestamp: {new Date().toLocaleString()}</p>
            <p>User Agent: {navigator.userAgent}</p>
          </div>
        )}
      </div>

      <div className={styles.helpText}>
        Need help? Contact your system administrator
      </div>
    </div>
  );
};

export default AccessDenied;
