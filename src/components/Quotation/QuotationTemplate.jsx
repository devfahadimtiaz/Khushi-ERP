import React, { useState } from "react";
import styles from "./QuotationTemplate.module.css";
import KMPLOGOSILVER from "../../uploads/KMP LOGO SILVER.png";
import img1 from "../../uploads/Quotation/img1.png";
import img2 from "../../uploads/Quotation/img2.png";
import CostBreakDown from "./CostBreakDown";

const QuotationTemplate = ({ data, total }) => {
  const [showCostBreakDown, setShowCostBreakDown] = useState(false);
  const handelNextButton = () => {
    setShowCostBreakDown(true);
  };
  const handelBack = () => {
    setShowCostBreakDown(false);
  };
  if (showCostBreakDown) {
    return <CostBreakDown onBack={handelBack} data={data} total={total} />;
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
          <h1 className={styles.title}>REF: {data.refs} {data.ref}</h1>
          <h1 className={styles.title}>{data.date}</h1>
        </div>
      </div>
      <div className={styles.billingDetails}>
        <div className={styles.leftbillingDetails}>
          <h1 className={styles.titleFrom}>FROM</h1>
          <h1 className={styles.titleSales}>Sale Rep: {data.salesRepName}</h1>
          <h1 className={styles.titleSales}>
            Contact: {data.phone}
          </h1>
        </div>
        <div className={styles.rightbillingDetails}>
          <h1 className={styles.titleFrom}>TO</h1>
          <h1 className={styles.titleSales}>Name: {data.customerName} </h1>
          <h1 className={styles.titleSales}>
            Contact: {data.customerContactNumber}
          </h1>
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
                <td className={styles.tableData}>{data.make}</td>
                <td className={styles.tableData}>{data.year}</td>
                <td className={styles.tableData}>{data.engine}</td>
                <td className={styles.tableData}>{data.color}</td>
                <td className={styles.tableData}>{data.transmission}</td>
                <td className={styles.tableData}>{data.milage}</td>
                <td className={styles.tableData}>{data.interior}</td>
                <td className={styles.tableData}>{data.seats}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.vehicleImages}>
          <div className={styles.imageRows}>
            {data.img1 && (
              <img
                alt="img1"
                src={URL.createObjectURL(data.img1)}
                className={styles.imgs}
              />
            )}
            {data.img2 && (
              <img
                alt="img1"
                src={URL.createObjectURL(data.img2)}
                className={styles.imgs}
              />
            )}
            {data.img3 && (
              <img
                alt="img1"
                src={URL.createObjectURL(data.img3)}
                className={styles.imgs}
              />
            )}
          </div>
          <div className={styles.imageRows}>
            {data.img4 && (
              <img
                alt="img1"
                src={URL.createObjectURL(data.img4)}
                className={styles.imgs}
              />
            )}
            {data.img5 && (
              <img
                alt="img1"
                src={URL.createObjectURL(data.img5)}
                className={styles.imgs}
              />
            )}
            {data.img6 && (
              <img
                alt="img1"
                src={URL.createObjectURL(data.img6)}
                className={styles.imgs}
              />
            )}
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerRow}>
            <div className={styles.Footercolumn}>
              <h1 className={styles.titleFrom}>Contact</h1>
              <h1 className={styles.titleSales}>{data.phone}</h1>
            </div>
            <div className={styles.Footercolumn}>
              <h1 className={styles.titleFrom}>Email</h1>
              <h1 className={styles.titleSales}>{data.email}</h1>
            </div>
            <div className={styles.Footercolumn}>
              <h1 className={styles.titleFrom}>Website</h1>
              <h1 className={styles.titleSales}>{data.website}</h1>
            </div>
          </div>
          <div className={styles.footerRows}>
            <button className={styles.prevButton} disabled>
              Prev
            </button>
            <button className={styles.nextButton} onClick={handelNextButton}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationTemplate;
