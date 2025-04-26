import React from "react";
import styles from "./FileCard.module.css";

// SVG Components
const DownloadIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 3.33325V13.3333M10 13.3333L6.66667 9.99992M10 13.3333L13.3333 9.99992M5 16.6666H15"
      stroke="#363565"
      strokeWidth="2"
    ></path>
  </svg>
);

const DeleteIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.833 5.83333L15.1103 15.9521C15.0479 16.8242 14.3222 17.5 13.4478 17.5H6.55154C5.67714 17.5 4.95141 16.8242 4.88911 15.9521L4.16634 5.83333M8.33301 9.16667V14.1667M11.6663 9.16667V14.1667M12.4997 5.83333V3.33333C12.4997 2.8731 12.1266 2.5 11.6663 2.5H8.33301C7.87277 2.5 7.49967 2.8731 7.49967 3.33333V5.83333M3.33301 5.83333H16.6663"
      stroke="#CF2129"
      strokeWidth="2"
    ></path>
  </svg>
);

function FileCard({ file, onDownload, onDelete }) {
  return (
    <div className={styles.fileCard}>
      <img src={file.imageUrl} alt={file.name} className={styles.fileImage} />

      <div className={styles.actionButtons}>
        <button
          className={styles.actionButton}
          onClick={onDownload}
          aria-label="Download file"
        >
          <DownloadIcon />
        </button>

        <button
          className={styles.actionButton}
          onClick={onDelete}
          aria-label="Delete file"
        >
          <DeleteIcon />
        </button>
      </div>

      <div className={styles.fileInfo}>
        <div className={styles.fileName}>{file.name}</div>
        <div className={styles.fileDetails}>
          <span className={styles.fileSize}>{file.size}</span>
          <span className={styles.fileDate}>{file.date}</span>
        </div>
      </div>
    </div>
  );
}

export default FileCard;
