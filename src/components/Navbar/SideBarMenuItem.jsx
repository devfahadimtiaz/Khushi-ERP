// components/SidebarMenuItem.jsx
'use client';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css'; // adjust if needed

import { verifyAccess } from './verifyAccess'; // adjust path if needed

const SidebarMenuItem = ({ item, depth = 0, collapsed, toggleSubmenu, openSubmenus, onToggle }) => {
  const [hasAccess, setHasAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  const hasSubItems = item.subItems && item.subItems.length > 0;
  const isOpen = openSubmenus.includes(item.id);
  const isActive = location.pathname === item.route;

  useEffect(() => {
    const checkAccess = async () => {
      const result = await verifyAccess(item.module, item.subModule, item.type);
      setHasAccess(result);
    };
    checkAccess();
  }, [item]);

  if (!hasAccess && item.module && item.subModule && item.type) return null;

  return (
    <div className={`${styles.menuItem} ${depth > 0 ? styles.subMenuItem : ""}`}>
      <button
        onClick={() => {
          if (hasSubItems) {
            toggleSubmenu(item.id);
          } else if (item.route) {
            navigate(item.route);
            onToggle?.(!collapsed);
          }
        }}
        className={`${styles.navItem} ${isActive ? styles.active : ""}`}
        style={{ paddingLeft: `${depth * 16 + 12}px` }}
      >
        {item.icon && <span className={styles.navIcon}>{item.icon}</span>}
        {!collapsed && <span className={styles.navLabel}>{item.label}</span>}
        {hasSubItems && !collapsed && (
          <span className={styles.navToggle}>{isOpen ? '-' : '+'}</span>
        )}
      </button>

      {hasSubItems && isOpen && (
        <div className={styles.subMenu}>
          {item.subItems.map((subItem) => (
            <SidebarMenuItem
              key={subItem.id}
              item={subItem}
              depth={depth + 1}
              collapsed={collapsed}
              toggleSubmenu={toggleSubmenu}
              openSubmenus={openSubmenus}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarMenuItem;
