import React, { useState } from "react";
import styles from "./AddQuotationDocument.module.css";

const AddQuotationDocument = ({ onBack }) => {

  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const productData = [
    {
      id: 1,
      product: "Product A",
      category: "Category 1",
      unit: "EA",
      quantity: 100,
      rate: 50,
      value: 5000,
      remarks: "In stock",
    },
    {
      id: 2,
      product: "Product B",
      category: "Category 2",
      unit: "KG",
      quantity: 200,
      rate: 25,
      value: 5000,
      remarks: "Limited",
    },
    {
      id: 3,
      product: "Product C",
      category: "Category 3",
      unit: "PCS",
      quantity: 150,
      rate: 30,
      value: 4500,
      remarks: "Available",
    },
  ];

  const handleItemSelection = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Add Quotation Document</span>
        <div className={styles.profileCircle} />
      </div>

      <div className={styles.formCard}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Request No#*</label>
            <input
              type="text"
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Request Date</label>
            <input
              type="date"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Financial Year*</label>
            <select className={styles.selectInput}>
            <option disabled>Select Financial Year</option>
              <option>2020-2021</option>
              <option>2021-2022</option>
              <option>2022-2023</option>
              <option>2024-2025</option>
              <option>2025-2026</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Active Months*</label>
            <input
              type="text"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Quotation#*</label>
            <input
              type="text"
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Purchase Type*</label>
            <select className={styles.selectInput}>
               <option disabled>Select Type</option>
              <option>Type A</option>
              <option>Type B</option>
              <option>Type C</option>
            </select>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Quotation Date*</label>
            <input
              type="date"
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Status</label>
            <select className={styles.selectInput}>
              <option disabled>Select Status</option>
              <option >Complete</option>
              <option >In Complete</option>
              <option >Draft</option>
            </select>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Supplier*</label>
            <select className={styles.selectInput}>
              <option disabled>Select Supplies</option>
              <option >Supplies A</option>
              <option >Supplies B</option>
              <option >Supplies C</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Address</label>
            <input
              type="text"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Performa Invoice</label>
            <select className={styles.selectInput}>
              <option disabled>Select Supplies</option>
              <option >Supplies A</option>
              <option >Supplies B</option>
              <option >Supplies C</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Bank</label>
            <input
              type="text"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Store</label>
            <input type="text" placeholder="Enter Store Details" className={styles.textInput}/>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Security Fee</label>
            <input type="text" placeholder="Enter Security Fee" className={styles.textInput}/>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Free Date</label>
            <input type="date"  className={styles.textInput}/>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Check DD</label>
            <input type="text" placeholder="Enter Check DD" className={styles.textInput}/>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Remarks</label>
            <input type="text" placeholder="Enter Remarks" className={styles.textInput}/>
          </div>
        </div>
      </div>

      <div className={styles.productCard}>
        <div className={styles.productSelectionRow}>
          <select className={styles.productSelector}>
            <option disabled>Select Product</option>
            <option>Product A</option>
            <option>Product B</option>
            <option>Product C</option>
            
          </select>
          <select className={styles.productSelector}>
            <option disabled>Select Category</option>
            <option>Category A</option>
            <option>Category B</option>
            <option>Category C</option>
            
          </select>
        </div>



        <table className={styles.tableCard}>
        <thead className={styles.tableHeader}>
          <th>Select</th>
          <th>Product</th>
          <th>Category</th>
          <th>U/M</th>
          <th>Quantity</th>
          <th>Rate</th>
          <th>Value</th>
          <th>Remarks</th>
          <th>Actions</th>
        </thead>

        {productData.map((item) => (
          <tr key={item.id} className={styles.tableRow}>
            <td
              className={styles.checkbox}
              onClick={() => handleItemSelection(item.id)}
            >
              {selectedItems.includes(item.id) && (
                <div className={styles.checkboxInner} />
              )}
            </td>
            <td>{item.product}</td>
            <td>{item.category}</td>
            <td>{item.unit}</td>
            <td>{item.quantity}</td>
            <td>${item.rate}</td>
            <td>${item.value}</td>
            <td>{item.remarks}</td>
            <td className={styles.actionButtons}>
              <button className={styles.editButton}>Edit</button>
              <button className={styles.deleteButton}>Delete</button>
            </td>
          </tr>
        ))}
</table>
        <div className={styles.pagination}>
          <span className={styles.selectionInfo}>
            {selectedItems.length} items selected
          </span>
          <div className={styles.pageNumbers}>
            <div
              className={
                currentPage === 1 ? styles.pageNumberActive : styles.pageNumber
              }
              onClick={() => setCurrentPage(1)}
            >
              1
            </div>
            <div
              className={
                currentPage === 2 ? styles.pageNumberActive : styles.pageNumber
              }
              onClick={() => setCurrentPage(2)}
            >
              2
            </div>
            <div
              className={
                currentPage === 3 ? styles.pageNumberActive : styles.pageNumber
              }
              onClick={() => setCurrentPage(3)}
            >
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuotationDocument;
