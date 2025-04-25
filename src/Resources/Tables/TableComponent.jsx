import React, { useState } from "react";
import styles from "./TableComponent.module.css";

const TableComponenet = ({ HeadData, data, onView, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const filteredData = data.filter((row) =>
    Object.values(row).some(
      (val) => val && val.toString().toLowerCase().includes(searchTerm)
    )
  );
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Sort the filtered data
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];

    if (aVal === null || aVal === undefined) return 1;
    if (bVal === null || bVal === undefined) return -1;

    const aStr = aVal.toString().toLowerCase();
    const bStr = bVal.toString().toLowerCase();

    if (aStr < bStr) return sortConfig.direction === "asc" ? -1 : 1;
    if (aStr > bStr) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };
  const [selectedRows, setSelectedRows] = useState([]);
  const allCurrentPageIds = currentRows.map((row) => row.id);

  const handleRowSelect = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    const isAllSelected = allCurrentPageIds.every((id) =>
      selectedRows.includes(id)
    );
    if (isAllSelected) {
      setSelectedRows((prev) =>
        prev.filter((id) => !allCurrentPageIds.includes(id))
      );
    } else {
      setSelectedRows((prev) => [...new Set([...prev, ...allCurrentPageIds])]);
    }
  };
  const ViewIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={styles.iconSvg}
    >
      <path
        d="M10 4.37C3.75 4.37 1.25 10 1.25 10C1.25 10 3.75 15.63 10 15.63C16.25 15.63 18.75 10 18.75 10C18.75 10 16.25 4.37 10 4.37Z"
        stroke="#344054"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z"
        stroke="#344054"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const EditIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={styles.iconSvg}
    >
      <path
        d="M11.25 3.75L4.375 11.25V15H8.125L15.625 7.5M11.25 3.75L13.125 1.875L16.875 5.625L15 7.5L11.25 3.75Z"
        stroke="#4318D1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const DeleteIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={styles.iconSvg}
    >
      <path
        d="M16.875 4.375H3.125M8.125 8.125V13.125M11.875 8.125V13.125M15.625 4.375V16.25C15.625 16.4158 15.5592 16.5747 15.4419 16.6919C15.3247 16.8092 15.1658 16.875 15 16.875H5C4.83424 16.875 4.67527 16.8092 4.55806 16.6919C4.44085 16.5747 4.375 16.4158 4.375 16.25V4.375"
        stroke="#CF2129"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <>
      <div className={styles.filterContainer}>
        <div className={styles.searchWrapper}>
          <span className={styles.searchIcon}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
        </div>
      </div>

      <table className={styles.tableContainer}>
        <thead className={styles.tableHeader}>
          <th className={styles.tableCellcheckbox}>
            <input
              type="checkbox"
              onChange={handleSelectAll}
              checked={
                allCurrentPageIds.length > 0 &&
                allCurrentPageIds.every((id) => selectedRows.includes(id))
              }
            />
          </th>
          {HeadData.map((header, idx) => (
            <th
              key={idx}
              className={styles.tableCellheading}
              onClick={() => handleSort(header.key)}
              style={{ cursor: "pointer" }}
            >
              {header.label}
              {sortConfig.key === header.key && (
                <span className={styles.sortArrow}>
                  {sortConfig.direction === "asc" ? " ▲" : " ▼"}
                </span>
              )}
            </th>
          ))}
          <th className={styles.tableCellheading}>Actions</th>
        </thead>
        <tbody className={styles.tableBody}>
          {currentRows.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.tableRow}>
              <td className={styles.tableCellcheckbox}>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => handleRowSelect(row.id)}
                />
              </td>
              {HeadData.map((header, colIndex) => (
                <td key={colIndex} className={styles.tableCell}>
                  {row[header.key]}
                </td>
              ))}
              <td className={styles.tableCell}>
                <button
                  className={styles.actionButton}
                >
                  <ViewIcon />
                </button>
                <button
                  className={styles.actionButton}
                  onClick={() => onEdit(row)}
                >
                  <EditIcon />
                </button>
                <button
                  className={styles.actionButton}
                  onClick={() => onDelete(row)}
                >
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination Controls */}
      <div className={styles.paginationContainer}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`${styles.pageButton} ${
              currentPage === i + 1 ? styles.activePage : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default TableComponenet;
