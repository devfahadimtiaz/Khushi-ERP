import React, { useState, useRef, useEffect } from "react";
import styles from "./DocumentUpload.module.css";
import pdfIcon from "../../../assets/uploads/icons/pdf.svg";
import view from "../../../assets/uploads/icons/view.svg";
import download from "../../../assets/uploads/icons/download.svg";
const API_URL = process.env.REACT_APP_API_URL;
const API_IMAGE = process.env.REACT_APP_API_IMAGE;
function DocumentUpload({
  docFiles,
  setDocsFile,
  existingDocs,
  setExistingDocs,
  vehicleId,
}) {
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (existingDocs?.length) {
      const formattedExistingDocs = existingDocs.map((doc) => ({
        id: doc.id,
        url: `${API_IMAGE}${doc.url}`,
        type: doc.type || "", // You can extract from name if needed
        name: doc.url.split("/").pop(),
      }));

      setDocsFile((prev) => [...formattedExistingDocs, ...prev]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [existingDocs]);

  const allowedTypes = ["application/pdf", "application/vnd.ms-excel"];
  const handleDrop = (e) => {
    e.preventDefault();
    const validFiles = Array.from(e.dataTransfer.files).filter((file) =>
      allowedTypes.includes(file.type)
    );
    const newDocs = validFiles.map((file) => ({
      file,
      type: "",
    }));
    setDocsFile([...docFiles, ...newDocs]);
  };

  const handleFileInputChange = (e) => {
    if (e.target.files) {
      const newDocs = Array.from(e.target.files).map((file) => ({
        file,
        type: "", // empty initially
      }));
      setDocsFile([...docFiles, ...newDocs]);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };
  const handleViewDocument = (index) => {
    const file = docFiles[index];
    const fileURL = URL.createObjectURL(file);

    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(`
      <iframe 
        src="${fileURL}" 
        width="100%" 
        height="100%" 
        style="border:none;">
      </iframe>
    `);
      newWindow.document.title = file.name;
    } else {
      alert("Popup blocked. Please allow popups for this site.");
    }
  };

  const handleDeleteDocs = (index) => {
    const updatedDocs = [...docFiles];
    updatedDocs.splice(index, 1);
    setDocsFile(updatedDocs);
  };

  useEffect(() => {
    const urls = docFiles
      .filter((doc) => doc?.file instanceof Blob)
      .map((doc) => URL.createObjectURL(doc.file));

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [docFiles]);

  const handleDeleteExistingDoc = async (docId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this document?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${API_URL}/documents/${docId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete document.");
      }

      const updatedDocs = existingDocs.filter((doc) => doc.id !== docId);
      setDocsFile([...docFiles]); // this line is fine but technically not needed here
      if (typeof setExistingDocs === "function") {
        setExistingDocs(updatedDocs);
      }
    } catch (error) {
      console.error("Error deleting document:", error);
      alert("An error occurred while deleting the document.");
    }
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
            accept="application/pdf,application/vnd.ms-excel"
            onChange={handleFileInputChange}
            multiple
            style={{ display: "none" }}
          />
        </div>
      </div>

      <div className={styles.documentsGrid}>
        {docFiles.map((doc, index) => {
          const isExisting = !!doc.url && !doc.file;

          const fileUrl = isExisting
            ? doc.url
            : doc?.file instanceof Blob
            ? URL.createObjectURL(doc.file)
            : "";

          return (
            <div key={index} className={styles.documentCard}>
              <img alt="document" src={pdfIcon} className={styles.pdfIcon} />
              <div className={styles.documentName}>
                {doc.name || doc.file?.name || "Unnamed Document"}
              </div>

              <select
                value={doc.type}
                onChange={(e) => {
                  const updatedDocs = [...docFiles];
                  updatedDocs[index].type = e.target.value;
                  setDocsFile(updatedDocs);
                }}
                className={styles.selectDropdown}
              >
                <option value="">Select Document Type</option>
                <option value="Auction Sheet">Auction Sheet</option>
                <option value="GD">GD</option>
                <option value="BL">BL</option>
                <option value="BL-Surrender">BL-Surrender</option>
                <option value="ImportDeclaration-Invoice">
                  Import-Declaration-Invoice
                </option>
                <option value="ExportCertificateCancle-Registration">
                  Export-Certificate-Cancle-Registration
                </option>
                <option value="ExportCertificaten">Export-Certificaten</option>
                <option value="Ocean Trading Invoice">
                  Ocean Trading Invoice
                </option>
                <option value="Ownership">Ownership Document</option>
                <option value="KEBS-Certifications">KEBS-Certifications</option>
                <option value="KRA-Payment-Slips">KRA-Payment-Slips</option>
                <option value="Insurance">Insurance</option>
              </select>

              <div className={styles.documentActions}>
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionButton}
                >
                  <img alt="view" src={view} className={styles.viewIcon} />
                </a>

                <a
                  href={fileUrl}
                  download={doc.name || doc.file?.name}
                  className={styles.actionButton}
                >
                  <img
                    alt="download"
                    src={download}
                    className={styles.viewIcon}
                  />
                </a>

                <button
                  className={styles.actionButton}
                  onClick={() => {
                    const updatedDocs = [...docFiles];
                    if (doc.id) {
                      // Existing doc, delete from server
                      handleDeleteExistingDoc(doc.id);
                    }
                    updatedDocs.splice(index, 1);
                    setDocsFile(updatedDocs);
                  }}
                >
                  X
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DocumentUpload;
