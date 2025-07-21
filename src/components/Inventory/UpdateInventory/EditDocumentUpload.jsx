import React, { useState, useRef, useEffect } from "react";
import styles from "./EditDocumentUpload.module.css";
import pdfIcon from "../../../assets/uploads/icons/pdf.svg";
import view from "../../../assets/uploads/icons/view.svg";
import download from "../../../assets/uploads/icons/download.svg";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const API_URL = process.env.REACT_APP_API_URL;
const API_IMAGE = process.env.REACT_APP_API_IMAGE;
function EditDocumentUpload({}) {
  const [docFiles, setDocsFile] = useState([]);
  const [existingDocs, setExistingDocs] = useState([]);
  const [deletedDocs, setDeletedDocs] = useState([]);
  const [newDocs, setNewDocs] = useState([]);
  const fileInputRef = useRef(null);
  const params = useParams();
  const navigate = useNavigate();

  const id = params.id;

  useEffect(() => {
    const fetchDocuments = async (id) => {
      try {
        const res = await axios.get(`${API_URL}/GetVehicleDocuments/${id}`);
        setExistingDocs(res.data);
      } catch (error) {}
    };
    fetchDocuments(id);
  }, [id]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };
 useEffect(() => {
  if (existingDocs?.length) {
    const formattedExistingDocs = existingDocs.map((doc) => ({
      id: doc.id,
      url: `${API_IMAGE}${doc.url}`,
      type: doc.type || "",
      name: doc.url.split("/").pop(),
    }));

    setDocsFile(formattedExistingDocs); // ✅ Replace entire docFiles
  }
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
      const files = Array.from(e.target.files);

      files.forEach((file) => {
        handleNewDocUpload(file, ""); // type will be selected later
      });
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

  const handleDeleteExistingDoc = (docId) => {
    setDeletedDocs((prev) => [...prev, docId]);

    // Also remove from UI
    setDocsFile((prev) => prev.filter((doc) => doc.id !== docId));
  };
  const handleCancle = () => {
    navigate("/Stock");
  };
  const handleNewDocUpload = (file, type) => {
    const docType = file.type.split("/")[1] || "pdf";

    const newDoc = {
      file,
      type,
      doc_type: docType,
    };

    setNewDocs((prev) => [...prev, newDoc]);
    setDocsFile((prev) => [...prev, newDoc]);
  };

  const handleSubmission = async (e) => {
    e.preventDefault()
    const formData = new FormData();

    // Attach new files
    newDocs.forEach((doc) => {
      formData.append("newDocs", doc.file);
      formData.append("types[]", "document");
      formData.append("doc_types[]", doc.doc_type);
    });

    // Send deleted document IDs
    formData.append("deletedDocIds", JSON.stringify(deletedDocs));

    try {
      const res = await axios.post(
        `${API_URL}/editVehicleDocuments/${id}`,
        formData
      );
      toast.success("Documents updated!");
    } catch (error) {
      console.log("Failed to update documents.", error);
    }
  };

  return (
    <div className={styles.container}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <div className={styles.header}>
        <div className={styles.title}>Update General Details</div>
      </div>

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
                  const newType = e.target.value;

                  // Update docFiles
                  const updatedDocs = docFiles.map((d, i) =>
                    i === index ? { ...d, type: newType } : d
                  );
                  setDocsFile(updatedDocs);

                  // Update newDocs
                  setNewDocs((prev) =>
                    prev.map((ndoc) =>
                      ndoc.file === doc.file ? { ...ndoc, type: newType } : ndoc
                    )
                  );
                }}
                className={styles.selectDropdown}
              >
                <option value="">Select Document Type</option>
                <option value="Auction Sheet">Auction Sheet</option>
                <option value="Invoice">Invoice</option>
                <option value="Ownership">Ownership Document</option>
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
      <div className={styles.footerContainer}>
        <div className={styles.buttonGroup}>
          <button className={styles.cancelButton} onClick={handleCancle}>
            Cancel
          </button>
          <button className={styles.saveButton} onClick={handleSubmission}>
            Update
          </button>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default EditDocumentUpload;
