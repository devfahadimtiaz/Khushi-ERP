import React from "react";
import styles from "./ViewBankDetail.module.css";
import { PLACEHOLDER_IMAGES } from "../../../assets/images/placeholder";

/**
 * ViewGarageDetails - A popup component for displaying garage details
 * @param {Object} props Component props
 * @param {boolean} props.isOpen Controls visibility of the popup
 * @param {Function} props.onClose Callback function when close is clicked
 * @param {Object} props.bankData The garage data to display
 */
const ViewBankDetails = ({ isOpen, onClose, bankData }) => {
  if (!isOpen) return null;
  console.log(bankData);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.popup}>

          <div className={styles.contentCard}>
            <div className={styles.headerSection}>
              <div className={styles.headerInfo}>
                <div className={styles.garageName}>
                  {bankData?.branch_name ||
                    "Khushi Motors Commercial Vehicle Branch"}
                </div>
                <div className={styles.locationInfo}>
                  <div className={styles.countryText}>
                    {bankData?.account_number || "Kenya"}
                  </div>
                  <div className={styles.divider}></div>
                  <div className={styles.currencyText}>
                    Currency: {bankData?.currency || "KES"}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.contentBody}>
              <div className={styles.sectionsContainer}>
                <div className={styles.sectionColumn}>
                  <div className={styles.infoSection}>
                    <div className={styles.sectionTitle}>Basic Information</div>
                    <div className={styles.fieldsContainer}>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>Bank Name</div>
                        <div className={styles.fieldValue}>
                          {bankData?.bank_name ||
                            "Khushi Motors Commercial Vehicle Branch"}
                        </div>
                      </div>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>Account Title</div>
                        <div className={styles.fieldValue}>
                          {bankData?.account_title || "Kenya"}
                        </div>
                      </div>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>Branch Code</div>
                        <div className={styles.fieldValue}>
                          {bankData?.branch_code || "KES"}
                        </div>
                      </div><div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>Bank Code</div>
                        <div className={styles.fieldValue}>
                          {bankData?.bank_code || "KES"}
                        </div>
                      </div>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>	Swift Code</div>
                        <div className={styles.fieldValue}>
                          {bankData?.swift_code || "KES"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.sectionColumn}>
                  <div className={styles.infoSection}>
                    <div className={styles.sectionTitle}>
                    </div>
                    <div className={styles.fieldsContainer}>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>Account Number</div>
                        <div className={styles.fieldValue}>
                          {bankData?.account_number ||
                            "123 Industrial Area, Mombasa Road, Nairobi, Kenya"}
                        </div>
                      </div>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>Address</div>
                        <div className={styles.fieldValue}>
                          {bankData?.address || "+254 700 123 456"}
                        </div>
                      </div>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>Status</div>
                        <div className={styles.fieldValue}>
                          {bankData?.status || "info@khushimotors.co.ke"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.footer}>
                <button className={styles.backButton} onClick={onClose}>
                  Close
                </button>
                <div className={styles.lastUpdated}>
                  <span className={styles.lastUpdatedLabel}>Last updated:</span>
                  <span className={styles.lastUpdatedDate}>
                    {bankData?.updated_at || "March 15, 2024"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBankDetails;
