import React, { useState, useEffect } from "react";
import styles from "./UserPermissionDetails.module.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const API_URL = process.env.REACT_APP_API_URL;
const UserPermissionDetails = () => {
  const navigate = useNavigate();
  const [moduleStates, setModuleStates] = useState({
    dashboard: { expanded: false },
    generalLedger: { expanded: false },
    inventory: { expanded: false },
    sales: { expanded: false },
    purchase: { expanded: false },
    logistics: { expanded: false },
    auction: { expanded: false },
    quotation: { expanded: false },
    branding: { expanded: false },
    users: { expanded: false },
  });
  const [users, setUsers] = useState([]);
  const params = useParams();
  const id = params.id;

  // Fetch user data when component mounts

  const [permissions, setPermissions] = useState({
    dashboard: {
      all: false,
      subModules: {
        mainDashboard: { view: false, edit: false, delete: false, all: false },
        GLDashboard: { view: false, edit: false, delete: false, all: false },
        inventoryDashboard: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        salesDashboard: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        purchasedDashboard: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        logisticsDashboard: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
      },
    },
    generalLedger: {
      all: false,
      subModules: {
        showroomManager: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        costAndProfit: { view: false, edit: false, delete: false, all: false },
        chartOfAccount: { view: false, edit: false, delete: false, all: false },
        currencyManagement: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        subsidiaryLedger: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        voucherSetup: { view: false, edit: false, delete: false, all: false },
        subsidiaryFileSetup: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        bankDetails: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        cashAccountDetails: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        creditAccountDetails: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        financialYearList: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        openingBalance: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        openingBalanceVoucher: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        internalCashTransfer: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        accountListingReport: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        searchingVoucher: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        generalLedger: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        subsidiaryGeneralLedger: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        trialBalance: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        profitAndLoss: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        balanceSheet: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
      },
    },
    inventory: {
      all: false,
      subModules: {
        searchVehcile: { view: false, edit: false, delete: false, all: false },
        listView: { view: false, edit: false, delete: false, all: false },
        gridView: { view: false, edit: false, delete: false, all: false },
        addStock: { view: false, edit: false, delete: false, all: false },
        zoneSetup: { view: false, edit: false, delete: false, all: false },
        parkingZoneManagement: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        vehicleTransferTo: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        vehicleTransferManagement: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        incomingVehicle: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        vehicleRepairDetails: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        vehicleRepairManagement: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        repairVoucherManagement: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        roadTestForm: { view: false, edit: false, delete: false, all: false },
        roadTestRecord: { view: false, edit: false, delete: false, all: false },
        logBook: { view: false, edit: false, delete: false, all: false },
      },
    },
    sales: {
      all: false,
      subModules: {
        saleDead: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        cashSaleList: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        creditSaleList: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        commission: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        gatepassForm: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        gatepassRecord: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        marketTrendAnalysis: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
      },
    },
    purchase: {
      all: false,
      subModules: {
        purchaseRequisition: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        quotationDocument: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        tenderDocument: { view: false, edit: false, delete: false, all: false },
        comparativeStatement: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        purchaseOrder: { view: false, edit: false, delete: false, all: false },
        goodRecievedNote: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        payment: { view: false, edit: false, delete: false, all: false },
        transportation: { view: false, edit: false, delete: false, all: false },
        expenseManagement: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        expenseSheet: { view: false, edit: false, delete: false, all: false },
        purchaseReturnRequest: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        purchasedDispatchedNote: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        purchasedReturnNote: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        payableConfiguration: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        purchasedReturnVOucher: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        purchasedAndPayableReturnVoucher: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        paymentVoucher: { view: false, edit: false, delete: false, all: false },
        advanceReturnVoucher: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        purchasedOrderReport: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        purchaseShowroomWiseReport: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        paymentRegisterReport: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        payableAgingReport: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        pendingPOItems: { view: false, edit: false, delete: false, all: false },
        supplierContactList: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        unpaidSupplierBill: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        supplierWiseBillReports: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
      },
    },
    logistics: {
      all: false,
      subModules: {
        wayToYard: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        inYard: { view: false, edit: false, delete: false, all: false },
        loadPlaining: { view: false, edit: false, delete: false, all: false },
        arriving: { view: false, edit: false, delete: false, all: false },
        shipped: { view: false, edit: false, delete: false, all: false },
        vehicleLoaded: { view: false, edit: false, delete: false, all: false },
      },
    },
    auction: {
      all: false,
      subModules: {
        auctionHouse: { view: false, edit: false, delete: false, all: false },
        auctionGridView: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
        priceChecker: { view: false, edit: false, delete: false, all: false },
        dutyChecker: { view: false, edit: false, delete: false, all: false },
      },
    },
    quotation: {
      all: false,
      subModules: {
        quotationDocuments: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
      },
    },
    branding: {
      all: false,
      subModules: {
        branding: { view: false, edit: false, delete: false, all: false },
      },
    },
    users: {
      all: false,
      subModules: {
        userManagement: { view: false, edit: false, delete: false, all: false },
        roleManagement: { view: false, edit: false, delete: false, all: false },
        permissionManagement: {
          view: false,
          edit: false,
          delete: false,
          all: false,
        },
      },
    },
  });
  const getIndeterminateState = (subModules) => {
    const all = Object.values(subModules).map(
      (p) => p.view && p.edit && p.delete
    );
    const anyChecked = Object.values(subModules).some(
      (p) => p.view || p.edit || p.delete
    );
    return anyChecked && !all.every(Boolean);
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/GetPermissions/${id}`);
      const data = await response.json();
      setUsers(data.user);

      if (data.permissions) {
        const mergedPermissions = structuredClone(permissions); // Clone initial structure

        // Merge backend response into the existing structure
        for (const module in data.permissions) {
          if (mergedPermissions[module]) {
            mergedPermissions[module].all =
              data.permissions[module].all ?? false;

            for (const subModule in data.permissions[module].subModules) {
              if (mergedPermissions[module].subModules[subModule]) {
                mergedPermissions[module].subModules[subModule] = {
                  ...mergedPermissions[module].subModules[subModule],
                  ...data.permissions[module].subModules[subModule],
                };
              }
            }
          }
        }

        setPermissions(mergedPermissions);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, [id]);

  const toggleModule = (module) => {
    setModuleStates((prev) => ({
      ...prev,
      [module]: {
        ...prev[module],
        expanded: !prev[module].expanded,
      },
    }));
  };
  const handleSubmission = async () => {
    console.log("Submitting permissions:", permissions);
    try {
      const response = await fetch(`${API_URL}/InsertPermission/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ permissions }),
      });

      if (response.ok) {
        toast.success("Permissions updated successfully!");
        setTimeout(() => {
          navigate("/UserManagement");
        }, 1000);
      } else {
        alert("Failed to update permissions.");
      }
    } catch (err) {
      console.error("Error saving permissions:", err);
    }
  };

  const handlePermissionChange = (module, subModule, permission) => {
    setPermissions((prev) => {
      const newPermissions = structuredClone(prev); // ✅ safe deep copy

      if (subModule) {
        newPermissions[module].subModules[subModule][permission] =
          !newPermissions[module].subModules[subModule][permission];

        // Handle "All" checkbox for sub-modules
        if (permission === "all") {
          const allChecked = newPermissions[module].subModules[subModule].all;
          newPermissions[module].subModules[subModule].view = allChecked;
          newPermissions[module].subModules[subModule].edit = allChecked;
          newPermissions[module].subModules[subModule].delete = allChecked;
        } else {
          // Update "All" based on other checkboxes
          const {
            view,
            edit,
            delete: del,
          } = newPermissions[module].subModules[subModule];
          newPermissions[module].subModules[subModule].all =
            view && edit && del;
        }
      } else {
        newPermissions[module][permission] =
          !newPermissions[module][permission];
        if (permission === "all") {
          const allChecked = newPermissions[module][permission];

          for (const sub of Object.keys(newPermissions[module].subModules)) {
            newPermissions[module].subModules[sub] = {
              view: allChecked,
              edit: allChecked,
              delete: allChecked,
              all: allChecked,
            };
          }
        }
      }

      return newPermissions;
    });
  };

  const ModuleIcon = ({ type }) => {
    const iconProps = {
      className: styles.moduleIcon,
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
    };

    switch (type) {
      case "dashboard":
        return (
          <svg {...iconProps}>
            <path
              d="M2.3999 3.20002C2.3999 2.98785 2.48419 2.78437 2.63422 2.63434C2.78425 2.48431 2.98773 2.40002 3.1999 2.40002H12.7999C13.0121 2.40002 13.2156 2.48431 13.3656 2.63434C13.5156 2.78437 13.5999 2.98785 13.5999 3.20002V4.80002C13.5999 5.0122 13.5156 5.21568 13.3656 5.36571C13.2156 5.51574 13.0121 5.60002 12.7999 5.60002H3.1999C2.98773 5.60002 2.78425 5.51574 2.63422 5.36571C2.48419 5.21568 2.3999 5.0122 2.3999 4.80002V3.20002ZM2.3999 8.00002C2.3999 7.78785 2.48419 7.58437 2.63422 7.43434C2.78425 7.28431 2.98773 7.20002 3.1999 7.20002H7.9999C8.21208 7.20002 8.41556 7.28431 8.56559 7.43434C8.71562 7.58437 8.7999 7.78785 8.7999 8.00002V12.8C8.7999 13.0122 8.71562 13.2157 8.56559 13.3657C8.41556 13.5157 8.21208 13.6 7.9999 13.6H3.1999C2.98773 13.6 2.78425 13.5157 2.63422 13.3657C2.48419 13.2157 2.3999 13.0122 2.3999 12.8V8.00002ZM11.1999 7.20002C10.9877 7.20002 10.7842 7.28431 10.6342 7.43434C10.4842 7.58437 10.3999 7.78785 10.3999 8.00002V12.8C10.3999 13.0122 10.4842 13.2157 10.6342 13.3657C10.7842 13.5157 10.9877 13.6 11.1999 13.6H12.7999C13.0121 13.6 13.2156 13.5157 13.3656 13.3657C13.5156 13.2157 13.5999 13.0122 13.5999 12.8V8.00002C13.5999 7.78785 13.5156 7.58437 13.3656 7.43434C13.2156 7.28431 13.0121 7.20002 12.7999 7.20002H11.1999Z"
              fill="black"
            />
          </svg>
        );
      case "users":
        return (
          <svg {...iconProps}>
            <g clipPath="url(#clip0_1383_4352)">
              <path
                d="M9.5999 3.48323C10.0299 2.99579 10.598 2.65083 11.2289 2.49426C11.8597 2.33769 12.5232 2.37692 13.1312 2.60675C13.7392 2.83657 14.2628 3.24608 14.6323 3.78079C15.0018 4.3155 15.1997 4.95006 15.1997 5.60002C15.1997 6.24999 15.0018 6.88455 14.6323 7.41926C14.2628 7.95397 13.7392 8.36348 13.1312 8.5933C12.5232 8.82313 11.8597 8.86236 11.2289 8.70579C10.598 8.54922 10.0299 8.20426 9.5999 7.71682M11.9999 16.8H2.3999V16C2.3999 14.727 2.90562 13.5061 3.80579 12.6059C4.70596 11.7057 5.92686 11.2 7.1999 11.2C8.47294 11.2 9.69384 11.7057 10.594 12.6059C11.4942 13.5061 11.9999 14.727 11.9999 16V16.8ZM11.9999 16.8H16.7999V16C16.8 15.1574 16.5783 14.3296 16.1571 13.5998C15.7358 12.87 15.1299 12.264 14.4002 11.8426C13.6705 11.4212 12.8427 11.1994 12.0001 11.1993C11.1574 11.1993 10.3296 11.4211 9.5999 11.8424M20.3999 4.64242C20.3999 5.17286 20.1892 5.68157 19.8141 6.05664C19.439 6.43171 18.9303 6.64243 18.3999 6.64243C17.8695 6.64243 17.3608 6.43171 16.9857 6.05664C16.6106 5.68157 16.3999 5.17286 16.3999 4.64242C16.3999 4.11199 16.6106 3.60328 16.9857 3.22821C17.3608 2.85314 17.8695 2.64243 18.3999 2.64243C18.9303 2.64243 19.439 2.85314 19.8141 3.22821C20.1892 3.60328 20.3999 4.11199 20.3999 4.64242Z"
                fill="black"
              />
            </g>
          </svg>
        );
      case "inventory":
        return (
          <svg {...iconProps}>
            <g clipPath="url(#clip0_1383_4394)">
              <path
                d="M16 5.60002L9.59995 2.40002L3.19995 5.60002M16 5.60002L9.59995 8.80002ZM16 5.60002V13.6L9.59995 16.8M9.59995 8.80002L3.19995 5.60002ZM9.59995 8.80002V16.8ZM3.19995 5.60002V13.6L9.59995 16.8"
                fill="black"
              />
            </g>
          </svg>
        );
      case "sales":
        return (
          <svg {...iconProps}>
            <g clipPath="url(#clip0_1383_4444)">
              <path
                d="M7.2 13.5999V11.9999ZM9.6 13.5999V10.3999ZM12 13.5999V8.7999ZM13.6 16.7999H5.6C5.17565 16.7999 4.76869 16.6313 4.46863 16.3313C4.16857 16.0312 4 15.6242 4 15.1999V3.9999C4 3.57556 4.16857 3.16859 4.46863 2.86853C4.76869 2.56847 5.17565 2.3999 5.6 2.3999H10.0688C10.281 2.39995 10.4844 2.48426 10.6344 2.6343L14.9656 6.9655C15.1156 7.1155 15.2 7.31895 15.2 7.5311V15.1999C15.2 15.6242 15.0314 16.0312 14.7314 16.3313C14.4313 16.6313 14.0243 16.7999 13.6 16.7999Z"
                fill="black"
              />
            </g>
          </svg>
        );
      case "purchase":
        return (
          <svg {...iconProps}>
            <g clipPath="url(#clip0_1383_4455)">
              <path
                d="M8.2599 3.4535C8.6007 2.0487 10.5991 2.0487 10.9399 3.4535C10.991 3.66454 11.0913 3.86053 11.2325 4.0255C11.3737 4.19048 11.5518 4.31979 11.7524 4.4029C11.953 4.48601 12.1704 4.52058 12.3869 4.5038C12.6034 4.48701 12.8129 4.41934 12.9983 4.3063C14.2327 3.5543 15.6463 4.9671 14.8943 6.2023C14.7814 6.38763 14.7139 6.59697 14.6971 6.81332C14.6804 7.02967 14.7149 7.24692 14.7979 7.44741C14.8809 7.64789 15.0101 7.82596 15.1749 7.96714C15.3397 8.10832 15.5355 8.20863 15.7463 8.2599C17.1511 8.6007 17.1511 10.5991 15.7463 10.9399C15.5353 10.991 15.3393 11.0913 15.1743 11.2325C15.0093 11.3737 14.88 11.5518 14.7969 11.7524C14.7138 11.953 14.6792 12.1704 14.696 12.3869C14.7128 12.6034 14.7805 12.8129 14.8935 12.9983C15.6455 14.2327 14.2327 15.6463 12.9975 14.8943C12.8122 14.7814 12.6028 14.7139 12.3865 14.6971C12.1701 14.6804 11.9529 14.7149 11.7524 14.7979C11.5519 14.8809 11.3738 15.0101 11.2327 15.1749C11.0915 15.3397 10.9912 15.5355 10.9399 15.7463C10.5991 17.1511 8.6007 17.1511 8.2599 15.7463C8.20877 15.5353 8.10853 15.3393 7.96733 15.1743C7.82614 15.0093 7.64799 14.88 7.44738 14.7969C7.24677 14.7138 7.02937 14.6792 6.81287 14.696C6.59638 14.7128 6.3869 14.7805 6.2015 14.8935C4.9671 15.6455 3.5535 14.2327 4.3055 12.9975C4.41838 12.8122 4.48594 12.6028 4.50269 12.3865C4.51944 12.1701 4.4849 11.9529 4.40188 11.7524C4.31886 11.5519 4.18971 11.3738 4.02492 11.2327C3.86013 11.0915 3.66435 10.9912 3.4535 10.9399C2.0487 10.5991 2.0487 8.6007 3.4535 8.2599C3.66454 8.20877 3.86053 8.10853 4.0255 7.96733C4.19048 7.82614 4.31979 7.64799 4.4029 7.44738C4.48601 7.24677 4.52058 7.02937 4.5038 6.81287C4.48701 6.59638 4.41934 6.3869 4.3063 6.2015C3.5543 4.9671 4.9671 3.5535 6.2023 4.3055C6.9991 4.7919 8.0391 4.3615 8.2599 3.4535Z"
                fill="black"
              />
            </g>
          </svg>
        );
      default:
        return null;
    }
  };

  const ChevronDown = () => (
    <svg
      className={styles.chevronIcon}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M15.8332 7.5L9.99984 13.3333L4.1665 7.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const Checkbox = ({ checked, onChange, id, name }) => (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={id}
        name={name}
        className={styles.checkboxInput}
      />
      <span className={styles.customCheckbox}>
        {checked && (
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
            <path
              d="M7 1L3 5L1 3"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </label>
  );

  const SubModuleRow = ({ module, subModule, subModuleKey, data }) => (
    <div className={styles.subModuleRow}>
      <div className={styles.subModuleIndicator}>
        <div className={styles.subModuleDot}></div>
      </div>
      <span className={styles.subModuleName}>{subModule}</span>
      <div className={styles.permissionCheckboxes}>
        <Checkbox
          checked={data.view}
          onChange={() => handlePermissionChange(module, subModuleKey, "view")}
          id={`${module}-${subModuleKey}-view`}
          name={`${module}-${subModuleKey}-view`}
          indeterminate={getIndeterminateState(subModuleKey)}
        />
        <Checkbox
          checked={data.edit}
          onChange={() => handlePermissionChange(module, subModuleKey, "edit")}
          id={`${module}-${subModuleKey}-edit`}
          name={`${module}-${subModuleKey}-edit`}
          indeterminate={getIndeterminateState(subModuleKey)}
        />
        <Checkbox
          checked={data.delete}
          onChange={() =>
            handlePermissionChange(module, subModuleKey, "delete")
          }
          id={`${module}-${subModuleKey}-delete`}
          name={`${module}-${subModuleKey}-delete`}
          indeterminate={getIndeterminateState(subModuleKey)}
        />
        <Checkbox
          checked={data.all}
          onChange={() => handlePermissionChange(module, subModuleKey, "all")}
          id={`${module}-${subModuleKey}-all`}
          name={`${module}-${subModuleKey}-all`}
          indeterminate={getIndeterminateState(subModuleKey)}
        />
      </div>
    </div>
  );

  const ModuleSection = ({
    moduleKey,
    title,
    icon,
    expanded,
    onToggle,
    subModules = {},
    allChecked = false,
  }) => (
    <div className={styles.moduleSection}>
      <div className={styles.moduleHeader}>
        <div className={styles.moduleIconContainer}>
          <ModuleIcon type={icon} />
        </div>
        <span className={styles.moduleTitle}>{title}</span>
        <div className={styles.moduleControls}>
          <span className={styles.allLabel}>All:</span>
          <Checkbox
            checked={allChecked}
            onChange={() => handlePermissionChange(moduleKey, null, "all")}
          />
          <button
          type="button"
            className={styles.expandButton}
            onClick={onToggle}
            aria-label={expanded ? "Collapse" : "Expand"}
          >
            <ChevronDown />
          </button>
        </div>
      </div>

      {expanded && (
        <div className={styles.moduleContent}>
          <div className={styles.subModuleHeader}>
            <span className={styles.subModuleHeaderText}>Sub-Module</span>
            <div className={styles.permissionHeaders}>
              <span className={styles.permissionHeader}>View</span>
              <span className={styles.permissionHeader}>Edit</span>
              <span className={styles.permissionHeader}>Delete</span>
              <span className={styles.permissionHeader}>All</span>
            </div>
          </div>

          <div className={styles.subModulesList}>
            {Object.entries(subModules).map(([key, data]) => {
              const subModuleNames = {
                mainDashboard: "Main Dashboard",
                GLDashboard: "GL Dashboard",
                inventoryDashboard: "Inventory Dashboard",
                purchasedDashboard: "Purschased Dashboard",
                logisticsDashboard: "Logistics Dashboard",
                showroomManager: "Showroom Manager",
                costAndProfit: "Cost and Profit",
                chartOfAccount: "Chart of Account",
                currencyManagement: "Currency Management",
                subsidiaryLedger: "Subsidiary Ledger",
                voucherSetup: "Voucher Setup",
                subsidiaryFileSetup: "Subsidiary File Setup",
                bankDetails: "Bank Details",
                cashAccountDetails: "Cash Account Details",
                creditAccountDetails: "Credit Account Details",
                financialYearList: "Financial Year List",
                openingBalance: "Opening Balance",
                openingBalanceVoucher: "Opening Balance Voucher",
                internalCashTransfer: "Internal Cash Transfer",
                accountListingReport: "Account Listing Report",
                searchingVoucher: "Searching Voucher",
                generalLedger: "General Ledger",
                subsidiaryGeneralLedger: "Subsidiary General Ledger",
                trialBalance: "Trial Balance",
                profitAndLoss: "Profit and Loss",
                balanceSheet: "Balance Sheet",
                searchVehcile: "Search Vehicle",
                listView: "List View",
                gridView: "Grid View",
                addStock: "Add Stock",
                zoneSetup: "Zone Setup",
                parkingZoneManagement: "Parking Zone Management",
                vehicleTransferTo: "Vehicle Transfer To",
                vehicleTransferManagement: "Vehicle Transfer Management",
                incomingVehicle: "Incoming Vehicle",
                vehicleRepairDetails: "Vehicle Repair Details",
                vehicleRepairManagement: "Vehicle Repair Management",
                repairVoucherManagement: "Repair Voucher Management",
                roadTestForm: "Road Test Form",
                roadTestRecord: "Road Test Record",
                logBook: "Log Book Management",
                saleDead: "Sale Dead",
                cashSaleList: "Cash Sale List",
                creditSaleList: "Credit Sale List",
                commission: "Commission",
                gatepassForm: "Gatepass Form",
                gatepassRecord: "Gatepass Record",
                marketTrendAnalysis: "Market Trend Analysis",
                purchaseRequisition: "Purchase Requisition",
                quotationDocument: "Quotation Document",
                tenderDocument: "Tender Document",
                comparativeStatement: "Comparative Statement",
                purchaseOrder: "Purchase Order",
                goodRecievedNote: "Good Received Note",
                payment: "Payment",
                transportation: "Transportation",
                expenseManagement: "Expense Management",
                expenseSheet: "Expense Sheet",
                purchaseReturnRequest: "Purchase Return Request",
                purchasedDispatchedNote: "Purchased Dispatched Note",
                purchasedReturnNote: "Purchased Return Note",
                payableConfiguration: "Payable Configuration",
                purchasedReturnVOucher: "Purchased Return Voucher",
                purchasedAndPayableReturnVoucher:
                  "Purchased and Payable Return Voucher",
                paymentVoucher: "Payment Voucher",
                advanceReturnVoucher: "Advance Return Voucher",
                purchasedOrderReport: "Purchased Order Report",
                purchaseShowroomWiseReport: "Purchase Showroom Wise Report",
                paymentRegisterReport: "Payment Register Report",
                payableAgingReport: "Payable Aging Report",
                pendingPOItems: "Pending PO Items",
                supplierContactList: "Supplier Contact List",
                unpaidSupplierBill: "Unpaid Supplier Bill",
                supplierWiseBillReports: "Supplier Wise Bill Reports",
                wayToYard: "Way To Yard",
                inYard: "In Yard",
                loadPlaining: "Load Plaining",
                arriving: "Arriving",
                shipped: "Shipped",
                vehicleLoaded: "Vehicle Loaded",
                auctionHouse: "Auction House",
                auctionGridView: "Auction Grid View",
                priceChecker: "Price Checker",
                dutyChecker: "Duty Checker",
                userManagement: "User Management",
                roleManagement: "Role Management",
                permissionManagement: "Permission Management",
                branding: "Branding",
                quotationDocuments: "Quotation Document",
                salesDashboard: "Sales Dashboard",
              };

              return (
                <SubModuleRow
                  key={key}
                  module={moduleKey}
                  subModule={subModuleNames[key]}
                  subModuleKey={key}
                  data={data}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className={styles.container}>
      {/* User Profile Header */}
      <div className={styles.userProfile}>
        <div className={styles.userInfo}>
          <h2 className={styles.userName}>{users.name}</h2>
          <p className={styles.userEmail}>{users.email}</p>
          <div className={styles.roleBadge}>
            <span className={styles.roleText}>{users.role}</span>
          </div>
        </div>
      </div>

      {/* Module Permissions */}
      <div className={styles.modulePermissions}>
        <h3 className={styles.sectionTitle}>Module Permissions</h3>

        <div className={styles.modulesList}>
          <ModuleSection
            moduleKey="dashboard"
            title="Dashboard"
            icon="dashboard"
            expanded={moduleStates.dashboard.expanded}
            onToggle={() => toggleModule("dashboard")}
            subModules={permissions.dashboard.subModules}
            allChecked={permissions.dashboard.all}
          />

          <ModuleSection
            moduleKey="generalLedger"
            title="General Ledger"
            icon="users"
            expanded={moduleStates.generalLedger.expanded}
            onToggle={() => toggleModule("generalLedger")}
            subModules={permissions.generalLedger.subModules}
            allChecked={permissions.generalLedger.all}
          />

          <ModuleSection
            moduleKey="inventory"
            title="Inventory"
            icon="inventory"
            expanded={moduleStates.inventory.expanded}
            onToggle={() => toggleModule("inventory")}
            subModules={permissions.inventory.subModules}
            allChecked={permissions.inventory.all}
          />

          <ModuleSection
            moduleKey="sales"
            title="Sales"
            icon="sales"
            expanded={moduleStates.sales.expanded}
            onToggle={() => toggleModule("sales")}
            subModules={permissions.sales.subModules}
            allChecked={permissions.sales.all}
          />

          <ModuleSection
            moduleKey="purchase"
            title="Purchased & Expenditure"
            icon="purchase"
            expanded={moduleStates.purchase.expanded}
            onToggle={() => toggleModule("purchase")}
            subModules={permissions.purchase.subModules}
            allChecked={permissions.purchase.all}
          />
          <ModuleSection
            moduleKey="logistics"
            title="Logistics"
            icon="logistics"
            expanded={moduleStates.logistics.expanded}
            onToggle={() => toggleModule("logistics")}
            subModules={permissions.logistics.subModules}
            allChecked={permissions.logistics.all}
          />
          <ModuleSection
            moduleKey="auction"
            title="Auction"
            icon="auction"
            expanded={moduleStates.auction.expanded}
            onToggle={() => toggleModule("auction")}
            subModules={permissions.auction.subModules}
            allChecked={permissions.auction.all}
          />
          <ModuleSection
            moduleKey="quotation"
            title="Quotation"
            icon="quotation"
            expanded={moduleStates.quotation.expanded}
            onToggle={() => toggleModule("quotation")}
            subModules={permissions.quotation.subModules}
            allChecked={permissions.quotation.all}
          />
          <ModuleSection
            moduleKey="branding"
            title="Branding"
            icon="branding"
            expanded={moduleStates.branding.expanded}
            onToggle={() => toggleModule("branding")}
            subModules={permissions.branding.subModules}
            allChecked={permissions.branding.all}
          />
          <ModuleSection
            moduleKey="users"
            title="Userd"
            icon="users"
            expanded={moduleStates.users.expanded}
            onToggle={() => toggleModule("users")}
            subModules={permissions.users.subModules}
            allChecked={permissions.users.all}
          />
        </div>
        <div className={styles.saveButtonContainer}>
          <button type="button" className={styles.saveBtn} onClick={() => handleSubmission()}>
            Save
          </button>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default UserPermissionDetails;
