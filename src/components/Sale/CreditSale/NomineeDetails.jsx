import React, { useState, useEffect } from "react";
import styles from "./NomineeDetails.module.css";
import CameraPopup from "../Componenet/CameraPopup";

const NomineeDetails = ({handleNomineeDataChange,nomineeData}) => {
  const [formData, setFormData] = useState({
     nomineeFirstName:"",
    nomineeMiddleName: "",
    nomineeLastName:"",
    nomineeRelationship:"",
    nomineeNationalId:"",
    nomineeKraPinNumber:"",
    nomineeStreetAddress:"",
    nomineeState:"",
    nomineeCity:"",
    nomineeZipCode:"",
    nomineePOBox:"",
    nomineeGender:"",
    nomineeEmailAddress:"",
    nomineeSocialMediaAccounts:"",
    nomineeContactNumber:"",
    nomineeSecondContactNumber:"",
    nomineeResidenceContactNo:"",
    nomineeUploads:"",
  });
  const [showCameraPopup, setShowCameraPopup] = useState(false);
 useEffect(() => {
    setFormData(nomineeData);
  }, [nomineeData]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    handleNomineeDataChange(updatedData);


  };

  return (
    <>
      <div className={styles.formSection}>
        <div className={styles.sectionTitle}>Nominee Details</div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>FN</label>
            <input
              type="text"
              name="nomineeFirstName"
              placeholder="First Name"
              className={styles.input}
              value={nomineeData.nomineeFirstName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>MN</label>
            <input
              type="text"
              name="nomineeMiddleName"
              placeholder="Middle Name"
              className={styles.input}
              value={nomineeData.nomineeMiddleName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>LN</label>
            <input
              type="text"
              name="nomineeLastName"
              placeholder="Last Name"
              className={styles.input}
              value={nomineeData.nomineeLastName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>GE</label>
            <input
              type="text"
              name="nomineeGender"
              placeholder="Gender"
              className={styles.input}
              value={nomineeData.nomineeGender}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>ID</label>
            <input
              type="text"
              name="nomineeNationalId"
              placeholder="National ID/Passport"
              className={styles.input}
              value={nomineeData.nomineeNationalId}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>KP</label>
            <input
              type="text"
              name="nomineeKraPinNumber"
              placeholder="KRA PIN Number"
              className={styles.input}
              value={nomineeData.nomineeKraPinNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>RE</label>
            <input
              type="text"
              name="nomineeRelationship"
              placeholder="Relationship"
              className={styles.input}
              value={nomineeData.nomineeRelationship}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>ST</label>
            <input
              type="text"
              name="nomineeState"
              placeholder="State"
              className={styles.input}
              value={nomineeData.nomineeState}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>SN</label>
            <input
              type="text"
              name="nomineeStreetAddress"
              placeholder="Street Address"
              className={styles.input}
              value={nomineeData.nomineeStreetAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>CT</label>
            <input
              type="text"
              placeholder="City"
              name="nomineeCity"
              className={styles.input}
              value={nomineeData.nomineeCity}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>ZC</label>
            <input
              type="text"
              name="nomineeZipCode"
              placeholder="Zip Code"
              className={styles.input}
              value={nomineeData.nomineeZipCode}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>PB</label>
            <input
              type="text"
              name="nomineePOBox"
              placeholder="P.O Box"
              className={styles.input}
              value={nomineeData.nomineePOBox}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>EM</label>
            <input
              type="text"
              name="nomineeEmailAddress"
              placeholder="Email Address"
              className={styles.input}
              value={nomineeData.nomineeEmailAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>SM</label>
            <input
              type="text"
              name="nomineeSocialMediaAccounts"
              placeholder="Social Media"
              className={styles.select}
              value={nomineeData.nomineeSocialMediaAccounts}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>CN</label>
            <input
              type="text"
              name="nomineeContactNumber"
              placeholder="Contact Number"
              className={styles.input}
              value={nomineeData.nomineeContactNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>RN</label>
            <input
              type="text"
              name="nomineeResidenceContactNo"
              placeholder="Residence Contact Number"
              className={styles.input}
              value={nomineeData.nomineeResidenceContactNo}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>SC</label>
            <input
              type="text"
              name="nomineeSecondContactNumber"
              placeholder="Second Contact Number"
              className={styles.input}
              value={nomineeData.nomineeSecondContactNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>DC</label>
            <input
              type="file"
              name="nomineeUploads"
              placeholder="Upload Documents"
              className={styles.input}
              value={nomineeData.nomineeUploads}
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
export default NomineeDetails;
