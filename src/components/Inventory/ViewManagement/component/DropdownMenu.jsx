// DropdownMenu.js
import React from "react";
import styles from "./DropdownMenu.module.css";

const DropdownMenu = ({ options, onSelect, onClose }) => {
  return (
    <div className={styles.dropdownMenu} onClick={(e) => e.stopPropagation()}>
      {options.map((opt, index) => (
        <div
          key={index}
          className={styles.menuItem}
          onClick={() => {
            onSelect(opt.value);
            onClose();
          }}
        >
          {opt.label}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
