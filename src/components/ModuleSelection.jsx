"use client";
import React from "react";
import styles from "./ModuleSelection.module.css";
import ModuleCard from "./ModuleCard";
import logo from "../uploads/KM-LOGO.png";
import { useState } from "react";
import auto from "../uploads/icons/auto.png";
import crm from "../uploads/icons/crm.png";
import project from "../uploads/icons/project.png";

function ModuleSelection(props) {
  const [borderColor, setBorderColor] = useState("gray"); // Default border color

  const handleBorderColor = () => {
    // Toggle between two colors, you can customize this logic
    setBorderColor(borderColor === "gray" ? "blue" : "gray");
  };

  return (
    <section className={styles.moduleSelection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <img alt="logo" src={logo} className={styles.logo} />
          <h1 className={styles.title}>Select Module</h1>
          <p className={styles.subtitle}>
            Choose the module you want to access
          </p>
          <div className={styles.cardsContainer}>
            <div className={styles.cardsGrid}>
              <div className={styles.cardColumn}>
                <ModuleCard
                  id="Automotive"
                  imageSrc={auto}
                  title="Automotive ERP"
                  description="Comprehensive solution for automotive business management"
                  onClick={handleBorderColor} // Handle click event
                  style={{ border: `1px solid ${borderColor}` }} // Dynamic border color
                  className={styles.automotiveCard} // Apply your custom styles
                />
              </div>
              <div className={styles.cardColumn}>
                <ModuleCard
                  imageSrc={crm}
                  title="CRM"
                  description="Manage customer relationships and interactions effectively"
                  className={styles.crmCard}
                />
              </div>
              <div className={styles.cardColumn}>
                <ModuleCard
                  imageSrc={project}
                  title="Project Management"
                  description="Track and manage projects, tasks, and team collaboration"
                  className={styles.projectCard}
                />
              </div>
            </div>
          </div>
          <button className={styles.continueButton} onClick={props.onContinue}>
            Continue to Login
          </button>
        </div>
      </div>
    </section>
  );
}

export default ModuleSelection;
