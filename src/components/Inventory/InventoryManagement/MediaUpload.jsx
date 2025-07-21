import React, { useState, useEffect } from "react";
import styles from "./MediaUpload.module.css";

const MediaUploadNew = ({
  videoFiles,
  setVideoFiles,
  photoFiles,
  setPhotoFiles,
  existingPhotos,
  existingVideos,
}) => {
  const [videoPreviews, setVideoPreviews] = useState([]);
  const [photoPreviews, setPhotoPreviews] = useState([]);

  // Corrects mime types for video blobs with incorrect or missing types
  const patchMimeType = (blob, filename) => {
    let type = blob.type;
    const ext = filename.split(".").pop().toLowerCase();

    if (
      !type ||
      type === "application/octet-stream" ||
      type === "application/mp4"
    ) {
      if (ext === "mp4") return "video/mp4";
      if (ext === "webm") return "video/webm";
      if (ext === "mov") return "video/quicktime";
    }

    return type;
  };

  useEffect(() => {
    const fetchAndStoreExistingMedia = async () => {
      const fetchFilesFromUrls = async (urls, type = "image") => {
        return await Promise.all(
          urls.map(async (url, index) => {
            try {
              const response = await fetch(url);
              const blob = await response.blob();

              const extension = url.split(".").pop().toLowerCase();
              const correctedType =
                type === "video" ? patchMimeType(blob, url) : blob.type;

              const name = `${type}-existing-${index}.${extension}`;
              return new File([blob], name, { type: correctedType });
            } catch (err) {
              console.error(`Failed to fetch ${type} from ${url}`, err);
              return null;
            }
          })
        ).then((results) => results.filter(Boolean)); // Remove nulls
      };

      if (existingPhotos?.length) {
        const photoURLs = existingPhotos.map((photo) => photo.fullUrl);
        const photoFilesFromServer = await fetchFilesFromUrls(
          photoURLs,
          "photo"
        );

        setPhotoFiles((prev) => {
          const existingNames = new Set(prev.map((file) => file.name));
          const newUniqueFiles = photoFilesFromServer.filter(
            (file) => !existingNames.has(file.name)
          );
          return [...prev, ...newUniqueFiles];
        });
      }

      if (existingVideos?.length) {
        const videoURLs = existingVideos.map((video) => video.fullUrl);
        const videoFilesFromServer = await fetchFilesFromUrls(
          videoURLs,
          "video"
        );

        setVideoFiles((prev) => {
          const existingNames = new Set(prev.map((file) => file.name));
          const newUniqueFiles = videoFilesFromServer.filter(
            (file) => !existingNames.has(file.name)
          );
          return [...prev, ...newUniqueFiles];
        });
      }
    };

    fetchAndStoreExistingMedia();
  }, [existingPhotos, existingVideos]);

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

  const handleDragOver = (e) => e.preventDefault();

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

  const handleDeletePhoto = (index) => {
    const updated = [...photoFiles];
    updated.splice(index, 1);
    setPhotoFiles(updated);
  };

  const handleDeleteVideo = (index) => {
    const updated = [...videoFiles];
    updated.splice(index, 1);
    setVideoFiles(updated);
  };

  useEffect(() => {
    const videoPreviewURLs = videoFiles.map((file) =>
      URL.createObjectURL(file)
    );
    const photoPreviewURLs = photoFiles.map((file) =>
      URL.createObjectURL(file)
    );

    setVideoPreviews(videoPreviewURLs);
    setPhotoPreviews(photoPreviewURLs);

    return () => {
      videoPreviewURLs.forEach((url) => URL.revokeObjectURL(url));
      photoPreviewURLs.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [videoFiles, photoFiles]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins&display=swap"
        rel="stylesheet"
      />
      <div className={styles.container}>
        {/* === Video Upload === */}
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
                multiple
                onChange={handleVideoUpload}
                style={{ display: "none" }}
              />
            </div>
          </div>

          <div className={styles.uploadCard}>
            <div className={styles.mediaColumn}>
              <div className={styles.sectionTitle}>Uploaded Videos</div>
              <div className={styles.displaySection}>
                {videoPreviews.length === 0 && videoFiles.length === 0 ? (
                  <div className={styles.emptyState}>
                    No videos uploaded yet
                  </div>
                ) : (
                  videoPreviews.map((url, index) => (
                    <div
                      key={`new-video-${index}`}
                      className={styles.thumbnail}
                    >
                      <video
                        src={url}
                        controls
                        className={styles.thumbnailVideo}
                      />
                      <a href={url} download className={styles.downloadBadge}>
                        Download
                      </a>
                      <button
                        className={styles.deleteButton}
                        onClick={() => handleDeleteVideo(index)}
                      >
                        ✕
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* === Photo Upload === */}
        <div className={styles.uploadRow}>
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

          <div className={styles.uploadCard}>
            <div className={styles.mediaColumn}>
              <div className={styles.sectionTitle}>Uploaded Photos</div>
              <div className={styles.displaySection}>
                {photoPreviews.length === 0 && photoFiles.length === 0 ? (
                  <div className={styles.emptyState}>
                    No photos uploaded yet
                  </div>
                ) : (
                  photoPreviews.map((url, index) => (
                    <div
                      key={`new-photo-${index}`}
                      className={styles.thumbnail}
                    >
                      <img
                        src={url}
                        alt={`Photo ${index + 1}`}
                        className={styles.thumbnailImage}
                      />
                      <a href={url} download className={styles.downloadBadge}>
                        Download
                      </a>
                      <button
                        className={styles.deleteButton}
                        onClick={() => handleDeletePhoto(index)}
                      >
                        ✕
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaUploadNew;
