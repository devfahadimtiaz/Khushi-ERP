import React, { useEffect, useState } from "react";
import styles from "./AddNewRole.module.css";
import { useNavigate, useParams } from "react-router-dom";
import ConfirmDeletePopup from "../../../assets/Resources/Popups/ConfirmDeletePopup";
const API_URL = process.env.REACT_APP_API_URL;

const AddNewRole = () => {
  const navigate = useNavigate();
  const params = useParams();
  const roleId = params.id;
  const [formData, setFormData] = useState({
    roleName: "",
    description: "",
  });

  const fetchvehicle = async () => {
    try {
      const response = await fetch(`${API_URL}/getSelectedRole/${roleId}`);
      const data = await response.json();
      console.log(data);

      setFormData({
        roleName: data.role.name || "",
        description: data.role.description || "",
      });

      // Permissions from backend are assumed to be an array of strings like: ["inventory-management", "dashboard"]
      if (Array.isArray(data.permissions)) {
        setSelectedPermissions(new Set(data.permissions));
      }
    } catch (error) {
      console.log("Error fetching role:", error);
    }
  };

  useEffect(() => {
    if (roleId) {
      fetchvehicle();
    }
    return;
  }, [roleId]);

  const [selectedPermissions, setSelectedPermissions] = useState(new Set());

  const permissions = [
    {
      id: "dashboard",
      title: "Dashboard",
      description: "View Main Dashboard",
      category: "Dashboard",
    },
    {
      id: "general-ledger",
      title: "General Ledger",
      description: "View and edit general ledger entries",
      category: "Finance",
    },
    {
      id: "inventory-management",
      title: "Inventory Management",
      description: "Create, edit, and delete inventory items",
      category: "Inventory",
    },
    {
      id: "sales",
      title: "Sales",
      description: "Create, edit, and delete sales orders",
      category: "Sales",
    },
    {
      id: "purchased-expenditure",
      title: "Purchased Expenditure",
      description: "Create, edit, and delete purchased expenditure",
      category: "Purchases",
    },
    {
      id: "log-book",
      title: "Log Book",
      description: "Create, edit, and delete log book entries",
      category: "Log Book",
    },
    {
      id: "logistics",
      title: "Logistics",
      description: "Create, edit, and delete logistics entries",
      category: "Logistics",
    },
    {
      id: "auction_access",
      title: "Auction Access",
      description: "Create, edit, and delete auction access",
      category: "Auction",
    },
    {
      id: "branding",
      title: "Branding",
      description: "Create, edit, and delete branding",
      category: "Branding",
    },
    {
      id: "quotation",
      title: "Quotation",
      description: "Create, edit, and delete quotation",
      category: "Quotation",
    },
    {
      id: "user-management",
      title: "User Management",
      description: "Create, edit, and delete user accounts",
      category: "User Management",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePermissionChange = (permissionId) => {
    setSelectedPermissions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(permissionId)) {
        newSet.delete(permissionId);
      } else {
        newSet.add(permissionId);
      }
      return newSet;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      roleName: formData.roleName,
      description: formData.description,
      permissions: Array.from(selectedPermissions),
    };

    console.log("Form submitted:", payload);

    try {
      const response = await fetch(
        `${API_URL}/${roleId ? `UpdateRole/${roleId}` : "addRole"}`,
        {
          method: roleId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        alert(
          roleId ? "Role updated successfully!" : "Role added successfully!"
        );
        navigate("/RolesManagement");
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form");
    }
  };

  const handleSaveDraft = () => {
    console.log("Saved as draft:", {
      ...formData,
      permissions: Array.from(selectedPermissions),
    });
  };

  const handleCancel = () => {
    console.log("Form cancelled");
    navigate("/RolesManagement");
  };
  
  return (
    <div className={styles.container}>
      {/* Header */}

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Role Information Section */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {roleId ? "Edit" : "Add"} Role Information
            </h2>
            <p className={styles.sectionDescription}>
              Define the basic information for this role
            </p>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Role Name *</label>
              <input
                type="text"
                name="roleName"
                value={formData.roleName}
                onChange={handleInputChange}
                placeholder="Enter role name"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className={styles.textarea}
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* Permissions Section */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Permissions</h2>
            <p className={styles.sectionDescription}>
              Select the permissions this role should have
            </p>
          </div>

          <div className={styles.permissionsGrid}>
            {permissions.map((permission) => (
              <div key={permission.id} className={styles.permissionCard}>
                <div className={styles.permissionHeader}>
                  <input
                    type="checkbox"
                    id={permission.id}
                    checked={selectedPermissions.has(permission.id)}
                    onChange={() => handlePermissionChange(permission.id)}
                    className={styles.checkbox}
                  />
                  <div className={styles.permissionInfo}>
                    <h3 className={styles.permissionTitle}>
                      {permission.title}
                    </h3>
                    <span className={styles.permissionCategory}>
                      {permission.category}
                    </span>
                  </div>
                </div>
                <p className={styles.permissionDescription}>
                  {permission.description}
                </p>
              </div>
            ))}
          </div>

          <div className={styles.summaryCard}>
            <div className={styles.summaryHeader}>
              <svg
                className={styles.summaryIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.3996 7.99961C14.3996 9.697 13.7253 11.3249 12.5251 12.5251C11.3249 13.7253 9.697 14.3996 7.99961 14.3996C6.30222 14.3996 4.67436 13.7253 3.47413 12.5251C2.27389 11.3249 1.59961 9.697 1.59961 7.99961C1.59961 6.30222 2.27389 4.67436 3.47413 3.47413C4.67436 2.27389 6.30222 1.59961 7.99961 1.59961C9.697 1.59961 11.3249 2.27389 12.5251 3.47413C13.7253 4.67436 14.3996 6.30222 14.3996 7.99961ZM8.79961 4.79961C8.79961 5.01178 8.71532 5.21527 8.56529 5.36529C8.41527 5.51532 8.21178 5.59961 7.99961 5.59961C7.78744 5.59961 7.58395 5.51532 7.43392 5.36529C7.2839 5.21527 7.19961 5.01178 7.19961 4.79961C7.19961 4.58744 7.2839 4.38395 7.43392 4.23392C7.58395 4.0839 7.78744 3.99961 7.99961 3.99961C8.21178 3.99961 8.41527 4.0839 8.56529 4.23392C8.71532 4.38395 8.79961 4.58744 8.79961 4.79961ZM7.19961 7.19961C6.98744 7.19961 6.78395 7.2839 6.63392 7.43392C6.4839 7.58395 6.39961 7.78744 6.39961 7.99961C6.39961 8.21178 6.4839 8.41527 6.63392 8.56529C6.78395 8.71532 6.98744 8.79961 7.19961 8.79961V11.1996C7.19961 11.4118 7.2839 11.6153 7.43392 11.7653C7.58395 11.9153 7.78744 11.9996 7.99961 11.9996H8.79961C9.01178 11.9996 9.21527 11.9153 9.36529 11.7653C9.51532 11.6153 9.59961 11.4118 9.59961 11.1996C9.59961 10.9874 9.51532 10.784 9.36529 10.6339C9.21527 10.4839 9.01178 10.3996 8.79961 10.3996V7.99961C8.79961 7.78744 8.71532 7.58395 8.56529 7.43392C8.41527 7.2839 8.21178 7.19961 7.99961 7.19961H7.19961Z"
                  fill="black"
                />
              </svg>
              <span className={styles.summaryLabel}>Selected Permissions</span>
            </div>
            <p className={styles.summaryText}>
              {selectedPermissions.size} permissions selected
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerInfo}>
              <svg
                className={styles.infoIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.3996 7.99961C14.3996 9.697 13.7253 11.3249 12.5251 12.5251C11.3249 13.7253 9.697 14.3996 7.99961 14.3996C6.30222 14.3996 4.67436 13.7253 3.47413 12.5251C2.27389 11.3249 1.59961 9.697 1.59961 7.99961C1.59961 6.30222 2.27389 4.67436 3.47413 3.47413C4.67436 2.27389 6.30222 1.59961 7.99961 1.59961C9.697 1.59961 11.3249 2.27389 12.5251 3.47413C13.7253 4.67436 14.3996 6.30222 14.3996 7.99961ZM8.79961 4.79961C8.79961 5.01178 8.71532 5.21527 8.56529 5.36529C8.41527 5.51532 8.21178 5.59961 7.99961 5.59961C7.78744 5.59961 7.58395 5.51532 7.43392 5.36529C7.2839 5.21527 7.19961 5.01178 7.19961 4.79961C7.19961 4.58744 7.2839 4.38395 7.43392 4.23392C7.58395 4.0839 7.78744 3.99961 7.99961 3.99961C8.21178 3.99961 8.41527 4.0839 8.56529 4.23392C8.71532 4.38395 8.79961 4.58744 8.79961 4.79961ZM7.19961 7.19961C6.98744 7.19961 6.78395 7.2839 6.63392 7.43392C6.4839 7.58395 6.39961 7.78744 6.39961 7.99961C6.39961 8.21178 6.4839 8.41527 6.63392 8.56529C6.78395 8.71532 6.98744 8.79961 7.19961 8.79961V11.1996C7.19961 11.4118 7.2839 11.6153 7.43392 11.7653C7.58395 11.9153 7.78744 11.9996 7.99961 11.9996H8.79961C9.01178 11.9996 9.21527 11.9153 9.36529 11.7653C9.51532 11.6153 9.59961 11.4118 9.59961 11.1996C9.59961 10.9874 9.51532 10.784 9.36529 10.6339C9.21527 10.4839 9.01178 10.3996 8.79961 10.3996V7.99961C8.79961 7.78744 8.71532 7.58395 8.56529 7.43392C8.41527 7.2839 8.21178 7.19961 7.99961 7.19961H7.19961Z"
                  fill="black"
                />
              </svg>
              <span className={styles.requiredText}>
                All fields marked with * are required
              </span>
            </div>

            <div className={styles.footerActions}>
              <button
                type="button"
                onClick={handleCancel}
                className={styles.cancelButton}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveDraft}
                className={styles.draftButton}
              >
                Save as Draft
              </button>
              <button
                type="submit"
                className={styles.createButton}
                disabled={!formData.roleName}
              >
                {roleId ? "Update" : "Create"} Role
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewRole;
