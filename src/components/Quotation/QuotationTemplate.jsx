import React, { useState } from "react";
import styles from "./QuotationTemplate.module.css";
import KMPLOGOSILVER from "../../uploads/KMP LOGO SILVER.png";
import img1 from "../../uploads/Quotation/img1.png";
import img2 from "../../uploads/Quotation/img2.png";
import CostBreakDown from "./CostBreakDown";

const QuotationTemplate = () => {
  const [showCostBreakDown, setShowCostBreakDown] = useState(false);
  const handelNextButton = () => {
    setShowCostBreakDown(true);
  };
  const handelBack = () => {
    setShowCostBreakDown(false);
  };
  if (showCostBreakDown) {
    return <CostBreakDown onBack={handelBack} />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img alt="SilverLogo" src={KMPLOGOSILVER} className={styles.logo} />
      </div>

      <div className={styles.headerContent}>
        <div className={styles.leftHeader}>
          <h1 className={styles.title}>PROFORMA QUOTATION</h1>
        </div>
        <div className={styles.rightHeader}>
          <h1 className={styles.title}>REF: KMK 90213</h1>
          <h1 className={styles.title}>28/04/2025</h1>
        </div>
      </div>
      <div className={styles.billingDetails}>
        <div className={styles.leftbillingDetails}>
          <h1 className={styles.titleFrom}>FROM</h1>
          <h1 className={styles.titleSales}>Sale Rep: Khurram Iqbal</h1>
          <h1 className={styles.titleSales}>Contact: +254 705 000001</h1>
        </div>
        <div className={styles.rightbillingDetails}>
          <h1 className={styles.titleFrom}>TO</h1>
          <h1 className={styles.titleSales}>Name: Lambelt moltete </h1>
          <h1 className={styles.titleSales}>Contact: +254 746543419</h1>
        </div>
      </div>
      <div className={styles.VahicleDiscription}>
        <div className={styles.discriptionSection}>
          <h1 className={styles.discription}>Vehicle Description</h1>
        </div>
        <div className={styles.discriptionTable}>
          <table className={styles.table}>
            <thead className={styles.tableHeader}>
              <th className={styles.tableHeading}>Maker/Model</th>
              <th className={styles.tableHeading}>Model Year</th>
              <th className={styles.tableHeading}>Engine</th>
              <th className={styles.tableHeading}>Color</th>
              <th className={styles.tableHeading}>Transmission</th>
              <th className={styles.tableHeading}>Mileage</th>
              <th className={styles.tableHeading}>Interior</th>
              <th className={styles.tableHeading}>Seating Capacity</th>
            </thead>
            <tbody className={styles.tableBody}>
              <tr className={styles.tableRow}>
                <td className={styles.tableData}>Lexus LM 500h</td>
                <td className={styles.tableData}>2025</td>
                <td className={styles.tableData}>2.4L</td>
                <td className={styles.tableData}>Black</td>
                <td className={styles.tableData}>Automatic</td>
                <td className={styles.tableData}>7 km</td>
                <td className={styles.tableData}>Beige</td>
                <td className={styles.tableData}>6</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.vehicleImages}>
          <div className={styles.imageRows}>
            <img alt="img1" src={img1} className={styles.imgs} />
            <img alt="img1" src={img1} className={styles.imgs} />
            <img alt="img1" src={img1} className={styles.imgs} />
          </div>
          <div className={styles.imageRows}>
            <img alt="img1" src={img2} className={styles.imgs} />
            <img alt="img1" src={img2} className={styles.imgs} />
            <img alt="img1" src={img2} className={styles.imgs} />
          </div>
        </div>
        <div className={styles.footer}>
        <div className={styles.footerRow}>
          <div className={styles.Footercolumn}>
            <h1 className={styles.titleFrom}>Contact</h1>
            <h1 className={styles.titleSales}>+254 705 000001</h1>
          </div>
          <div className={styles.Footercolumn}>
            <h1 className={styles.titleFrom}>Email</h1>
            <h1 className={styles.titleSales}>sales.Kenya@khushimotors.com</h1>
          </div>
          <div className={styles.Footercolumn}>
            <h1 className={styles.titleFrom}>Website</h1>
            <h1 className={styles.titleSales}>khushimotors.com/express</h1>
          </div>
        </div>
        <div className={styles.footerRows}>
          <button className={styles.prevButton} disabled>
            Prev
          </button>
          <button className={styles.nextButton} onClick={handelNextButton}>Next</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default QuotationTemplate;
