import React, { useState, useEffect } from "react";
import styles from "./EditMediaUpload.module.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const API_IMAGE = process.env.REACT_APP_API_IMAGE;
const EditMediaUpload = () => {
  const [videoFiles, setVideoFiles] = useState([]);
  const [photoFiles, setPhotoFiles] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const [showroom, setShowroom] = useState();
  const [userInfo, setUserInfo] = useState([]);
  const [deletedPhotoIds, setDeletedPhotoIds] = useState([]);
  const [deletedVideoIds, setDeletedVideoIds] = useState([]);
  const [existingPhotoIds, setExistingPhotoIds] = useState([]);
  const [existingVideoIds, setExistingVideoIds] = useState([]);

  useEffect(() => {
    console.log("Photos File : ", photoFiles);
    console.log("Video Files : ", videoFiles);
    console.log("Delete PhotoIds : ", deletedPhotoIds);
    console.log("Delete Videos Ids : ", deletedVideoIds);
    console.log("Existance PhotoIds : ", existingPhotoIds);
    console.log("Existance Videos Ids : ", existingVideoIds);
  }, [
    photoFiles,
    videoFiles,
    deletedPhotoIds,
    deletedVideoIds,
    existingPhotoIds,
    existingVideoIds,
  ]);

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`${API_URL}/dashboard`, {
        withCredentials: true,
      });
      const data = response.data;
      if (data.valid) {
        setUserInfo(data);
      } else {
        console.log("User is not logged in");
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);
  useEffect(() => {
    if (userInfo) {
      setShowroom(userInfo.showroom);
    }
  }, [userInfo]);

  useEffect(() => {
    const fetchVehicle = async (id) => {
      try {
        const res = await axios.get(`${API_URL}/fetcheMediaDetails/${id}`);
        const photos = res.data.filter((item) => item.type === "image");
        const videos = res.data.filter((item) => item.type === "video");
        setExistingPhotoIds(photos.map((p) => p.id));
        setExistingVideoIds(videos.map((v) => v.id));

        const formattedPhotos = photos.map((item) => ({
          ...item,
          preview: `${API_IMAGE}${item.url}`, // Adjust this based on actual property name
        }));

        const formattedVideos = videos.map((item) => ({
          ...item,
          preview: `${API_IMAGE}${item.url}`, // Adjust this too
        }));

        setPhotoFiles(formattedPhotos);
        setVideoFiles(formattedVideos);
      } catch (error) {
        console.error("Error fetching vehicle details:", error);
      }
    };
    fetchVehicle(id);
  }, [id]);

  useEffect(() => {
    return () => {
      photoFiles.forEach((item) => {
        if (typeof item !== "string") {
          URL.revokeObjectURL(item.preview);
        }
      });
      videoFiles.forEach((item) => {
        if (typeof item !== "string") {
          URL.revokeObjectURL(item.preview);
        }
      });
    };
  }, []);

  // Example for adding new photo files
  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    const newPhotos = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setPhotoFiles((prev) => [...prev, ...newPhotos]);
  };

  const handleVideoChange = (e) => {
    const files = Array.from(e.target.files);
    const newVideos = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setVideoFiles((prev) => [...prev, ...newVideos]);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleVideoDrop = (e) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files);
    const newVideos = dropped.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setVideoFiles((prev) => [...prev, ...newVideos]);
  };

  const handlePhotoDrop = (e) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files);
    const newPhotos = dropped.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setPhotoFiles((prev) => [...prev, ...newPhotos]);
  };

  const handleDeletePhoto = (index) => {
    const updated = [...photoFiles];
    const removed = updated.splice(index, 1)[0];

    if (removed.id) {
      setDeletedPhotoIds((prev) => [...prev, removed.id]);
    }

    if (typeof removed !== "string") {
      URL.revokeObjectURL(removed.preview);
    }

    setPhotoFiles(updated);
  };

  const handleDeleteVideo = (index) => {
    const updated = [...videoFiles];
    const removed = updated.splice(index, 1)[0];

    if (removed.id) {
      setDeletedVideoIds((prev) => [...prev, removed.id]);
    }

    if (typeof removed !== "string") {
      URL.revokeObjectURL(removed.preview);
    }

    setVideoFiles(updated);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append new images
    photoFiles.forEach((item) => {
      if (!item.id && item.file) {
        formData.append("photos", item.file);
      }
    });

    // Append new videos
    videoFiles.forEach((item) => {
      if (!item.id && item.file) {
        formData.append("videos", item.file);
      }
    });

    // Send IDs of media to delete
    formData.append("deletedPhotoIds", JSON.stringify(deletedPhotoIds));
    formData.append("deletedVideoIds", JSON.stringify(deletedVideoIds));

    try {
      await axios.post(`${API_URL}/updateMedia/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Media updated successfully!");
      navigate("/Stock");
    } catch (error) {
      toast.error("Failed to update media");
      console.error("Media update error:", error);
    }
  };
  const handleCancle = () => {
    navigate("/Stock");
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins&display=swap"
        rel="stylesheet"
      />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>Update General Details</div>
        </div>
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
                onChange={handleVideoChange}
                style={{ display: "none" }}
              />
            </div>
          </div>

          <div className={styles.uploadCard}>
            <div className={styles.mediaColumn}>
              <div className={styles.sectionTitle}>Uploaded Videos</div>
              <div className={styles.displaySection}>
                {videoFiles.length === 0 ? (
                  <div className={styles.emptyState}>
                    No videos uploaded yet
                  </div>
                ) : (
                  videoFiles.map((item, index) => {
                    const url = typeof item === "string" ? item : item.preview;
                    return (
                      <div key={`video-${index}`} className={styles.thumbnail}>
                        <video controls className={styles.thumbnailImage}>
                          <source src={url} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <a href={url} download className={styles.downloadBadge}>
                          Download
                        </a>
                        <button
                          onClick={() => handleDeleteVideo(index)}
                          className={styles.deleteButton}
                        >
                          ✕
                        </button>
                      </div>
                    );
                  })
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
                onChange={handlePhotoChange}
                style={{ display: "none" }}
              />
            </div>
          </div>

          <div className={styles.uploadCard}>
            <div className={styles.mediaColumn}>
              <div className={styles.sectionTitle}>Uploaded Photos</div>
              <div className={styles.displaySection}>
                {photoFiles.length === 0 && photoFiles.length === 0 ? (
                  <div className={styles.emptyState}>
                    No photos uploaded yet
                  </div>
                ) : (
                  photoFiles.map((item, index) => {
                    const url = typeof item === "string" ? item : item.preview;
                    return (
                      <div key={`photo-${index}`} className={styles.thumbnail}>
                        <img
                          src={url}
                          alt={`img ${index + 1}`}
                          className={styles.thumbnailImage}
                        />
                        <a href={url} download className={styles.downloadBadge}>
                          Download
                        </a>
                        <button
                          onClick={() => handleDeletePhoto(index)}
                          className={styles.deleteButton}
                        >
                          ✕
                        </button>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
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
    </>
  );
};

export default EditMediaUpload;
