import React, { useRef, useState } from "react";
import styles from "./NomineeDetails.module.css";
import Webcam from "react-webcam";
const NomineeDetails = () => {

  const webcamRef = useRef(null);
    const [image, setImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
    };
  
    const handleUpload = async () => {
      if (!selectedFile) return alert("Please select a file.");
  
      const formData = new FormData();
      formData.append("document", selectedFile);
  
      try {
        const response = await fetch("http://your-backend.com/upload", {
          method: "POST",
          body: formData,
        });
  
        if (response.ok) {
          alert("File uploaded successfully!");
        } else {
          alert("Upload failed.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong.");
      }
    };
    const capture = () => {
      const screenshot = webcamRef.current.getScreenshot();
      setImage(screenshot); // base64 image
    };
  return (
    <div className={styles.body}>
      <div className={styles.container}>
         <div className={styles.detailsSection}>
                <div className={styles.sectionTitle} >Nominee Details</div>
                <div className={styles.detailsGrid}>
                  <div className={styles.detailCard}>
                    <div className={styles.detailLabel}>FN</div>
                    <input type="text" className={styles.detailValue} placeholder="First Name"/>
                  </div>
                  <div className={styles.detailCard}>
                    <div className={styles.detailLabel}>LN</div>
                    <input type="text" className={styles.detailValue} placeholder="Last Name"/>
                  </div>
                </div>
        
                <div className={styles.detailsGrid}>
                  <div className={styles.detailCard}>
                    <div className={styles.detailLabel}>ID</div>
                    <input type="text" className={styles.detailValue} placeholder="National ID/Passport"/>
                  </div>
                  <div className={styles.detailCard}>
                    <div className={styles.detailLabel}>KP</div>
                    <input type="text" className={styles.detailValue} placeholder="KRA PIN Number"/>
                  </div>
                </div>
        
                <div className={styles.detailsGrid}>
                  <div className={styles.detailCard}>
                    <div className={styles.detailLabel}>OC</div>
                    <input type="text" className={styles.detailValue} placeholder="Occupation"/>
                  </div>
                  <div className={styles.detailCard}>
                    <div className={styles.detailLabel}>ST</div>
                    <input type="text" className={styles.detailValue} placeholder="State"/>
                  </div>
                </div>
        
                <div className={styles.detailsGrid}>
                  <div className={styles.detailCard}>
                    <div className={styles.detailLabel}>SN</div>
                    <input type="text" className={styles.detailValue} placeholder="Street Number"/>
                  </div>
                  <div className={styles.detailCard}>
                    <div className={styles.detailLabel}>CT</div>
                    <input type="text" className={styles.detailValue} placeholder="City"/>
                  </div>
                </div>
        
                <div className={styles.detailsGrid}>
                  <div className={styles.detailCard}>
                    <div className={styles.detailLabel}>ZC</div>
                    <input type="text" className={styles.detailValue} placeholder="Zip Code"/>
                  </div>
                  <div className={styles.detailCard}>
                    <div className={styles.detailLabel}>BA</div>
                    <input type="text" className={styles.detailValue} placeholder="Business Address"/>
                  </div>
                </div>
        
                <div className={styles.detailsGrid}>
                  <div className={styles.detailCard}>
                    <div className={styles.detailLabel}>EM</div>
                    <input type="text" className={styles.detailValue} placeholder="Email Addresss"/>
                  </div>
                  <div className={styles.detailCard}>
                    <div className={styles.detailLabel}>SM</div>
                    <input type="text" className={styles.detailValue} placeholder="Select Social Media"/>
                  </div>
                </div>
        
                <div className={styles.detailsGrid}>
                  <div className={styles.detailCard}>
                    <div className={styles.detailLabel}>CN</div>
                    <input type="text" className={styles.detailValue} placeholder="Contact Number"/>
                  </div>
                  <div className={styles.detailCard}>
                    <div className={styles.detailLabel}>RN</div>
                    <input type="text" className={styles.detailValue} placeholder="Residence Contact Number"/>
                  </div>
                </div>
        
                <div className={styles.detailsGrid}>
                  <div className={styles.detailCard}>
                    <div className={styles.detailLabel}>DC</div>
                    <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx,.png,.jpg" />
              <button onClick={handleUpload} className="ml-2 px-4 py-1 bg-blue-600 text-white rounded">
                Upload
              </button>
                  </div>
                  <div className={styles.photoCard}>
                  {!image ? (
                <>
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={300}
                    videoConstraints={{ facingMode: "environment" }} // or "user"
                  />
                  <button onClick={capture}>📸 Take Photo</button>
                </>
              ) : (
                <>
                  <img src={image} alt="Captured" width={300} />
                  <button onClick={() => setImage(null)}>Retake</button>
                </>
              )}
                  </div>
                </div>
              </div>
      </div>
    </div>
  );
};

export default NomineeDetails;
