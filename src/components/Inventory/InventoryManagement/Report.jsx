import React from "react";
import styles from "./Report.module.css";

const Report = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Report</div>
      <div className={styles.header}>
        <div className={styles.headerCell}>Platforms</div>
        <div className={styles.headerCell}>Uploaded By</div>
        <div className={styles.headerCell}>URL</div>
        <div className={styles.headerCell}>Actions</div>
      </div>

      <div className={styles.row}>
        <div className={styles.cell}>Facebook</div>
        <div className={styles.cell}>Data Uploader</div>
        <div className={styles.cell}>
          <input type="text" placeholder="Enter URL" className={styles.urlField}></input>
        </div>
        <div className={styles.cell}>
          <button className={styles.saveButton}>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="311:588" layer-name="Frame" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="save-icon" style="width: 16px; height: 16px"> <path d="M12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H10.6667L14 5.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.3337 14V8.66663H4.66699V14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4.66699 2V5.33333H10.0003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
              }}
            />
            <span>Save</span>
          </button>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.cell}>Instagram</div>
        <div className={styles.cell}>Data Uploader</div>
        <div className={styles.cell}>
        <input type="text" placeholder="Enter URL" className={styles.urlField}></input>
        </div>
        <div className={styles.cell}>
          <button className={styles.saveButton}>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="310:1415" layer-name="Frame" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="save-icon" style="width: 16px; height: 16px"> <path d="M12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H10.6667L14 5.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.3337 14V8.66663H4.66699V14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4.66699 2V5.33333H10.0003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
              }}
            />
            <span>Save</span>
          </button>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.cell}>Website</div>
        <div className={styles.cell}>Data Uploader</div>
        <div className={styles.cell}>
        <input type="text" placeholder="Enter URL" className={styles.urlField}></input>
        </div>
        <div className={styles.cell}>
          <button className={styles.saveButton}>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="310:1424" layer-name="Frame" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="save-icon" style="width: 16px; height: 16px"> <path d="M12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H10.6667L14 5.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.3337 14V8.66663H4.66699V14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4.66699 2V5.33333H10.0003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
              }}
            />
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Report;
