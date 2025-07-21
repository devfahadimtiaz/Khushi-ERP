import React, { useState, useEffect } from "react";
import styles from "./InventoryListView.module.css";
import DropdownMenu from "./component/DropdownMenu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ConfirmDeletePopup from "../../../assets/Resources/Popups/ConfirmDeletePopup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Eye, Edit2, Trash2 } from "lucide-react";

const API_URL = process.env.REACT_APP_API_URL;
const editDropdownOptions = [
  { label: "General ", value: "general" },
  { label: "Media", value: "media" },
  { label: "Documents", value: "documents" },
  { label: "Expense", value: "expense" },
];
const InventoryTable = ({ onBack }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [vehicleData, setVehicleData] = useState([]);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedShowroom, setSelectedShowroom] = useState();
  const [userInfo, setUserInfo] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [hoveredEditId, setHoveredEditId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  //handle Sorting
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...vehicleData].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const valA = a[sortConfig.key];
    const valB = b[sortConfig.key];

    if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
    if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const navigate = useNavigate();

  //Fetching User Session
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
      setSelectedShowroom(userInfo.showroom);
    }
  }, [userInfo]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const handleView = (id) => {
    navigate(`/VehicleDetails/${id}`);
  };
  const handleEdit = (row) => {
    navigate(`/AddStock/${row}`); // Show the AddStock component when editing
  };
  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleDeleteClick = (row) => {
    setSelectedItems([row]);
    setIsDeletePopupOpen(true);
  };
  const handleCancelDelete = () => {
    setIsDeletePopupOpen(false);
    setSelectedItems("");
  };
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/delVehicle/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (!response.ok) {
        toast.error(
          result.message || "Error occurred while deleting the Vehicle"
        );
        return;
      }
      setVehicleData((prev) => prev.filter((item) => item.id !== id));
      toast.success("Vehicle deleted successfully");
      setIsDeletePopupOpen(false); // Close the delete popup
      selectedItems(null); // Reset selected row
    } catch (error) {
      console.error(error);
    }
  };
  const filteredData = sortedData.filter((item) => {
    const matchesSearch =
      item.make.toLowerCase().includes(searchTerm) ||
      item.model.toLowerCase().includes(searchTerm) ||
      item.stock_no.toLowerCase().includes(searchTerm);
    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Sample data - in a real application, this would come from props or an API
  useEffect(() => {
    if (selectedShowroom === 11) {
      axios
        .get(`${API_URL}/vehicles/${selectedShowroom}`)
        .then((res) => setVehicleData(res.data))
        .catch((err) => console.log(err));
    } else if (selectedShowroom) {
      axios
        .get(`${API_URL}/vehicles/${selectedShowroom}`)
        .then((res) => setVehicleData(res.data))
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`${API_URL}/vehicles`)
        .then((res) => setVehicleData(res.data))
        .catch((err) => console.log(err));
    }
  }, [selectedShowroom]);
  const onNavigateToGridView = () => {
    navigate("/InventoryGridView");
  };

  const handleCheckboxChange = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };
  const handleDropdownSelect = (action, rowId) => {
    if (action === "edit") {
      handleEdit(rowId);
    } else if (action === "documents") {
      navigate(`/EditDocumentUploads/${rowId}`)
    } else if (action === "media") {
      navigate(`/EditMediaUpload/${rowId}`);
    } else if (action === "general") {
      navigate(`/EditGeneralDetails/${rowId}`);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>Inventory Management</div>
          <div className={styles.actions}>
            <button className={styles.btnGray} onClick={onNavigateToGridView}>
              Grid View
            </button>
            <button
              className={styles.btnGreen}
              onClick={() => navigate("/AddStock/")}
            >
              Add New
            </button>
          </div>
        </div>
        <div className={styles.searchBar}>
          <div className={styles.searchInputWrapper}>
            <input
              type="text"
              className={styles.searchPlaceholder}
              placeholder="Search by Make, Model, or Stock No..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className={styles.dropdownWrapper}>
            <select
              className={styles.dropdown}
              value={statusFilter}
              onChange={handleStatusChange}
            >
              <option value="All">All Statuses</option>
              <option value="In Stock">In Stock</option>
              <option value="Sold">Sold</option>
              <option value="Transferring">Transferring</option>
              <option value="Repairable">Repairable</option>
              <option value="Repairing">Repairing</option>
              <option value="Repaired">Repaired</option>
              <option value="Pending Payment">Pending Payment</option>
            </select>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th
                    onClick={() => handleSort("id")}
                    style={{ cursor: "pointer" }}
                  >
                    ID{" "}
                    {sortConfig.key === "id"
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </th>
                  {selectedShowroom === 11 && (
                    <th
                      onClick={() => handleSort("name")}
                      style={{ cursor: "pointer" }}
                    >
                      Destination{" "}
                      {sortConfig.key === "name"
                        ? sortConfig.direction === "asc"
                          ? "↑"
                          : "↓"
                        : ""}
                    </th>
                  )}
                  <th
                    onClick={() => handleSort("make")}
                    style={{ cursor: "pointer" }}
                  >
                    Make{" "}
                    {sortConfig.key === "make"
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </th>
                  <th
                    onClick={() => handleSort("model")}
                    style={{ cursor: "pointer" }}
                  >
                    Model{" "}
                    {sortConfig.key === "model"
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </th>

                  <th
                    onClick={() => handleSort("year")}
                    style={{ cursor: "pointer" }}
                  >
                    Year{" "}
                    {sortConfig.key === "year"
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </th>
                  <th
                    onClick={() => handleSort("mileage")}
                    style={{ cursor: "pointer" }}
                  >
                    ODO{" "}
                    {sortConfig.key === "mileage"
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </th>
                  <th
                    onClick={() => handleSort("stock_no")}
                    style={{ cursor: "pointer" }}
                  >
                    Stock{" "}
                    {sortConfig.key === "stock_no"
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </th>
                  <th
                    onClick={() => handleSort("engine")}
                    style={{ cursor: "pointer" }}
                  >
                    CC{" "}
                    {sortConfig.key === "engine"
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </th>
                  <th
                    onClick={() => handleSort("body_type")}
                    style={{ cursor: "pointer" }}
                  >
                    Body{" "}
                    {sortConfig.key === "body_type"
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </th>
                  <th
                    onClick={() => handleSort("fuel_type")}
                    style={{ cursor: "pointer" }}
                  >
                    Fuel{" "}
                    {sortConfig.key === "fuel_type"
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </th>
                  <th
                    onClick={() => handleSort("transmission")}
                    style={{ cursor: "pointer" }}
                  >
                    Trans.{" "}
                    {sortConfig.key === "transmission"
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </th>
                  <th
                    onClick={() => handleSort("drive_type")}
                    style={{ cursor: "pointer" }}
                  >
                    Drive{" "}
                    {sortConfig.key === "drive_type"
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </th>
                  <th
                    onClick={() => handleSort("doors")}
                    style={{ cursor: "pointer" }}
                  >
                    Doors{" "}
                    {sortConfig.key === "doors"
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </th>
                  <th
                    onClick={() => handleSort("seats")}
                    style={{ cursor: "pointer" }}
                  >
                    Seats{" "}
                    {sortConfig.key === "seats"
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </th>

                  <th
                    onClick={() => handleSort("auction_grade")}
                    style={{ cursor: "pointer" }}
                  >
                    Grade{" "}
                    {sortConfig.key === "auction_grade"
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </th>
                  <th
                    onClick={() => handleSort("status")}
                    style={{ cursor: "pointer" }}
                  >
                    Status{" "}
                    {sortConfig.key === "status"
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </th>
                  <th className={styles.actionColumn}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className={styles.checkboxContainer}>
                        <input
                          type="checkbox"
                          className={styles.checkbox}
                          checked={selectedItems.includes(item.id)}
                          onChange={() => handleCheckboxChange(item.id)}
                        />
                      </div>
                    </td>
                    {selectedShowroom === 11 && <td>{item.name}</td>}
                    <td>{item.make}</td>
                    <td>{item.model}</td>

                    <td>{item.year}</td>
                    <td>{item.mileage} KM</td>
                    <td>{item.stock_no}</td>
                    <td>{item.engine}</td>
                    <td>{item.body_type}</td>
                    <td>{item.fuel_type}</td>
                    <td>{item.transmission}</td>
                    <td>{item.drive_type}</td>
                    <td>{item.doors}</td>
                    <td>{item.seats}</td>

                    <td>{item.auction_grade}</td>
                    <td
                      className={`${styles.statusBadge} ${
                        item.status === "Sold"
                          ? styles.statusSold
                          : styles.statusInStock
                      }`}
                    >
                      {item.status}
                    </td>

                    <td style={{ position: "relative" }}>
                      <div className={styles.rowActions}>
                        <button
                          className={styles.viewBtn}
                          onClick={() => handleView(item.id)}
                        >
                          <Eye size={14} />
                        </button>
                        <div
                          className={styles.editWrapper}
                          onMouseEnter={() => setHoveredEditId(item.id)}
                          onMouseLeave={() => setHoveredEditId(null)}
                          style={{
                            position: "relative",
                            display: "inline-block",
                          }}
                        >
                          <button className={styles.editBtn}>
                            <Edit2 size={14} />
                          </button>

                          {hoveredEditId === item.id && (
                            <DropdownMenu
                              options={editDropdownOptions}
                              onSelect={(value) =>
                                handleDropdownSelect(value, item.id)
                              }
                              onClose={() => setHoveredEditId(null)}
                            />
                          )}
                        </div>

                        <button
                          className={styles.deleteBtn}
                          onClick={() => handleDeleteClick(item.id)}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.paginationContainer}>
              <div>
                Show:
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(parseInt(e.target.value));
                    setCurrentPage(1);
                  }}
                >
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                entries
              </div>
              <div className={styles.paginationButtons}>
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  Prev
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmDeletePopup
        isOpen={isDeletePopupOpen}
        onClose={handleCancelDelete}
        onConfirm={() => handleDelete(selectedItems[0])}
        title="Delete Vehicle"
        message="Are you sure you want to delete this Vehicle?"
      />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default InventoryTable;
