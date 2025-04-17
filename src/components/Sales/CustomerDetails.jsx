import React, { useRef, useState } from "react";
import styles from "./CustomerDetails.module.css";
import Webcam from "react-webcam";

const CustomerDetails = () => {

  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = () => {
    const screenshot = webcamRef.current.getScreenshot();
    setImage(screenshot); // base64 image
  };

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>Details</div>
      <div className={styles.formRow}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>FN</div>
          <input
            type="text"
            placeholder="First Name"
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>LN</div>
          <input
            type="text"
            placeholder="Last Name"
            className={styles.inputField}
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>ID</div>
          <input
            type="text"
            placeholder="National ID/Passport"
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>KP</div>
          <input
            type="text"
            placeholder="KRA PIN Number"
            className={styles.inputField}
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>OC</div>
          <input
            type="text"
            placeholder="Occupation"
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>ST</div>
          <input
            type="text"
            placeholder="State"
            className={styles.inputField}
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>SN</div>
          <input
            type="text"
            placeholder="Street Number"
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>CT</div>
          <input type="text" placeholder="City" className={styles.inputField} />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>ZC</div>
          <input
            type="text"
            placeholder="Zip Code"
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>BA</div>
          <input
            type="text"
            placeholder="Business Address"
            className={styles.inputField}
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>EM</div>
          <input
            type="text"
            placeholder="Email Address"
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>SM</div>
          <input
            type="text"
            placeholder="Select Social Media"
            className={styles.inputField}
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>CN</div>
          <input
            type="text"
            placeholder="Contact Number"
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>RN</div>
          <input
            type="text"
            placeholder="Residence Contact Number"
            className={styles.inputField}
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>DC</div>
          <input
            type="text"
            placeholder="Upload Documents"
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.capturePhotoWrapper}>
            {!image ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={300}
            videoConstraints={{ facingMode: "environment" }} // or "user"
          />
          <button className={styles.inputLabel} onClick={capture}>📸 Take Photo</button>
        </>
      ) : (
        <>
          <img src={image} alt="Captured" width={300} />
          <button className={styles.inputLabel} onClick={() => setImage(null)}>Retake</button>
        </>
      )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
