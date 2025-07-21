import { useState, useMemo } from "react";
import { Clock, Car, TrendingUp, AlertCircle } from "lucide-react";
import styles from "./RecentActivity.module.css";

const ITEMS_PER_PAGE = 5;

const RecentActivity = ({ activities = [] }) => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [timeFilter, setTimeFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const getIcon = (type) => {
    switch (type) {
      case "sale":
        return <TrendingUp size={16} className={styles.iconGreen} />;
      case "stock":
        return <Car size={16} className={styles.iconBlue} />;
      case "alert":
        return <AlertCircle size={16} className={styles.iconOrange} />;
      default:
        return <Clock size={16} className={styles.iconGray} />;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
        return `${styles.badge} ${styles.badgeGreen}`;
      case "Active":
      case "In Stock":
        return `${styles.badge} ${styles.badgeBlue}`;
      case "Warning":
        return `${styles.badge} ${styles.badgeOrange}`;
      default:
        return `${styles.badge} ${styles.badgeGray}`;
    }
  };

  const isToday = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    return (
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    );
  };

  const isYesterday = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    now.setDate(now.getDate() - 1);
    return (
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    );
  };

  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      if (statusFilter !== "All" && activity.status !== statusFilter) return false;
      if (timeFilter === "Today" && !isToday(activity.updated_at)) return false;
      if (timeFilter === "Yesterday" && !isYesterday(activity.updated_at)) return false;
      return true;
    });
  }, [activities, statusFilter, timeFilter]);

  const paginatedActivities = filteredActivities.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredActivities.length / ITEMS_PER_PAGE);

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleTimeChange = (e) => {
    setTimeFilter(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Recent Activity</h3>
        <p className={styles.subtitle}>Latest updates from your inventory</p>
      </div>

      <div className={styles.filters}>
        <select value={statusFilter} onChange={handleStatusChange} className={styles.select}>
          <option value="All">All Status</option>
          <option value="Transferred">Transferred</option>
          <option value="Repaired">Repaired</option>
          <option value="In Stock">In Stock</option>
          <option value="Sold">Sold</option>
        </select>
        <select value={timeFilter} onChange={handleTimeChange} className={styles.select}>
          <option value="All">All Time</option>
          <option value="Today">Today</option>
          <option value="Yesterday">Yesterday</option>
        </select>
      </div>

      <div className={styles.activityList}>
        {paginatedActivities.length === 0 ? (
          <div className={styles.noActivity}>No activities found</div>
        ) : (
          paginatedActivities.map((activity) => (
            <div key={activity.id} className={styles.activityItem}>
              <div className={styles.iconWrapper}>{getIcon(activity.type)}</div>
              <div className={styles.activityContent}>
                <div className={styles.activityHeader}>
                  <span className={styles.activityTitle}>{activity.make}</span>
                  {activity.status && (
                    <span className={getStatusClass(activity.status)}>{activity.status}</span>
                  )}
                </div>
                <p className={styles.description}>{activity.description}</p>
                <div className={styles.time}>
                  <Clock size={12} className={styles.clockIcon} />
                  {new Date(activity.updated_at).toLocaleString()}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`${styles.pageButton} ${currentPage === index + 1 ? styles.activePage : ""}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentActivity;
