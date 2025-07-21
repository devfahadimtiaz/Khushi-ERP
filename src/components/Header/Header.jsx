import { useEffect, useState } from "react";
import { Bell, Search, User, Settings, LogOut } from "lucide-react";
import styles from "./Header.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL;
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([]);

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`${API_URL}/dashboard`, {
        withCredentials: true,
      });
      const data = response.data;
      if (data.valid) {
        setUserInfo(data); // assuming `setUserInfo` expects { username, name, role, id, ... }
      } else {
        console.log("User is not logged in");
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const handleLogout = async () => {
    axios
      .post(`${API_URL}/logout`, {}, { withCredentials: true })
      .then((response) => {
        console.log(response.data.message);
        navigate("/");
      });
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}> Welcome Back! {userInfo.name}</div>

        <div className={styles.right}>
          
          {/* Search */}
          <div className={styles.searchGroup}>
            <Search className={styles.searchIcon} size={18} />
            <input
              type="text"
              placeholder="Search vehicles, orders, customers..."
              className={styles.searchInput}
            />
          </div>

          {/* Notifications */}
          <button className={styles.iconButton}>
            <Bell size={22} className={styles.icon} />
            <span className={styles.notificationBadge}>10</span>
          </button>

          {/* Settings */}
          <button className={styles.iconButton}>
            <Settings size={22} className={styles.icon} />
          </button>

          {/* Profile */}
          <div className={styles.profileWrapper} onClick={toggleDropdown}>
            <div className={styles.profile}>
              <div className={styles.profileIcon}>
                <User size={18} className={styles.profileUserIcon} />
              </div>
              <div className={styles.profileInfo}>
                <p className={styles.profileName}>{userInfo.name}</p>
                <p className={styles.profileRole}>{userInfo.role}</p>
              </div>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className={styles.dropdown}>
                <button className={styles.dropdownItem} onClick={handleLogout}>
                  <LogOut size={16} />
                  <b>Logout</b>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
