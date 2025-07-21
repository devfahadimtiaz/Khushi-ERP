import { Search, Filter, Eye } from "lucide-react";
import classNames from "classnames";
import styles from "./VehicleTable.module.css";
import { useState } from "react";

const statusClasses = {
  Sold: styles.sold,
  "In Stock": styles.inStock,
  Repairable: styles.repairable,
  Transferred: styles.transferred,
};

const VehicleTable = ({ headings, data, currency = "KES", onAdd, onView }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [makeFilter, setMakeFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const rowsPerPage = 10;
  const filteredData = data
    .filter((row) =>
      Object.values(row)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .filter((row) =>
      statusFilter === "All" ? true : row.status === statusFilter
    )
    .filter((row) => (makeFilter === "All" ? true : row.make === makeFilter));
  // Extract unique Statuses and Makes for dropdown filters
  const uniqueStatuses = [
    "All",
    ...Array.from(new Set(data.map((item) => item.status))),
  ];
  const uniqueMakes = [
    "All",
    ...Array.from(new Set(data.map((item) => item.make))),
  ];
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    const aValue = a[sortColumn.toLowerCase().replace(/\s+/g, "")];
    const bValue = b[sortColumn.toLowerCase().replace(/\s+/g, "")];

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    }

    return sortOrder === "asc"
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const formatPrice = (value) => {
    if (typeof value === "number") {
      return new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);
    }
    return value;
  };
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
    setCurrentPage(1);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>Vehicle Inventory</h3>
          <p className={styles.subtitle}>
            Manage your vehicle stock and pricing
          </p>
        </div>
        <div className={styles.actions}>
          <div className={styles.searchWrapper}>
            <Search className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className={styles.searchInput}
            />
          </div>

          {/* Dropdown Filters */}
          <div className={styles.filtersWrapper}>
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className={styles.select}
            >
              {uniqueStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            <select
              value={makeFilter}
              onChange={(e) => {
                setMakeFilter(e.target.value);
                setCurrentPage(1);
              }}
              className={styles.select}
            >
              {uniqueMakes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {headings.map((heading) => (
                <th
                  key={heading}
                  onClick={() => handleSort(heading)}
                  className={styles.sortable}
                >
                  {heading}
                  {sortColumn === heading.toLowerCase().replace(/\s+/g, "") && (
                    <span>{sortOrder === "asc" ? " 🔼" : " 🔽"}</span>
                  )}
                </th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr key={index}>
                {headings.map((heading) => {
                  const key = heading.toLowerCase().replace(/\s+/g, "");
                  const value = row[key];

                  if (key === "status") {
                    return (
                      <td key={key}>
                        <span
                          className={classNames(
                            styles.status,
                            statusClasses[value] || styles.inStock
                          )}
                        >
                          {value}
                        </span>
                      </td>
                    );
                  }

                  if (key === "price")
                    return <td key={key}>{formatPrice(value)}</td>;
                  return <td key={key}>{value}</td>;
                })}
                <td className={styles.actionsCell}>
                  <button
                    className={styles.actionBtn}
                    onClick={() => onView(row)}
                  >
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={styles.paginationButton}
          >
            Prev
          </button>
          <span className={styles.pageIndicator}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={styles.paginationButton}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleTable;
