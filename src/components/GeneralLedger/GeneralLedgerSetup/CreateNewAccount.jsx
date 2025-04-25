import React, { useState } from "react";
import styles from "./CreateNewAccount.module.css";

const CreateNewAccount = ({ onClose }) => {
  const [formData, setFormData] = useState({
    accountType: "",
    level: "",
    accountCode: "",
    group: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.pageTitle}>Create New Account</div>
        <div className={styles.contentPanel}>
          <div className={styles.contentInner}>
            <div className={styles.instructionsPanel}>
              <div className={styles.instructionsRow}>
                <div className={styles.instructionsColumn}>
                  <div className={styles.instructionsContent}>
                    <div className={styles.instructionsTitle}>
                      How to Create an Account
                    </div>
                    <div className={styles.stepContainer}>
                      <div className={styles.stepNumber}>1</div>
                      <div className={styles.stepTitle}>
                        Select Account Type
                      </div>
                    </div>
                    <div className={styles.stepDescription2}>
                      Choose the type of account you want to create
                    </div>
                    <div className={styles.stepContainer2}>
                      <div className={styles.stepNumber2}>3</div>
                      <div className={styles.stepContentWrapper}>
                        <div className={styles.stepTitle}>
                          Select Parent Account
                        </div>
                        <div className={styles.stepDescription2}>
                          If level &gt; 1, choose the parent account
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rightColumn}>
                  <div className={styles.rightColumnContent}>
                    <div className={styles.stepContainer}>
                      <div className={styles.stepNumber2}>2</div>
                      <div className={styles.stepTitle}>Choose Level</div>
                    </div>
                    <div className={styles.stepDescription2}>
                      Select the hierarchical level of the account
                    </div>
                    <div className={styles.stepContainer2}>
                      <div className={styles.stepNumber2}>4</div>
                      <div className={styles.stepContentWrapper}>
                        <div className={styles.stepTitle2}>Enter Details</div>
                        <div className={styles.stepDescription2}>
                          Fill in the account code, group, and description
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.formLabelsRow}>
                <div className={styles.labelContainer}>
                  <div className={styles.labelText}>Account Type</div>
                  <div className={styles.requiredStar}>*</div>
                </div>
                <div className={styles.labelContainerRight}>
                  <div className={styles.labelText}>Level</div>
                  <div className={styles.requiredStar}>*</div>
                </div>
              </div>
              <div className={styles.formInputsRow}>
                <div className={styles.selectInput}>
                  <div className={styles.selectText}>Select Account Type</div>
                  
                </div>
                <div className={styles.selectInput}>
                  <div className={styles.selectText}>Select Level</div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/98023cb4ae9c41643a4f3f15f8898e64efc37f1c?placeholderIfAbsent=true"
                    className={styles.selectIcon}
                    alt="Dropdown icon"
                  />
                </div>
              </div>
              <div className={styles.formLabelsRow2}>
                <div className={styles.labelContainer2}>
                  <div className={styles.labelText}>Account Code</div>
                  <div className={styles.requiredStar}>*</div>
                </div>
                <div className={styles.labelContainerRight}>
                  <div className={styles.labelText}>Group</div>
                  <div className={styles.requiredStar}>*</div>
                </div>
              </div>
              <div className={styles.formInputsRow2}>
                <input
                  type="text"
                  name="accountCode"
                  placeholder="Enter account code"
                  value={formData.accountCode}
                  onChange={handleChange}
                  className={styles.textInput}
                  required
                />
                <div className={styles.selectInput}>
                  <div className={styles.selectText}>Select Group</div>
            
                </div>
              </div>
              <div className={styles.descriptionLabelContainer}>
                <div className={styles.labelText}>Account Description</div>
                <div className={styles.requiredStar}>*</div>
              </div>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={styles.textareaInput}
                required
              />
            </form>
          </div>
          <div className={styles.buttonsContainer}>
            <button onClick={onClose} className={styles.cancelButton}>
              Cancel
            </button>
            <button onClick={handleSubmit} className={styles.createButton}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewAccount;
