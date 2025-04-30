import React, { useState } from "react";
import styles from "./CostBreakDown.module.css";
import TermsAndCondition from "./TermsAndCondition";

const CostBreakDown = ({ onBack, data, total }) => {
  const jpyToKshRate = parseFloat(data.jpyToKsh|| 0.91);

  const basePriceJPY = parseFloat(data.basePrice || 0);
  const truckingJPY = parseFloat(data.trucking || 0);
  const shippingJPY = parseFloat(data.shipping | 0);
  const dutyKSH = parseFloat(data.duty || 0);

  const jpyToKsh = (basePriceJPY + truckingJPY + shippingJPY) * jpyToKshRate;
  const totalCostInKsh = jpyToKsh + dutyKSH;

  const [showTermsAndCondition, setShowTermsAndCondition] = useState(false);
  const handleNextButton = () => {
    setShowTermsAndCondition(true);
  };
  const handleOnBack = () => {
    setShowTermsAndCondition(false);
  };
  if (showTermsAndCondition) {
    return <TermsAndCondition onBack={handleOnBack} data={data} />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.costBreakDown}>
        <div className={styles.title}>Cost Breakdown</div>
        <div className={styles.priceTable}>
          <div className={styles.priceRow}>
            <div className={styles.leftRow}>
              <div className={styles.textPrice}>Base Price (FOB)</div>
            </div>
            <div className={styles.rightRow}>
              <div className={styles.textPrice}>{data.basePrice} ¥</div>
            </div>
          </div>
          <div className={styles.priceRow}>
            <div className={styles.leftRow}>
              <div className={styles.textPrice}>Trucking in Japan</div>
            </div>
            <div className={styles.rightRow}>
              <div className={styles.textPrice}>{data.trucking} ¥</div>
            </div>
          </div>
          <div className={styles.priceRow}>
            <div className={styles.leftRow}>
              <div className={styles.textPrice}>Shipping Cost</div>
            </div>
            <div className={styles.rightRow}>
              <div className={styles.textPrice}>{data.shipping} ¥</div>
            </div>
          </div>
          <div className={styles.priceRow}>
            <div className={styles.leftRow}>
              <div className={styles.textPrice}>Duty Clearance</div>
            </div>
            <div className={styles.rightRow}>
              <div className={styles.textPrice}>{data.duty} KSH</div>
            </div>
          </div>
          <div className={styles.priceRow}>
            <div className={styles.leftRow}>
              <div className={styles.textPrice}>Total (Approx)</div>
            </div>
            <div className={styles.rightRow}>
              <div className={styles.textPrice}>{total} KSH</div>
            </div>
          </div>
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
          <button className={styles.nextButton} onClick={onBack}>
            Prev
          </button>
          <button className={styles.nextButton} onClick={handleNextButton}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default CostBreakDown;
