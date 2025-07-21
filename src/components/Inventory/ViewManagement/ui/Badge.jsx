import styles from "./Badge.module.css";

const Badge=({ className, variant = "default", ...props })=> {
  const variantClass = {
    default: styles.badgeDefault,
    secondary: styles.badgesold,
    destructive: styles.badgeDestructive,
    outline: styles.badgeOutline,
  }[variant];

  return (
    <div className={`${styles.badge} ${variantClass} ${className || ""}`} {...props} />
  );
}

export default Badge;
