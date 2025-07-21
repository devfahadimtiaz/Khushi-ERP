import React, { useState, useEffect } from "react";
import styles from "./RoadTestRecords.module.css";
import TableComponent from "../../../assets/Resources/Tables/TableComponent";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import ConfirmDeletePopup from "../../../assets/Resources/Popups/ConfirmDeletePopup";
import RoadTestForm from "./RoadTestForm";
const API_URL = process.env.REACT_APP_API_URL;

function RoadTestRecords() {
  const [editData, setEditData] = useState(null);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isViewPopupOpen, setIsViewPopupOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRoadTest, setSelectedRoadTest] = useState(null);
  const [showRoadForm, setShowRoadForm] = useState(false);
  const [roadTest, setRoadTest] = useState([]);

  const handleEdit = (row) => {
    setEditData(row);
    console.log(row)
    setShowRoadForm(true); // Show the AddGarage component when editing
  };
  const handleEditMessage = (message)=>{
  toast.success(message|| "Road Test Data Added Successfully");
  }
  
  const handleBack = () => {
    setShowRoadForm(false);
    setEditData(null);
    fetchRoadTest(); // Re-fetch updated data
  };

  const fetchRoadTest = async () => {
    try {
      const res = await fetch(`${API_URL}/getRoadTest`);
      const data = await res.json();
      setRoadTest(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchRoadTest();
  }, []);
  const handleCancelDelete = () => {
    setIsDeletePopupOpen(false);
    setSelectedRow(null);
  };
  const handleDeleteClick = (row) => {
    setSelectedRow(row);
    setIsDeletePopupOpen(true);
  };
  const handleConfirmDelete = async () => {
    if (!selectedRow || !selectedRow.id) {
      toast.error("Please select a row to delete");
      return;
    }
    try {
      const response = await fetch(
        `${API_URL}/deleteRoadTest/${selectedRow.id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message);
        return;
      }
      setRoadTest((prev) =>
        prev.filter((roadTest) => roadTest.id !== selectedRow.id)
      );

      toast.success("Deleted Successfully");
      setIsDeletePopupOpen(false);
      setSelectedRow(null);
    } catch (error) {
      toast.error("An Error Occure while deleting");
    }
  };
  const handleView = (row) => {
    setSelectedRoadTest(row);
    setIsViewPopupOpen(true);
  };

  const handleCloseViewPopup = () => {
    setIsViewPopupOpen(false);
    setSelectedRoadTest(null);
  };
  const TableHeader = [
    { label: "No", key: "id" },
    { label: "Name", key: "name" },
    { label: "License No.", key: "driving_license_no" },

    { label: "Address", key: "address" },
    { label: "City", key: "city" },
    { label: "State", key: "state" },
    { label: "Sales Person", key: "sales_person" },
  ];
  if(showRoadForm){
    return(
      <RoadTestForm data ={editData} onBack={handleBack} message={handleEditMessage}/>
    )
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>Road Test Records</span>

        </div>
        {roadTest.length === 0 ? (
          <div className={styles.noData}>No garages available.</div>
        ) : (
          <TableComponent
            data={roadTest}
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
          title="Delete Road Test"
          message="Are you sure you want to delete this record?"
        />

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
}

export default RoadTestRecords;
