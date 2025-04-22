import React, { useState } from "react";
import styles from "./GarageList.module.css";
import TableComponenet from "../../../Resources/Tables/TableComponent";
import AddGarage from "./AddGarage";
import ConfirmDeletePopup from "../../../Resources/Popups/ConfirmDeletePopup";
function GarageList({ onBack, onAddGarage }) {
  const [viewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const handleView = (row) => setViewData(row);
  const handleEdit = (row) => setEditData(true);
  const handleDelete = (row) => {
    // your delete logic here
    console.log("Delete this row:", row);
  };
  const handleDeleteClick = (row) => {
    setSelectedRow(row);
    setIsDeletePopupOpen(true);
  };

  const handleConfirmDelete = () => {
    // your actual delete logic here (e.g., API call)
    console.log("Deleting row:", selectedRow);

    // after deletion
    setIsDeletePopupOpen(false);
    setSelectedRow(null);
  };
  const handleCancelDelete = () => {
    setIsDeletePopupOpen(false);
    setSelectedRow(null);
  };
  const TableHeader = [
    { label: "No", key: "no" },
    { label: "Company Name", key: "companyName" },
    { label: "Country", key: "country" },
    { label: "City", key: "city" },
    { label: "Garage Name", key: "garageName" },
  ];
  const Tabledata = [
    {
      id: 1,
      no: "01",
      companyName: "Khushi Motors",
      country: "Kenya",
      city: "Mombasa",
      garageName: "Khushi Motors Mombasa ",
    },
    {
      id: 2,
      no: "02",
      companyName: "Khushi Motors",
      country: "Kenya",
      city: "Nairobi",
      garageName: "Khushi Motors Nairobi ",
    },
    {
      id: 3,
      no: "03",
      companyName: "Khushi Motors",
      country: "Kenya",
      city: "Mombasa",
      garageName: "Khushi Motors Mombasa Commercial ",
    },
    {
      id: 4,
      no: "04",
      companyName: "Khushi Motors",
      country: "Tanzania",
      city: "Dar es Salam",
      garageName: "Khushi Motors Tanzania ",
    },
    {
      id: 5,
      no: "05",
      companyName: "Khushi Motors",
      country: "Uganda",
      city: "Kampala",
      garageName: "Khushi Motors Uganda ",
    },
    {
      id: 6,
      no: "06",
      companyName: "Khushi Motors",
      country: "Pakistan",
      city: "Gujranwala",
      garageName: "Khushi Motors Pakistan ",
    },
  ];
  if (editData) {
    return <AddGarage data={editData} onClose={() => setEditData(false)} />;
  }
  return (
    <>
      <div className={styles.garageList}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.title}>Garage List</div>
            <button className={styles.addButton} onClick={onAddGarage}>
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
          <TableComponenet
            data={Tabledata}
            HeadData={TableHeader}
            onEdit={handleEdit}
            onDelete={handleDeleteClick}
          />
          <ConfirmDeletePopup
            isOpen={isDeletePopupOpen}
            onClose={handleCancelDelete}
            onConfirm={handleConfirmDelete}
            title="Delete Garage"
            message="Are you sure you want to delete this garage?"
          />
        </div>
      </div>
    </>
  );
}

export default GarageList;
