import React, { useState } from "react";
import styles from "./TermsConditions.module.css";

import 'react-quill/dist/quill.snow.css';

const TermsConditions = () => {
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.contentCard}>
        <div className={styles.imageContainer}>
        <div>
    </div>
        </div>
      </div>
      <div className={styles.actionButtonsContainer}>
        <button className={styles.draftButton}>Draft</button>
        <button className={styles.submitButton}>Submit</button>
        <button className={styles.rejectButton}>Reject</button>
        <button className={styles.backButton}>Back</button>
      </div>
    </div>
  );
};

export default TermsConditions;
