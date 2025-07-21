import React, { useEffect, useState } from "react";
import styles from "./UserManagement.module.css";
import { useNavigate } from "react-router-dom";
import ConfirmDeletePopup from "../../../assets/Resources/Popups/ConfirmDeletePopup";
import { ToastContainer, toast } from "react-toastify";
const API_URL = process.env.REACT_APP_API_URL;

const UserManagement = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [deletePopup, setDeletePopup] = useState(false);
  const [selectedRow, setSelectedRow] = useState();

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/GetUsers`);
      const data = await response.json(); // ✅ await the .json()
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

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

  const ChevronDownIcon = () => (
    <svg
      width="8"
      height="8"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.60938 1.0625H1.60938L5.60938 9.0625L9.60938 1.0625Z"
        stroke="black"
      />
    </svg>
  );

  const getRoleBadgeClass = (roleType) => {
    switch (roleType) {
      case "Admin":
        return styles.adminBadge;
      case "Sales":
        return styles.salesBadge;
      case "Inventory Manager":
        return styles.technicianBadge;
      default:
        return styles.defaultBadge;
    }
  };
  const handledelete = (id) => {
    setSelectedRow(id);
    setDeletePopup(true);
  };
  const handleCancelDelete = ()=>{
    setDeletePopup(false)
  }
  const handleConfirmDelete = async()=>{
    try {
    const response = await fetch(`${API_URL}/deleteUser/${selectedRow}`, {
      method: "PUT",
    });

    const data = await response.json();

    if (response.ok) {
      alert("User deleted successfully");
      fetchUsers(); // 🔄 Refresh the user list
      setDeletePopup(false)
    } else {
      alert("Delete failed: " + data.message);
    }
  } catch (error) {
    console.error("Delete error:", error);
    alert("Something went wrong.");
  }
  }

  const getStatusBadgeClass = (status) => {
    return status === "active" ? styles.activeBadge : styles.inactiveBadge;
  };
  const addUser = () => {
    navigate("/AddUser");
  };
  const editUser = (id)=>{
    navigate(`/AddUser/${id}`)
  }
  const handlePermissions = (id)=>{
    navigate(`/UserPermissionDetails/${id}`)
  }
if(deletePopup){
  return (
        <ConfirmDeletePopup
          isOpen={deletePopup}
          onClose={handleCancelDelete}
          onConfirm={handleConfirmDelete} 
          title="Delete Role"
          message="Are you sure you want to delete this role?"
        />
      );
}
  return (
    <div className={styles.container}>
      {/* Header */}

      <h1 className={styles.title}>User Management</h1>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Navigation Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabsHeader}>
            <button className={`${styles.tab} ${styles.activeTab}`}>
              Users
            </button>
            <button
              className={styles.tab}
              onClick={() => navigate("/RolesManagement")}
            >
              Roles
            </button>
            <button className={styles.tab}>Permissions</button>
          </div>
          <button className={styles.addNewUserBtn} onClick={() => addUser()}>
            Add New User
          </button>
        </div>

        {/* Controls Section */}
        <div className={styles.controlsSection}>
          <div className={styles.searchInput}>
            <input
              type="text"
              placeholder="Search users..."
              className={styles.searchField}
            />
          </div>
          <div className={styles.roleFilter}>
            <span className={styles.filterText}>All Roles</span>
            <ChevronDownIcon />
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
            <div className={styles.headerCell}>USER</div>
            <div className={styles.headerCell}>Showroom</div>
            <div className={styles.headerCell}>ROLE</div>
            <div className={styles.headerCell}>STATUS</div>
            <div className={styles.headerCell}>LAST LOGIN</div>
            <div className={styles.headerCell}>PERMISSIONS</div>
            <div className={styles.headerCell}>ACTIONS</div>
          </div>

          {/* Table Body */}
          <div className={styles.tableBody}>
            {users.map((user) => (
              <div key={user.id} className={styles.tableRow}>
                <div className={styles.userCell}>
                  <div className={styles.userInfo}>
                    <div className={styles.userName}>{user.name}</div>
                    <div className={styles.userEmail}>{user.email}</div>
                  </div>
                </div>
                <div className={styles.userCell}>
                  {user.showroom_name}
                  </div>
                <div className={styles.roleCell}>
                  <span
                    className={`${styles.roleBadge} ${getRoleBadgeClass(
                      user.role_name
                    )}`}
                  >
                    {user.role_name}
                  </span>
                </div>
                <div className={styles.statusCell}>
                  <span
                    className={`${styles.statusBadge} ${getStatusBadgeClass(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </div>
                <div className={styles.lastLoginCell}>
                  {new Date(user.last_login).toLocaleString("en-GB", {
                    timeZone: "UTC",
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                  })}
                </div>
                <div className={styles.permissionsCell}>
                  <button className={styles.viewPermissionsBtn} onClick={()=>handlePermissions(user.id)}>
                     Permissions
                  </button>
                </div>
                <div className={styles.actionsCell}>
                  <button className={styles.editBtn} onClick={()=>editUser(user.id)}>Edit</button>
                  <button className={styles.deleteBtn} onClick={()=>handledelete(user.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default UserManagement;
