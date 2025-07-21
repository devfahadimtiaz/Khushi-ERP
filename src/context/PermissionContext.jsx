// context/PermissionContext.js
import React, { createContext, useContext } from "react";

const PermissionContext = createContext();

export const PermissionProvider = ({ permissions = [], children }) => {
  const hasPermission = (module, subModule, type) => {
    return permissions.some(
      (perm) =>
        perm.module === module &&
        perm.subModule === subModule &&
        perm.type === type
    );
  };

  return (
    <PermissionContext.Provider value={{ permissions, hasPermission }}>
      {children}
    </PermissionContext.Provider>
  );
};


export const usePermissions = () => useContext(PermissionContext);