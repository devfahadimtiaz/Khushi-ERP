import React, { use, useState, useEffect } from "react";
import styles from "./BuyerDetails.module.css";
import CameraPopup from "../Componenet/CameraPopup";

const BuyerDetails = ({ handleBuyerDataChange, buyerData }) => {
  const [formData, setFormData] = useState({
    // Buyer details
    firstName: "",
    middleName: "",
    lastName: "",
    nationalId: "",
    kraPinNumber: "",
    occupation: "",
    state: "",
    streetNumber: "",
    city: "",
    zipCode: "",
    poBox: "",
    businessAddress: "",
    gender: "",
    emailBuyer: "",
    socialMedia: "",
    contactNumberBuyer: "",
    residenceContactNumber: "",
    documents: "",
    capturedImage: "",
    previewImage: "",
  });
  useEffect(() => {
    setFormData(buyerData);
  }, [buyerData]);
  const [showCameraPopup, setShowCameraPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    handleBuyerDataChange(updatedData);
  };
  const handleCapture = () => {
    setShowCameraPopup(true);
  };

  const handleImage = (imageSrc) => {
    const blob = dataURLtoBlob(imageSrc);
    const file = new File([blob], "captured_image.jpg", { type: blob.type });
    const objectUrl = URL.createObjectURL(file);
    setFormData({
      ...formData,
      capturedImage: file,
      previewImage: objectUrl,
    });
    handleBuyerDataChange({
      ...formData,
      capturedImage: file,
    });
  };

  function dataURLtoBlob(dataURL) {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    return new Blob([u8arr], { type: mime });
  }

  return (
    <>
      <div className={styles.formSection}>
        <div className={styles.sectionTitle}>Buyer Details</div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>FN</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className={styles.input}
              value={buyerData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>MN</label>
            <input
              type="text"
              name="middleName"
              placeholder="Middle Name"
              className={styles.input}
              value={buyerData.middleName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>LN</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className={styles.input}
              value={buyerData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>GE</label>
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              className={styles.input}
              value={buyerData.gender}
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
              value={buyerData.nationalId}
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
              value={buyerData.kraPinNumber}
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
              value={buyerData.occupation}
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
              value={buyerData.state}
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
              value={buyerData.streetNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>CT</label>
            <input
              type="text"
              placeholder="City"
              name="city"
              className={styles.input}
              value={buyerData.city}
              onChange={handleInputChange}
            />
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
              value={buyerData.zipCode}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>PB</label>
            <input
              type="text"
              name="poBox"
              placeholder="P.O Box"
              className={styles.input}
              value={buyerData.poBox}
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
              value={buyerData.emailBuyer}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>SM</label>
            <input
              type="text"
              name="socialMedia"
              placeholder="Social Media"
              className={styles.select}
              value={buyerData.socialMedia}
              onChange={handleInputChange}
            />
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
              value={buyerData.contactNumberBuyer}
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
              value={buyerData.residenceContactNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>BA</label>
            <input
              type="text"
              name="businessAddress"
              placeholder="Business Address"
              className={styles.input}
              value={buyerData.businessAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>DC</label>
            <input
              type="file"
              name="documents"
              placeholder="Upload Documents"
              className={styles.input}
              value={buyerData.documents}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <div className={styles.uploadContainer}>
              <button
                type="button"
                className={styles.uploadActions}
                onClick={handleCapture}
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
              <img src={formData.previewImage} alt="Captured" />
            </div>
          </div>
        </div>
      </div>

      {showCameraPopup && (
        <CameraPopup
          onClose={() => setShowCameraPopup(false)}
          onCapture={(imageSrc) => {
            handleImage(imageSrc);
          }}
        />
      )}
    </>
  );
};
export default BuyerDetails;
