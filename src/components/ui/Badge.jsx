import React from "react";
import classNames from "classnames";
import styles from "./Badge.module.css";

const Badge = ({ className, variant = "default", ...props }) => {
  return (
    <div
      className={classNames(styles.badge, styles[variant], className)}
      {...props}
    />
  );
};

export { Badge };
