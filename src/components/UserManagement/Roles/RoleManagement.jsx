import React, { useState, useEffect } from "react";
import styles from "./RoleManagement.module.css";
import { useNavigate } from "react-router-dom";
import ConfirmDeletePopup from "../../../assets/Resources/Popups/ConfirmDeletePopup";
import { ToastContainer, toast } from "react-toastify";
const API_URL = process.env.REACT_APP_API_URL;

const RoleManagement = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [deletePopup, setDeletePopUp] = useState(false);
  const [selectedRow, setSelectedRow] = useState();

  const fetchRoles = async () => {
    try {
      const response = await fetch(`${API_URL}/getRoles`);
      const data = await response.json();
      console.log(data);
      setRoles(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRoles();
  }, []);

  const handleEdit = (id) => {
    navigate(`/AddRole/${id}`);
  };
  const confirmDelete = (id) => {
    setDeletePopUp(true);
    setSelectedRow(id);
  };
  const handleCancelDelete = () => {
    setDeletePopUp(false);
  };
 const handleDelete = async () => {
  try {
    const response = await fetch(`${API_URL}/deleteRole/${selectedRow}`, {
      method: "DELETE",
    });

    const result = await response.json();

    if (response.ok) {
      alert("Role deleted successfully!");
      setDeletePopUp(false);
      setSelectedRow(null);
      fetchRoles(); // Refresh the list
    } else {
      alert("Error: " + result.message);
    }
  } catch (error) {
    console.error("Error deleting role:", error);
    alert("Failed to delete role.");
  }
};


  const DownloadIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.60905 6.72917V10.7292M8.60905 10.7292L6.60905 8.72917M8.60905 10.7292L10.609 8.72917M11.9424 14.0625H5.27572C4.92209 14.0625 4.58296 13.922 4.33291 13.672C4.08286 13.4219 3.94238 13.0828 3.94238 12.7292V3.39583C3.94238 3.04221 4.08286 2.70307 4.33291 2.45302C4.58296 2.20298 4.92209 2.0625 5.27572 2.0625H8.99972C9.17651 2.06254 9.34605 2.1328 9.47105 2.25783L13.0804 5.86717C13.2054 5.99216 13.2757 6.1617 13.2757 6.3385V12.7292C13.2757 13.0828 13.1352 13.4219 12.8852 13.672C12.6351 13.922 12.296 14.0625 11.9424 14.0625Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  if (deletePopup) {
    return (
      <ConfirmDeletePopup
        isOpen={deletePopup}
        onClose={handleCancelDelete}
        onConfirm={handleDelete} 
        title="Delete Role"
        message="Are you sure you want to delete this role?"
      />
    );
  }

  return (
    <div className={styles.container}>
      {/* Background */}
      <div className={styles.backgroundLayer}></div>

      {/* Header */}
      <h1 className={styles.title}>Roles Management</h1>

      {/* Main Content Card */}
      <div>
        {/* Tab Navigation and Controls */}
        <div className={styles.tabSection}>
          <div className={styles.tabContainer}>
            <button
              className={styles.tab}
              onClick={() => navigate("/UserManagement")}
            >
              Users
            </button>
            <button className={`${styles.tab} ${styles.activeTab}`}>
              Roles
            </button>
            <button className={styles.tab}>Permissions</button>
          </div>
          <button
            className={styles.addNewRoleBtn}
            onClick={() => navigate("/AddRole")}
          >
            Add New Role
          </button>
        </div>

        {/* Search and Export Section */}
        <div className={styles.controlsSection}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search roles..."
              className={styles.searchInput}
            />
          </div>
          <div className={styles.exportBtn}>
            <DownloadIcon />
            <span className={styles.exportText}>Export</span>
          </div>
        </div>

        {/* Table */}
        <div className={styles.tableContainer}>
          {/* Table Header */}
          <div className={styles.tableHeader}>
            <div className={styles.headerCell}>ROLE NAME</div>
            <div className={styles.headerCell}>DESCRIPTION</div>
            <div className={styles.headerCell}>USERS</div>
            <div className={styles.headerCell}>PERMISSIONS</div>
            <div className={styles.headerCell}>CREATED</div>
            <div className={styles.headerCell}>ACTIONS</div>
          </div>

          {/* Table Body */}
          <div className={styles.tableBody}>
            {roles.map((role) => (
              <div key={role.id} className={styles.tableRow}>
                <div className={styles.roleCell}>
                  <div className={styles.roleInfo}>
                    <div className={styles.roleName}>{role.name}</div>
                    {role.roleType && (
                      <div className={styles.roleType}>{role.roleType}</div>
                    )}
                  </div>
                </div>
                <div className={styles.descriptionCell}>{role.description}</div>
                <div className={styles.usersCell}>{role.users}</div>
                <div className={styles.permissionsCell}>{role.permissions}</div>
                <div className={styles.createdCell}>{role.created_at}</div>
                <div className={styles.actionsCell}>
                  <button
                    className={styles.editBtn}
                    onClick={() => handleEdit(role.id)}
                  >
                    Edit
                  </button>
                  {role.name === "Admin" ? (
                    <span className={styles.protectedBtn}>Protected</span>
                  ) : (
                    <button
                      className={styles.deleteBtn}
                      onClick={() => confirmDelete(role.id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleManagement;
