import React, { useState } from "react";
import styles from "./MediaUpload.module.css";
import main from "../../uploads/Stock Photos/main.png"

const MediaUploadNew = () => {
  const [videoFiles, setVideoFiles] = useState([]);
  const [photoFiles, setPhotoFiles] = useState([]);

  const handleVideoUpload = (e) => {
    if (e.target.files) {
      setVideoFiles([...videoFiles, ...Array.from(e.target.files)]);
    }
  };

  const handlePhotoUpload = (e) => {
    if (e.target.files) {
      setPhotoFiles([...photoFiles, ...Array.from(e.target.files)]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleVideoDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setVideoFiles([...videoFiles, ...Array.from(e.dataTransfer.files)]);
    }
  };

  const handlePhotoDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setPhotoFiles([...photoFiles, ...Array.from(e.dataTransfer.files)]);
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins&display=swap"
        rel="stylesheet"
      />
      <div className={styles.container}>
        <div className={styles.uploadRow}>
          <div className={styles.uploadCard}>
            <div className={styles.cardHeader}>
              <i className="ti ti-video" />
              <div className={styles.cardTitle}>Upload Video</div>
            </div>
            <div
              className={styles.dropZone}
              onDragOver={handleDragOver}
              onDrop={handleVideoDrop}
              onClick={() => document.getElementById("videoInput").click()}
            >
              Drop your video here or click to browse
              <input
                id="videoInput"
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className={styles.uploadCard}>
            <div className={styles.cardHeader}>
              <i className="ti ti-photo" />
              <div className={styles.cardTitle}>Upload Photos</div>
            </div>
            <div
              className={styles.dropZone}
              onDragOver={handleDragOver}
              onDrop={handlePhotoDrop}
              onClick={() => document.getElementById("photoInput").click()}
            >
              Drop your photos here or click to browse
              <input
                id="photoInput"
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                style={{ display: "none" }}
              />
            </div>
          </div>
        </div>
        <div className={styles.contentSection}>
          <div className={styles.sectionTitle}>Uploaded Videos</div>
          <div className={styles.emptyState}>No videos uploaded yet</div>
          <div className={styles.sectionTitle}>Uploaded Photos</div>
          <div className={styles.emptyState}>No photos uploaded yet</div>
          <div className={styles.uploadRow}>
                    <div className={styles.previewColumn}>
                      <div className={styles.previewContainer}>
                        <img src={main} alt="Preview" className={styles.previewImage} />
                        <button className={styles.downloadBadge}>Download</button>
                      </div>
                      <div className={styles.thumbnailRow}>
                        <div className={styles.thumbnail}>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc509ea21fad8ae8e5b402e5dc464410caa9a729"
                            alt="Thumbnail 1"
                            className={styles.thumbnailImage}
                          />
                        </div>
                        <div className={styles.thumbnail}>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a727226754028216e820faba90fc920998067e46"
                            alt="Thumbnail 2"
                            className={styles.thumbnailImage}
                          />
                        </div>
                        <div className={styles.thumbnail}>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0edecec29c6168dc2ea1217cc25f21ecd9e587cc"
                            alt="Thumbnail 3"
                            className={styles.thumbnailImage}
                          />
                        </div>
                        <div className={styles.thumbnail}>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/caa7d5e6684a4da249fc2f06ce7a7bf52a3ef48a"
                            alt="Thumbnail 4"
                            className={styles.thumbnailImage}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.previewColumn}>
                      <div className={styles.previewContainer}>
                        <img src={main} alt="Preview" className={styles.previewImage} />
                        <button className={styles.downloadBadge}>Download</button>
                      </div>
                      <div className={styles.thumbnailRow}>
                        <div className={styles.thumbnail}>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc509ea21fad8ae8e5b402e5dc464410caa9a729"
                            alt="Thumbnail 1"
                            className={styles.thumbnailImage}
                          />
                        </div>
                        <div className={styles.thumbnail}>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a727226754028216e820faba90fc920998067e46"
                            alt="Thumbnail 2"
                            className={styles.thumbnailImage}
                          />
                        </div>
                        <div className={styles.thumbnail}>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0edecec29c6168dc2ea1217cc25f21ecd9e587cc"
                            alt="Thumbnail 3"
                            className={styles.thumbnailImage}
                          />
                        </div>
                        <div className={styles.thumbnail}>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/caa7d5e6684a4da249fc2f06ce7a7bf52a3ef48a"
                            alt="Thumbnail 4"
                            className={styles.thumbnailImage}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
         </div>
      </div>
    </>
  );
};

export default MediaUploadNew;
