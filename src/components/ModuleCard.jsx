"use client";
import React from "react";
import styles from "./ModuleSelection.module.css";

const ModuleCard = ({ imageSrc, title, description, className }) => {
  return (
    <div className={className}>
      <img src={imageSrc} className={styles.moduleIcon} alt={`${title} icon`} />
      <h3 className={styles.moduleTitle}>{title}</h3>
      <p className={styles.moduleDescription}>{description}</p>
    </div>
  );
};

export default ModuleCard;
