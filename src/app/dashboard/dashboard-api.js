import DashboardService from "../services/dashboard.service";
/**
 * get all item types (category) and classes from server
 */
export async function getItemsAndTypes() {
  try {
    const res = await DashboardService.getAllDashboardItems();
    return res?.data;
  } catch (error) {
    throw new Error("Error fetching data from back-end " + error.message);
  }
}
/**
 * get all facility names from server
 */
export async function getFacilities() {
  try {
    const res = await DashboardService.getAllFacilities();
    return res?.data;
  } catch (error) {
    const { response } = error;
    if (response?.status === 403) {
      window.location.href = `/error-pages/error-403`;
    }
    if (response?.status === 401) {
      localStorage.removeItem("user");
      localStorage.removeItem("country");
      window.location.href = `/login`;
    }
  }
}
/**
 * get subfacility and level data from api
 */
export async function getTablesData() {
  try {
    const res = await DashboardService.getAllTablesData();

    return res.data;
  } catch (error) {
    const { response } = error;
    if (response?.status === 403) {
      window.location.href = `/error-pages/error-403`;
    }
    if (response?.status === 401) {
      localStorage.removeItem("user");
      localStorage.removeItem("country");
      window.location.href = `/login`;
    }
  }
}
