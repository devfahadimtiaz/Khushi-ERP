// utils/flattenMenuRoutes.js
export const flattenMenuRoutes = (menu, parentModule = null) => {
  let routes = [];

  for (const item of menu) {
    if (item.route) {
      routes.push({
        path: item.route,
        module: parentModule || item.id,
        subModule: item.id,
      });
    }

    if (item.subItems) {
      routes = routes.concat(flattenMenuRoutes(item.subItems, item.id));
    }
  }

  return routes;
};
