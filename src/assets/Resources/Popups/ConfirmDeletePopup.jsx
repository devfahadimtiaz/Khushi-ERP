import React from "react";
import styles from "./ConfirmDeletePopup.module.css";

/**
 * A reusable confirmation popup for delete actions
 * @param {Object} props Component props
 * @param {boolean} props.isOpen Controls visibility of the popup
 * @param {Function} props.onClose Callback function when cancel is clicked
 * @param {Function} props.onConfirm Callback function when delete is clicked
 * @param {string} [props.title="Confirm Delete"] Optional custom title
 * @param {string} [props.message="Are you sure you want to delete this item?"] Optional custom message
 */
const ConfirmDeletePopup = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Delete",
  message = "Are you sure you want to delete this item?",
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.popup}>
          <div className={styles.title}>{title}</div>
          <div className={styles.message}>{message}</div>
          <div className={styles.buttonContainer}>
            <button className={styles.deleteButton} onClick={onConfirm}>
              Delete
            </button>
            <button className={styles.cancelButton} onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeletePopup;
