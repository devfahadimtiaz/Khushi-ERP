import React, { useState, useEffect } from "react";
import styles from "./GarageList.module.css";
import TableComponent from "../../../../assets/Resources/Tables/TableComponent";
import AddGarage from "./AddGarage";
import ViewGarageDetails from "./ViewGarageDetails";
import ConfirmDeletePopup from "../../../../assets/Resources/Popups/ConfirmDeletePopup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const API_URL = process.env.REACT_APP_API_URL;
function GarageList({ onBack, onAddGarage }) {
  const [editData, setEditData] = useState(null);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isViewPopupOpen, setIsViewPopupOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedGarageData, setSelectedGarageData] = useState(null);
  const [garage, setGarage] = useState([]);

  const handleEdit = (row) => {
    setEditData(row);
    setShowAddGarage(true); // Show the AddGarage component when editing
  };
  const [showAddGarage, setShowAddGarage] = useState(false);
  const handleAddGarage = () => {
    setShowAddGarage(true);
  };
  const handleBack = () => {
    setShowAddGarage(false);
    setEditData(null);
    fetchGarageList(); // Re-fetch updated data
  };

  const fetchGarageList = async () => {
    try {
      const response = await fetch(`${API_URL}/GarageList`);
      const data = await response.json();
      setGarage(data);
    } catch (error) {
      console.error("Error fetching garage list:", error);
    }
  };
  useEffect(() => {
    fetchGarageList();
  }, []);

  const handleDeleteClick = (row) => {
    setSelectedRow(row);
    setIsDeletePopupOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedRow || !selectedRow.id) {
      toast.error("No showroom selected to delete.");
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/garage/${selectedRow.id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();

      if (!response.ok) {
        toast.error(
          result.message || "Error occurred while deleting the garage"
        );
        return;
      }

      // Update the state to remove the deleted showroom from the list
      setGarage((prevGarage) =>
        prevGarage.filter((garage) => garage.id !== selectedRow.id)
      );

      toast.success("Garage deleted successfully");
      setIsDeletePopupOpen(false); // Close the delete popup
      setSelectedRow(null); // Reset selected row
    } catch (error) {
      console.error("Error deleting the showroom:", error);
      toast.error("An error occurred while deleting the showroom.");
    }
  };
  const handleCancelDelete = () => {
    setIsDeletePopupOpen(false);
    setSelectedRow(null);
  };
  const handleView = (row) => {
    setSelectedGarageData(row);
    setIsViewPopupOpen(true);
  };

  const handleCloseViewPopup = () => {
    setIsViewPopupOpen(false);
    setSelectedGarageData(null);
  };
  const TableHeader = [
    { label: "No", key: "id" },
    { label: "Company Name", key: "name" },
    { label: "Country", key: "country" },
    { label: "Address", key: "address" },
    { label: "Currency", key: "currency" },
  ];
  if (showAddGarage) {
    return <AddGarage data={editData} onBack={handleBack} />;
  }
  return (
    <>
      <div className={styles.garageList}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.title}>Garage List</div>
            <button className={styles.addButton} onClick={handleAddGarage}>
              <span className={styles.buttonText}>Add New</span>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 10.625H5C4.65833 10.625 4.375 10.3417 4.375 10C4.375 9.65833 4.65833 9.375 5 9.375H15C15.3417 9.375 15.625 9.65833 15.625 10C15.625 10.3417 15.3417 10.625 15 10.625Z"
                    fill="white"
                  ></path>
                  <path
                    d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V5C9.375 4.65833 9.65833 4.375 10 4.375C10.3417 4.375 10.625 4.65833 10.625 5V15C10.625 15.3417 10.3417 15.625 10 15.625Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
          {garage.length === 0 ? (
            <div className={styles.noData}>No garages available.</div>
          ) : (
            <TableComponent
              data={garage}
              HeadData={TableHeader}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDeleteClick}
            />
          )}
          <ConfirmDeletePopup
            isOpen={isDeletePopupOpen}
            onClose={handleCancelDelete}
            onConfirm={handleConfirmDelete}
            title="Delete Garage"
            message="Are you sure you want to delete this garage?"
          />
          <ViewGarageDetails
            isOpen={isViewPopupOpen}
            onClose={handleCloseViewPopup}
            garageData={selectedGarageData}
          />
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default GarageList;
