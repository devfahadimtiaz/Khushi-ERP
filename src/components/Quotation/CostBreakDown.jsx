import React, {useState} from "react";
import styles from "./CostBreakDown.module.css";
import TermsAndCondition from "./TermsAndCondition";

const CostBreakDown = ({ onBack }) => {

  const [showTermsAndCondition, setShowTermsAndCondition] = useState(false);
  const handleNextButton=()=>{
    setShowTermsAndCondition(true);
  }
  const handleOnBack=()=>{
    setShowTermsAndCondition(false);
  }
  if(showTermsAndCondition){
    return(
      <TermsAndCondition onBack={handleOnBack}/>
    )
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
              <div className={styles.textPrice}>20,000,000 ¥</div>
            </div>
          </div>
          <div className={styles.priceRow}>
            <div className={styles.leftRow}>
              <div className={styles.textPrice}>Trucking in Japan</div>
            </div>
            <div className={styles.rightRow}>
              <div className={styles.textPrice}>25,000 ¥</div>
            </div>
          </div>
          <div className={styles.priceRow}>
            <div className={styles.leftRow}>
              <div className={styles.textPrice}>Shipping Cost</div>
            </div>
            <div className={styles.rightRow}>
              <div className={styles.textPrice}>250,000 ¥</div>
            </div>
          </div>
          <div className={styles.priceRow}>
            <div className={styles.leftRow}>
              <div className={styles.textPrice}>Duty Clearance</div>
            </div>
            <div className={styles.rightRow}>
              <div className={styles.textPrice}>11,500,000 KSH</div>
            </div>
          </div>
          <div className={styles.priceRow}>
            <div className={styles.leftRow}>
              <div className={styles.textPrice}>Total (Approx)</div>
            </div>
            <div className={styles.rightRow}>
              <div className={styles.textPrice}>32,000,000 KSH</div>
            </div>
          </div>
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
          <button className={styles.nextButton} onClick={onBack}>
            Prev
          </button>
          <button className={styles.nextButton} onClick={handleNextButton}>Next</button>
        </div>
      </div>
    </div>
  );
};
export default CostBreakDown;
