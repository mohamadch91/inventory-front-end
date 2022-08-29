import DashboardService from "../services/dashboard.service";

export async function getItemsAndTypes() {
  const res = await DashboardService.getAllDashboardItems();

  if (res.status !== 200) {
    throw new Error("Error fetching data from back-end");
  }

  // no transform needed. mammad JSON dad

  return res.data;
}

export async function getFacilities() {
  const res = await DashboardService.getAllFacilities();

  if (res.status !== 200) {
    throw new Error("Error fetching data from back-end");
  }

  return res.data;
}

export async function getTablesData() {
  const res = await DashboardService.getAllTablesData();

  if (res.status !== 200) {
    throw new Error("Error fetching data from back-end");
  }

  return res.data;
}
