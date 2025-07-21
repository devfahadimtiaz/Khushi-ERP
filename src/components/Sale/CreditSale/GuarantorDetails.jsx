import React, { useState, useEffect } from "react";
import styles from "./GuarantorDetails.module.css";
import CameraPopup from "../Componenet/CameraPopup";

const GuarantorDetails = ({ handleGuarantorDataChange, guarantorData }) => {
  const [formData, setFormData] = useState({
    // Buyer details
    guarantorFirstName: "",
    guarantorMiddleName: "",
    guarantorLastName: "",
    guarantorNationalId: "",
    guarantorStreetAddress: "",
    guarantorState: "",
    guarantorCity: "",
    guarantorZipCode: "",
    guarantorPOBox: "",
    guarantorGender: "",
    guarantorEmailAddress: "",
    guarantorSocialMediaAccounts: "",
    guarantorUploads:"",
  });
  const [showCameraPopup, setShowCameraPopup] = useState(false);
 useEffect(() => {
    setFormData(guarantorData);
  }, [guarantorData]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    handleGuarantorDataChange(updatedData);
  };
  return (
    <>
      <div className={styles.formSection}>
        <div className={styles.sectionTitle}>Guarantor Details</div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>FN</label>
            <input
              type="text"
              name="guarantorFirstName"
              placeholder="First Name"
              className={styles.input}
              value={guarantorData.guarantorFirstName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>MN</label>
            <input
              type="text"
              name="guarantorMiddleName"
              placeholder="Middle Name"
              className={styles.input}
              value={guarantorData.guarantorMiddleName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>LN</label>
            <input
              type="text"
              name="guarantorLastName"
              placeholder="Last Name"
              className={styles.input}
              value={guarantorData.guarantorLastName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>ID</label>
            <input
              type="text"
              name="guarantorNationalId"
              placeholder="National ID/Passport"
              className={styles.input}
              value={guarantorData.guarantorNationalId}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>GE</label>
            <input
              type="text"
              name="guarantorGender"
              placeholder="Gender"
              className={styles.input}
              value={guarantorData.guarantorGender}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>ST</label>
            <input
              type="text"
              name="guarantorState"
              placeholder="State"
              className={styles.input}
              value={guarantorData.guarantorState}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>SN</label>
            <input
              type="text"
              name="guarantorStreetAddress"
              placeholder="Street Number"
              className={styles.input}
              value={guarantorData.guarantorStreetAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>CT</label>
            <input
              type="text"
              name="guarantorCity"
              placeholder="City"
              className={styles.input}
              value={guarantorData.guarantorCity}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>ZC</label>
            <input
              type="text"
              name="guarantorZipCode"
              placeholder="Zip Code"
              className={styles.input}
              value={guarantorData.guarantorZipCode}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>PO</label>
            <input
              type="text"
              name="guarantorPOBox"
              placeholder="P.O Box"
              className={styles.input}
              value={guarantorData.guarantorPOBox}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>EM</label>
            <input
              type="text"
              name="guarantorEmailAddress"
              placeholder="Email Address"
              className={styles.input}
              value={guarantorData.guarantorEmailAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>SM</label>
            <input
              type="text"
              placeholder="Social Media"
              name="guarantorSocialMediaAccounts"
              className={styles.input}
              value={guarantorData.guarantorSocialMediaAccounts}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
         
          <div className={styles.formGroup}>
            <label className={styles.label}>DC</label>
            <div className={styles.uploadContainer}>
              <input
                type="text"
                name="guarantorUploads"
                placeholder="Upload Documents"
                className={styles.inputDC}
                value={guarantorData.guarantorUploads}
                onChange={handleInputChange}
              />
              <button
                className={styles.uploadActions}
                onClick={() => setShowCameraPopup(true)}
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.uploadIcon}
                >
                  <path
                    d="M12.5001 15.2V3M12.5001 3L7.29175 8.18182M12.5001 3L17.7084 8.18182"
                    stroke="#fff"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M2.08325 15.2V19.4C2.08325 20.2837 2.82944 21 3.74992 21H21.2499C22.1704 21 22.9166 20.2837 22.9166 19.4V15.2"
                    stroke="#fff"
                    strokeWidth="2"
                  ></path>
                </svg>
                <span className={styles.captureText} type="button">
                  Capture Photo
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {showCameraPopup && (
        <CameraPopup
          onClose={() => setShowCameraPopup(false)}
          onCapture={(imageSrc) => {
            setFormData({
              ...formData,
              documents: "Photo captured",
              capturedImage: imageSrc,
            });
          }}
        />
      )}
    </>
  );
};
export default GuarantorDetails;
