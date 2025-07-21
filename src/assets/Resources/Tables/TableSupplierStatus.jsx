import React, { useState } from "react";
import styles from "./TableSupplierStatus.module.css";

const TableComponenet = ({ HeadData, data, onView, onEdit, onDelete, selectRowOne, SelectRowTwo}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const filteredData = data.filter((row) => {

  
    const matchesSearch = Object.values(row).some(
      (val) => val && val.toString().toLowerCase().includes(searchTerm)
    );
  
    const matchesSupplier = selectRowOne
      ? row.supplier === selectRowOne
      : true;
  
    const matchesStatus = SelectRowTwo
      ? row.status === SelectRowTwo
      : true;
  
    return matchesSearch && matchesSupplier && matchesStatus;
  });
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
              onDoubleClick={(e) => e.preventDefault()}
            >
              {header.label}
              {sortConfig.key === header.key && (
                <span className={styles.sortArrow}>
                  {sortConfig.direction === "asc" ? " ▲" : " ▼"}
                </span>
              )}
            </th>
          ))}
        </thead>
        <tbody className={styles.tableBody}>
          {currentRows.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.tableRow}>
              <td className={styles.tableCellcheckbox}>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => handleRowSelect(row.id)}
                  onDoubleClick={(e) => e.preventDefault()}
                />
              </td>
              {HeadData.map((header, colIndex) => (
                <td key={colIndex} className={styles.tableCell}
                onDoubleClick={(e) => e.preventDefault()}>
                  {row[header.key]}
                </td>
              ))}
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
