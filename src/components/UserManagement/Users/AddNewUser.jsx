import React, { useState, useEffect } from "react";
import styles from "./AddNewUser.module.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL;
const AddNewUser = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [formData, setFormData] = useState({
    firstName: "",
    username: "",
    email: "",
    role: "",
    status: "active",
    password: "",
    phone: "",
    showroom: "",
  });
  const [roles, setRoles] = useState([]);
  const [showroom, setShowroom] = useState([]);
  const userId = params.id;

  const getUser = async () => {
    try {
      const response = await fetch(`${API_URL}/getUser/${userId}`);
      const data = await response.json();
      setFormData({
        firstName: data[0].name,
        username: data[0].username,
        email: data[0].email,
        role: data[0].role_id,
        status: data[0].status,
        password: data[0].password,
        phone: data[0].phone,
        showroom: data[0].showroom_id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (userId) {
      getUser();
    }
  }, [userId]);

  const fetchRoles = async () => {
    try {
      const response = await fetch(`${API_URL}/getRoles`);
      const data = await response.json();
      setRoles(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchShowroom = async () => {
    try {
      const response = await fetch(`${API_URL}/GarageList`);
      const data = await response.json();
      setShowroom(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRoles();
    fetchShowroom();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStatusChange = (status) => {
    setFormData((prev) => ({
      ...prev,
      status,
    }));
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      username: "",
      email: "",
      role: "",
      status: "active",
      phone: "",
      showroom: "",
    });
    navigate("/UserManagement");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = userId
      ? `${API_URL}/UpdateUser/${userId}`
      : `${API_URL}/AddUser`;

    const method = userId ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(
          userId ? "User updated successfully!" : "User added successfully!"
        );

        // Reset form
        setFormData({
          firstName: "",
          username: "",
          email: "",
          role: "",
          status: "active",
          password: "",
          phone: "",
          showroom: "",
        });

        // Navigate after short delay
        setTimeout(() => {
          navigate("/UserManagement");
        }, 1000);
      } else {
        console.error("Server error:", data);
        alert("Failed to save user: " + data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      {/* Main Form Container */}
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>
            {userId ? "Edit" : "Add new"} User
          </h2>
          <p className={styles.formDescription}>
            Create a new user account with appropriate permissions and role
            assignment.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* First Name and Last Name Row */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>FIRST NAME</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter last name"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.formRow}>
            {/* Email Address */}

            <div className={styles.formGroup}>
              <label className={styles.label}>EMAIL ADDRESS</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="*************"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Phone</label>
              <input
                type="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Showroom</label>
              <select
                className={styles.dropdownTrigger}
                onChange={handleInputChange}
                value={formData.showroom}
                name="showroom"
              >
                <option className={styles.selectedText} value="" disabled>
                  Select Role
                </option>
                {showroom.map((row) => (
                  <option
                    className={styles.selectedText}
                    key={row.id}
                    value={row.id}
                  >
                    {row.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Role and Status Row */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>ROLE</label>
              <select
                className={styles.dropdownTrigger}
                onChange={handleInputChange}
                value={formData.role}
                name="role"
              >
                <option className={styles.selectedText} value="" disabled>
                  Select Role
                </option>
                {roles.map((role) => (
                  <option
                    className={styles.selectedText}
                    key={role.id}
                    value={role.id}
                  >
                    {role.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>STATUS</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="status"
                    value="active"
                    checked={formData.status === "active"}
                    onChange={() => handleStatusChange("active")}
                    className={styles.radioInput}
                  />
                  <span className={styles.radioText}>Active</span>
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="status"
                    value="inactive"
                    checked={formData.status === "inactive"}
                    onChange={() => handleStatusChange("inactive")}
                    className={styles.radioInput}
                  />
                  <span className={styles.radioText}>Inactive</span>
                </label>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className={styles.formActions}>
            <button
              type="button"
              onClick={handleCancel}
              className={styles.cancelButton}
            >
              Cancel
            </button>
            <button type="submit" className={styles.submitButton}>
              {userId ? "Update" : "Create"} User
            </button>
            <span className={styles.requiredNote}>
              All fields marked with * are required
            </span>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AddNewUser;
