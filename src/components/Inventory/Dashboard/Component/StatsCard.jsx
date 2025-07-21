import classNames from "classnames";
import styles from "./StatsCard.module.css";

const colorClasses = {
  blue: `${styles.bgBlue} ${styles.textBlue} ${styles.borderBlue}`,
  green: `${styles.bgGreen} ${styles.textGreen} ${styles.borderGreen}`,
  orange: `${styles.bgOrange} ${styles.textOrange} ${styles.borderOrange}`,
  purple: `${styles.bgPurple} ${styles.textPurple} ${styles.borderPurple}`,
};

const StatsCard = ({ title, value, icon: Icon, currency = "", trend, color = "blue" }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.value}>
            {value} {currency}
          </p>

          {trend && (
            <div className={styles.trend}>
              <span
                className={classNames(styles.trendValue, {
                  [styles.trendPositive]: trend.isPositive,
                  [styles.trendNegative]: !trend.isPositive,
                })}
              >
                {trend.isPositive ? "+" : ""}
                {trend.value}%
              </span>
              <span className={styles.trendLabel}>
                {trend.label || "vs last month"}
              </span>
            </div>
          )}
        </div>

        <div
          className={classNames(styles.iconWrapper, colorClasses[color])}
          aria-label={title + " icon"}
        >
          <Icon className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
