import React, { useState, useRef } from "react";
import styles from "./DocumentUpload.module.css";
import pdfIcon from "../../uploads/icons/pdf.svg";
import view from "../../uploads/icons/view.svg";
import download from "../../uploads/icons/download.svg";
function DocumentUpload() {
  const [documents, setDocuments] = useState([
    { id: 1, name: "C24-0001 Export Certificate" },
    { id: 2, name: "C24-0001 Export Certificate" },
    { id: 3, name: "C24-0001 Export Certificate" },
    { id: 4, name: "C24-0001 Export Certificate" },
    { id: 5, name: "C24-0001 Export Certificate" },
    { id: 6, name: "C24-0001 Export Certificate" },
  ]);

  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    const newDocuments = Array.from(files).map((file, index) => ({
      id: documents.length + index + 1,
      name: file.name,
      file: file,
    }));

    setDocuments([...documents, ...newDocuments]);
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleViewDocument = (id) => {
    // View document functionality would go here
    console.log(`Viewing document ${id}`);
  };

  return (
    <div className={styles.container}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <div className={styles.uploadContainer}>
        <div className={styles.title}>Upload Documents</div>

        <div
          className={styles.dropArea}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleBrowseClick}
        >
          <div className={styles.uploadIconContainer}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16L12 8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 11L12 8 15 11"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className={styles.dropText}>
            Drag and drop files here or click to browse
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInputChange}
            multiple
            style={{ display: "none" }}
          />
        </div>
      </div>

      <div className={styles.documentsGrid}>
        {documents.map((doc) => (
          <div key={doc.id} className={styles.documentCard}>
            <img src={pdfIcon} className={styles.pdfIcon}/>
            <div className={styles.documentName}>{doc.name}</div>
            <div className={styles.documentActions}>
              <button
                className={styles.actionButton}
                onClick={() => handleViewDocument(doc.id)}
                aria-label="View document"
              >
                <img src={view} className={styles.viewIcon} />
              </button>
              <button
                className={styles.actionButton}
                aria-label="Delete document"
              ><img src={download} className={styles.viewIcon} />
               
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocumentUpload;
