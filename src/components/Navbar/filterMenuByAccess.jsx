import { verifyAccess } from "./verifyAccess";

// Recursively filter menu items based on user access
export const filterMenuByAccess = async (items) => {
  const filtered = await Promise.all(
    items.map(async (item) => {
      let hasAccess = true;

      // Step 1: If item has module + subModule + type, verify its access
      if (item.module && item.subModule !== undefined && item.type) {
        hasAccess = await verifyAccess(item.module, item.subModule, item.type);
      }

      // Step 2: Recursively filter all subItems
      let filteredSubItems = [];
      if (item.subItems && item.subItems.length > 0) {
        filteredSubItems = await filterMenuByAccess(item.subItems);
      }

      // Step 3: Only include the item if:
      // - it has access itself
      // - OR at least one of its subItems is visible
      const shouldInclude = hasAccess || filteredSubItems.length > 0;

      if (!shouldInclude) return null;

      return {
        ...item,
        subItems: filteredSubItems,
      };
    })
  );

  // Remove all nulls (items we don't want to render)
  return filtered.filter(Boolean);
};
