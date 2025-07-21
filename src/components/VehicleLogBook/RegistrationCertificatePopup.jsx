import React, { useState } from "react";
import styles from "./RegistrationCertificatePopup.module.css";
import uploadIcon from "../../uploads/uploads-svgrepo-com.svg";

const RegistrationCertificatePopup = ({ onClose,setFile }) => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (fileList) => {
    const newFiles = Array.from(fileList);
    setFiles([...files, ...newFiles]);
  };

  const handleUpload = () => {
    // Here you would implement the actual file upload logic
    setFile(files)
    // After successful upload, close the popup
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popupContainer}>
        <div className={styles.popupContent}>
          <div className={styles.popupHeader}>
            <h2 className={styles.popupTitle}>
              REGISTRATION CERTIFICATE UPLOAD
            </h2>
            <button className={styles.closeButton} onClick={onClose}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#092C4C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className={styles.uploadContainer}>
            <div
              className={`${styles.dropZone} ${isDragging ? styles.dragging : ""}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className={styles.dropZoneContent}>
                <div className={styles.uploadIconContainer}>
                  <img
                    src={uploadIcon}
                    alt="Upload"
                    className={styles.uploadIcon}
                  />
                  <div className={styles.dropText}>
                    Drag and drop your files here or
                  </div>
                </div>
                <label className={styles.browseText}>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileInput}
                    className={styles.fileInput}
                  />
                  browse
                </label>
              </div>
              <div className={styles.supportedFormats}>
                Supported formats: PDF, DOC, DOCX, JPG, PNG
              </div>
            </div>

            {files.length > 0 && (
              <div className={styles.fileList}>
                {files.map((file, index) => (
                  <div key={index} className={styles.fileItem}>
                    {file.name}
                  </div>
                ))}
              </div>
            )}

            <button className={styles.uploadButton} onClick={handleUpload}>
              Upload Files
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationCertificatePopup;
