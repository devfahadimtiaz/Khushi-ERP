import React, {useState} from "react";
import styles from "./CreditReceiptDetails.module.css";
import AddPayment from "./AddPayment";

function CreditReceiptDetails({ receipt, onBack, onNavigateToAddPayment }) {
  // Ensure receipt has default values if not provided
  const receiptData = receipt || {
    reciptNo: "CR-2024-001",
    model: "Camry",
    ChassisNo: "JT2BF22K1W0123456",
    amount: "4,850,000",
    customer: "John Smith",
  };

const [selectedReceipt, setSelectedReceipt] = useState("");

  const handlePayClick = (receipt) => {
    setSelectedReceipt(receipt);
  };

  const onCancel = () => {
    setSelectedReceipt("viewReceipt");
  };
 

  if (selectedReceipt=="addPayment") {
    return (
      <AddPayment onBack={onCancel}/>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.rectangle}>
        <div className={styles.card}>
          <div className={styles.headerSection}>
            <div className={styles.titleSection}>
              <div className={styles.title}>Receipt Details</div>
              <div className={styles.reference}>
                Reference: {receiptData?.reciptNo || "CR-2024-001"}
              </div>
            </div>
            <button className={styles.downloadButton}>Download PDF</button>
          </div>

          <div className={styles.vehicleDetailsSection}>
            <div className={styles.threeColumnLayout}>
              <div className={styles.column}>
                <div className={styles.sectionTitle}>Vehicle Details</div>
                <div className={styles.fieldLabel}>Make</div>
                <div className={styles.fieldValue}>Toyota</div>
                <div className={styles.fieldLabel}>Stock No.</div>
                <div className={styles.fieldValue}>ST12345</div>
                <div className={styles.fieldLabel}>Color</div>
                <div className={styles.fieldValue}>Pearl White</div>
              </div>

              <div className={styles.column}>
                <div className={styles.fieldLabel}>Model</div>
                <div className={styles.fieldValue}>
                  {receiptData?.model || "Camry"}
                </div>
                <div className={styles.fieldLabel}>Chassis No.</div>
                <div className={styles.fieldValue}>
                  {receiptData?.ChassisNo || "JT2BF22K1W0123456"}
                </div>
                <div className={styles.fieldLabel}>Mileage</div>
                <div className={styles.fieldValue}>15,000 km</div>
              </div>

              <div className={styles.column}>
                <div className={styles.fieldLabel}>Trim</div>
                <div className={styles.fieldValue}>XSE</div>
                <div className={styles.fieldLabel}>Registration No.</div>
                <div className={styles.fieldValue}>ABC-123</div>
                <div className={styles.fieldLabel}>Year</div>
                <div className={styles.fieldValue}>2023</div>
              </div>
            </div>
          </div>

          <div className={styles.paymentDetailsSection}>
            <div className={styles.paymentHeader}>
              <div className={styles.paymentTitleSection}>
                <div className={styles.sectionTitle}>Pending Payments</div>
                <div className={styles.paymentTypeLabel}>Payment Type</div>
              </div>
              <div className={styles.amountLabel}>Amount</div>
              <div className={styles.dueDateLabel}>Due Date</div>
              <div className={styles.totalSection}>
                <div className={styles.totalRow}>
                  <div className={styles.totalLabel}>Total Sale Amount:</div>
                  <div className={styles.totalAmount}>
                    ¥{receiptData?.amount || "4,850,000"}
                  </div>
                </div>
                <div className={styles.statusLabel}>Status</div>
              </div>
            </div>

            <div className={styles.pendingAmountRow}>
              <div className={styles.pendingAmountLabel}>
                Total Pending Amount
              </div>
              <div className={styles.pendingAmount}>¥350,000</div>
            </div>
          </div>

          <div className={styles.customerSection}>
            <div className={styles.threeColumnLayout}>
              <div className={styles.column}>
                <div className={styles.sectionTitle}>Customer Information</div>
                <div className={styles.fieldLabel}>Name</div>
                <div className={styles.fieldValue}>
                  {receiptData?.customer || "John Smith"}
                </div>
              </div>

              <div className={styles.column}>
                <div className={styles.fieldLabel}>Phone</div>
                <div className={styles.fieldValue}>+81 80-1234-5678</div>
              </div>

              <div className={styles.column}>
                <div className={styles.fieldLabel}>Email</div>
                <div className={styles.fieldValue}>john.smith@email.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonRow}>
        <button className={styles.cancelButton} 
        onClick={()=>onCancel("addPayment")}>
          Cancle
        </button>
        <button className={styles.payButton} 
        onClick={()=>handlePayClick("addPayment")}>
          Pay
        </button>
        </div>
      </div>
    </div>
  );
}

export default CreditReceiptDetails;
