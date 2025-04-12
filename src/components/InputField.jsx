import React from "react";
import styles from "./InputField.module.css";

const InputField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  iconType,
  showPasswordToggle = false,
  onTogglePassword,
  showPassword,
}) => {
  const renderIcon = () => {
    if (iconType === "email") {
      return (
        <div className={styles.icon}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
              stroke="#667085"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
              stroke="#667085"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    } else if (iconType === "password") {
      return (
        <div className={styles.icon}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.inputFieldBase}>
      <div className={styles.inputWithLabel}>
        <div className={styles.label}>{label}</div>
        <div className={styles.inputContainer}>
          <div className={styles.content}>
            {renderIcon()}
            <input
              type={type}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={styles.input}
            />
          </div>
          {showPasswordToggle && (
            <div
              className={styles.eyeIcon}
              onClick={onTogglePassword}
              role="button"
              tabIndex={0}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={
                    showPassword
                      ? "M12 16.33C9.61 16.33 7.67 14.39 7.67 12C7.67 9.61 9.61 7.67 12 7.67C14.39 7.67 16.33 9.61 16.33 12C16.33 14.39 14.39 16.33 12 16.33ZM12 9.33C10.53 9.33 9.33 10.53 9.33 12C9.33 13.47 10.53 14.67 12 14.67C13.47 14.67 14.67 13.47 14.67 12C14.67 10.53 13.47 9.33 12 9.33Z"
                      : "M14.53 9.47L9.47 14.53C8.82 13.88 8.42 12.99 8.42 12C8.42 10.02 10.02 8.42 12 8.42C12.99 8.42 13.88 8.82 14.53 9.47Z"
                  }
                  fill="#667085"
                />
                <path
                  d="M12 5.33C7.4 5.33 3.67 8.27 2 12C3.67 15.73 7.4 18.67 12 18.67C16.6 18.67 20.33 15.73 22 12C20.33 8.27 16.6 5.33 12 5.33ZM12 17C8.24 17 5.07 14.68 3.58 12C5.07 9.32 8.24 7 12 7C15.76 7 18.93 9.32 20.42 12C18.93 14.68 15.76 17 12 17Z"
                  fill="#667085"
                />
                {!showPassword && (
                  <path
                    d="M3 2.99902L21 20.999"
                    stroke="#667085"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputField;
