import React, { useState } from "react";
import styles from "./PermissionManagement.module.css";
import { useNavigate } from "react-router-dom";

const PermissionManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Sample permission data
  const permissions = [
    {
      id: 1,
      name: "Manage Users",
      code: "MANAGE_USERS",
      description: "Create, edit, and delete user accounts",
      module: "User Management",
      moduleColor: "#EEE7FE",
      moduleTextColor: "#4318D1",
      avatarBg: "#EEE7FE",
      avatarText: "M",
      avatarTextColor: "#4318D1",
      roles: ["Admin"],
      created: "2024-01-01",
      isProtected: true,
    },
    {
      id: 2,
      name: "View Reports",
      code: "VIEW_REPORTS",
      description: "Access to view all system reports and analytics",
      module: "Analytics",
      moduleColor: "#D1FAE5",
      moduleTextColor: "#065F46",
      avatarBg: "#D1FAE5",
      avatarText: "V",
      avatarTextColor: "#065F46",
      roles: ["Admin", "Manager"],
      created: "2024-01-01",
      isProtected: false,
    },
    {
      id: 3,
      name: "Edit Sales",
      code: "EDIT_SALES",
      description: "Modify sales records and customer information",
      module: "Sales",
      moduleColor: "#FEF3C7",
      moduleTextColor: "#92400E",
      avatarBg: "#FEF3C7",
      avatarText: "E",
      avatarTextColor: "#92400E",
      roles: ["Admin", "Sales", "Manager"],
      created: "2024-01-02",
      isProtected: false,
    },
    {
      id: 4,
      name: "Manage Inventory",
      code: "MANAGE_INVENTORY",
      description: "Add, edit, and remove inventory items",
      module: "Inventory",
      moduleColor: "#E0E7FF",
      moduleTextColor: "#3730A3",
      avatarBg: "#E0E7FF",
      avatarText: "M",
      avatarTextColor: "#3730A3",
      roles: ["Admin", "Technician"],
      created: "2024-01-03",
      isProtected: false,
    },
    {
      id: 5,
      name: "View Finance",
      code: "VIEW_FINANCE",
      description: "Access financial data and reports",
      module: "Finance",
      moduleColor: "#FEE2E2",
      moduleTextColor: "#DC2626",
      avatarBg: "#FEE2E2",
      avatarText: "V",
      avatarTextColor: "#DC2626",
      roles: ["Admin"],
      created: "2024-01-04",
      isProtected: false,
    },
    {
      id: 6,
      name: "Manage Tickets",
      code: "MANAGE_TICKETS",
      description: "Create and resolve support tickets",
      module: "Support",
      moduleColor: "#F3E8FF",
      moduleTextColor: "#7C3AED",
      avatarBg: "#F3E8FF",
      avatarText: "M",
      avatarTextColor: "#7C3AED",
      roles: ["Admin", "Technician"],
      created: "2024-01-05",
      isProtected: false,
    },
  ];

  const filteredPermissions = permissions.filter(
    (permission) =>
      permission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      permission.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      permission.module.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleExport = () => {
    console.log("Exporting permissions...");
  };

  const handleAddPermission = () => {
    console.log("Adding new permission...");
    navigate("/GrantPermission");
  };

  const handleEdit = (permissionId) => {
    console.log("Editing permission:", permissionId);
  };

  const handleDelete = (permissionId) => {
    console.log("Deleting permission:", permissionId);
  };

  return (
    <div className={styles.container}>
      {/* Main Content */}
      <div className={styles.mainContent}>
        <button className={styles.addButton} onClick={handleAddPermission}>
          Add New Permission
        </button>
        <div className={styles.tableContainer}>
          {/* Table Header */}
          <div className={styles.tableHeader}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search permissions..."
                value={searchTerm}
                onChange={handleSearch}
                className={styles.searchInput}
              />
            </div>

            <button className={styles.exportButton} onClick={handleExport}>
              <svg
                className={styles.exportIcon}
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M8.61003 6.72917V10.7292M8.61003 10.7292L6.61003 8.72917M8.61003 10.7292L10.61 8.72917M11.9434 14.0625H5.27669C4.92307 14.0625 4.58393 13.922 4.33388 13.672C4.08384 13.4219 3.94336 13.0828 3.94336 12.7292V3.39583C3.94336 3.04221 4.08384 2.70307 4.33388 2.45302C4.58393 2.20298 4.92307 2.0625 5.27669 2.0625H9.00069C9.17749 2.06254 9.34703 2.1328 9.47203 2.25783L13.0814 5.86717C13.2064 5.99216 13.2767 6.1617 13.2767 6.3385V12.7292C13.2767 13.0828 13.1362 13.4219 12.8862 13.672C12.6361 13.922 12.297 14.0625 11.9434 14.0625Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Export
            </button>
          </div>

          {/* Table Column Headers */}
          <div className={styles.tableColumnHeaders}>
            <div className={styles.columnHeader}>Permission Name</div>
            <div className={styles.columnHeader}>Description</div>
            <div className={styles.columnHeader}>Module</div>
            <div className={styles.columnHeader}>Roles</div>
            <div className={styles.columnHeader}>Created</div>
            <div className={styles.columnHeader}>Actions</div>
          </div>

          {/* Table Body */}
          <div className={styles.tableBody}>
            {filteredPermissions.map((permission) => (
              <div key={permission.id} className={styles.tableRow}>
                <div className={styles.permissionNameCell}>
                  <div
                    className={styles.permissionAvatar}
                    style={{
                      backgroundColor: permission.avatarBg,
                      color: permission.avatarTextColor,
                    }}
                  >
                    {permission.avatarText}
                  </div>
                  <div className={styles.permissionInfo}>
                    <div className={styles.permissionName}>
                      {permission.name}
                    </div>
                    <div className={styles.permissionCode}>
                      {permission.code}
                    </div>
                  </div>
                </div>

                <div className={styles.descriptionCell}>
                  {permission.description}
                </div>

                <div className={styles.moduleCell}>
                  <span
                    className={styles.moduleBadge}
                    style={{
                      backgroundColor: permission.moduleColor,
                      color: permission.moduleTextColor,
                    }}
                  >
                    {permission.module}
                  </span>
                </div>

                <div className={styles.rolesCell}>
                  {permission.roles.map((role, index) => (
                    <span key={index} className={styles.roleBadge}>
                      {role}
                    </span>
                  ))}
                </div>

                <div className={styles.createdCell}>{permission.created}</div>

                <div className={styles.actionsCell}>
                  <button
                    className={styles.editButton}
                    onClick={() => handleEdit(permission.id)}
                  >
                    Edit
                  </button>
                  {permission.isProtected ? (
                    <span className={styles.protectedText}>Protected</span>
                  ) : (
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDelete(permission.id)}
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

export default PermissionManagement;
