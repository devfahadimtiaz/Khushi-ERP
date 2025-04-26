import React, { useState } from "react";
import styles from "./GuarantorDetails.module.css";
import CameraPopup from "../Componenet/CameraPopup";

const GuarantorDetails = () => {
  const [formData, setFormData] = useState({
    // Buyer details
    firstName: "",
    lastName: "",
    nationalId: "",
    kraPinNumber: "",
    occupation: "",
    state: "",
    streetNumber: "",
    city: "",
    zipCode: "",
    businessAddress: "",
    emailBuyer: "",
    socialMedia: "",
    contactNumberBuyer: "",
    residenceContactNumber: "",
    documents: "",
    capturedImage: "",
  });
  const [showCameraPopup, setShowCameraPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
            name="firstName"
            placeholder="First Name"
            className={styles.input}
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>LN</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className={styles.input}
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>ID</label>
          <input
            type="text"
            name="nationalId"
            placeholder="National ID/Passport"
            className={styles.input}
            value={formData.nationalId}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>KP</label>
          <input
            type="text"
            name="kraPinNumber"
            placeholder="KRA PIN Number"
            className={styles.input}
            value={formData.kraPinNumber}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>OC</label>
          <input
            type="text"
            name="occupation"
            placeholder="Occupation"
            className={styles.input}
            value={formData.occupation}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>ST</label>
          <input
            type="text"
            name="state"
            placeholder="State"
            className={styles.input}
            value={formData.state}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>SN</label>
          <input
            type="text"
            name="streetNumber"
            placeholder="Street Number"
            className={styles.input}
            value={formData.streetNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>CT</label>
          <select
            name="city"
            className={styles.select}
            value={formData.city}
            onChange={handleInputChange}
          >
            <option value="">City</option>
            <option value="nairobi">Nairobi</option>
            <option value="mombasa">Mombasa</option>
            <option value="kisumu">Kisumu</option>
          </select>
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>ZC</label>
          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            className={styles.input}
            value={formData.zipCode}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>BA</label>
          <input
            type="text"
            name="businessAddress"
            placeholder="Business Address"
            className={styles.input}
            value={formData.businessAddress}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>EM</label>
          <input
            type="text"
            name="emailBuyer"
            placeholder="Email Address"
            className={styles.input}
            value={formData.emailBuyer}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>SM</label>
          <select
            name="socialMedia"
            className={styles.select}
            value={formData.socialMedia}
            onChange={handleInputChange}
          >
            <option value="">Select Social Media</option>
            <option value="facebook">Facebook</option>
            <option value="twitter">Twitter</option>
            <option value="instagram">Instagram</option>
          </select>
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>CN</label>
          <input
            type="text"
            name="contactNumberBuyer"
            placeholder="Contact Number"
            className={styles.input}
            value={formData.contactNumberBuyer}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>RN</label>
          <input
            type="text"
            name="residenceContactNumber"
            placeholder="Residence Contact Number"
            className={styles.input}
            value={formData.residenceContactNumber}
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
              name="documents"
              placeholder="Upload Documents"
              className={styles.inputDC}
              value={formData.documents}
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
