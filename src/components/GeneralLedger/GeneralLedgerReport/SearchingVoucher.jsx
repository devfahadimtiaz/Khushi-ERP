import React from "react";
import styles from "./SearchingVoucher.module.css";
import TableComponenet from "../../../Resources/Tables/TableSupplierStatus";
const TableHeader = [
  { label: "Voucher No", key: "voucherNo" },
  { label: "Date", key: "date" },
  { label: "Type", key: "type" },
  { label: "Description", key: "description" },
  { label: "Debit", key: "debit" },
  { label: "Credit", key: "credit" },
  { label: "Balance", key: "balance" },
];

const TableData = [
  {
    id: 1,
    voucherNo: "VP-2024-001",
    date: "2024-01-15",
    type: "Cash Payment",
    description: "Office Supplies Payment",
    debit: "25,000.00",
    credit: "0.00",
    balance: "25,000.00",
  },
  {
    id: 2,
    voucherNo: "VP-2024-001",
    date: "2024-01-15",
    type: "Cash Payment",
    description: "Office Supplies Payment",
    debit: "25,000.00",
    credit: "0.00",
    balance: "25,000.00",
  },
  {
    id: 3,
    voucherNo: "VP-2024-001",
    date: "2024-01-15",
    type: "Cash Payment",
    description: "Office Supplies Payment",
    debit: "25,000.00",
    credit: "0.00",
    balance: "25,000.00",
  },
];
function SearchingVoucher() {
  return (
    <div className={styles.container}>
      <div className={styles.searchingVoucher}>
        <div className={styles.rectangle}>
          <div className={styles.headerContainer}>
            <div className={styles.headerTitle}>Searching Voucher</div>
          </div>
          <div className={styles.contentBox}>
            <div className={styles.contentInner}>
              <div className={styles.formContainer}>
                <div className={styles.formLayout}>
                  <div className={styles.leftColumn}>
                    <div className={styles.inputGroup}>
                      <div className={styles.inputRow}>
                        <div className={styles.formField}>
                          <div className={styles.labelContainer}>
                            <div className={styles.label}>Financial Year</div>
                            <div className={styles.required}>*</div>
                          </div>
                          <select className={styles.selectField}>
                            <option>Select Year</option>
                          </select>
                        </div>
                        <div className={styles.formField}>
                          <div className={styles.label}>Date Only 1</div>
                          <input type="date" className={styles.dateField}/>
                        </div>
                        <div className={styles.formField}>
                          <div className={styles.label}>Date Only 2</div>
                          <input type="date" className={styles.dateField}/>
                        </div>
                      </div>
                      <div className={styles.inputRow}>
                        <div className={styles.formField}>
                          <div className={styles.label}>Date From</div>
                          <input type="date" className={styles.dateField}/>
                        </div>
                        <div className={styles.formField}>
                          <div className={styles.label}>Date To</div>
                          <input type="date" className={styles.dateField}/>
                        </div>
                        <div className={styles.formField}>
                          <div className={styles.label}>Types</div>
                          <select className={styles.selectField}>
                            <option>Select Year</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rightColumn}>
                    <div className={styles.formField}>
                      <div className={styles.label}>Month</div>
                      <input type="month" className={styles.dateField}/>
                    </div>
                    <div className={styles.formField}>
                      <div className={styles.labelContainer}>
                        <div className={styles.label}>Voucher From</div>
                        <div className={styles.required}>*</div>
                      </div>
                      <select className={styles.selectField}>
                            <option>Select Voucher From</option>
                          </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.label}>View</div>
              <select className={styles.selectField}>
                            <option>Select View</option>
                          </select>
            </div>
            <div className={styles.actionButtons}>
              <button className={styles.resetButton}>
                <img alt="reset" src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/895021c6344d4957e3a7900f55991d1bc08d3342?placeholderIfAbsent=true" className={styles.buttonIcon} />
                <div>Reset</div>
              </button>
              <button className={styles.exportButton}>
                <img alt="export" src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/bd4298b71a92f42ac94b97237ad4c1c13451d937?placeholderIfAbsent=true" className={styles.buttonIcon} />
                <div>Export PDF</div>
              </button>
              <button className={styles.viewReportButton}>View Report</button>
            </div>
            <TableComponenet data={TableData} HeadData={TableHeader} className={styles.tableComponenet}/>
            <div className={styles.tableFooter}>Showing 10 accounts</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchingVoucher;
