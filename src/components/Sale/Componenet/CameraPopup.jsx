import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import styles from "./CameraPopup.module.css";

const CameraPopup = ({ onClose, onCapture }) => {
  const webcamRef = useRef(null);
  const [isCameraReady, setIsCameraReady] = useState(false);

  const handleUserMedia = useCallback(() => {
    setIsCameraReady(true);
  }, []);

  const capturePhoto = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (onCapture && imageSrc) {
        onCapture(imageSrc);
      }
      onClose();
    }
  }, [webcamRef, onCapture, onClose]);

  return (
    <div className={styles.overlay}>
      <div className={styles.popupContainer}>
        <div className={styles.popupHeader}>
          <div className={styles.popupTitle}>Take a Picture</div>
          <div className={styles.closeButton} onClick={onClose}>
            ×
          </div>
        </div>
        <div className={styles.cameraContainer}>
          {!isCameraReady && (
            <div className={styles.loadingIndicator}>Loading camera...</div>
          )}
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              width: 1280,
              height: 720,
              facingMode: "user",
            }}
            onUserMedia={handleUserMedia}
            className={styles.webcam}
          />
        </div>
        <div className={styles.actionButtons}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button
            className={styles.takePictureButton}
            onClick={capturePhoto}
            disabled={!isCameraReady}
          >
            Take Picture
          </button>
        </div>
      </div>
    </div>
  );
};

export default CameraPopup;
