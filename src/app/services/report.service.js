import authHeader from "./auth-header";
import ApiManager from "./axios-config";

const API_URL = "https://tlsapi.invgap.org/reports/";

class ReportService {
  getDownloadLinks() {
    return ApiManager.get(API_URL + "excel", {
      headers: { Authorization: authHeader() },
    });
  }
  getFacSeg(params) {
    return ApiManager.get(API_URL + "facseg", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getSubFacPop(params) {
    return ApiManager.get(API_URL + "subfacpop", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getFacMap(params) {
    return ApiManager.get(API_URL + "facmap", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getGapMap(params) {
    return ApiManager.get(API_URL + "gapmap", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getItemGp(params) {
    return ApiManager.get(API_URL + "item-gp", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getItemFac(params) {
    return ApiManager.get(API_URL + "itemfac", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getGapItem(params) {
    return ApiManager.get(API_URL + "gapitem", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getProfOfFac() {
    return ApiManager.get(API_URL + "facprof", {
      headers: { Authorization: authHeader() },
    });
  }
  getColdProf(degree) {
    return ApiManager.get(API_URL + "coldprof", {
      headers: { Authorization: authHeader() },
      params: {
        degree,
      },
    });
  }
  getPlanningReport(params) {
    return ApiManager.get(API_URL + "planingreport", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getPlanningCCEGap(params) {
    return ApiManager.get(API_URL + "gapcce", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getGapCCEPlan(params) {
    return ApiManager.get(API_URL + "gapccePlan", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  postGapCCEPlan(payload) {
    return ApiManager.post(API_URL + "gapccePlan", payload, {
      headers: { Authorization: authHeader() },
    });
  }
  deleteGapCCEPlan(payload) {
    return ApiManager.delete(API_URL + "gapccePlan", {
      headers: { Authorization: authHeader() },
      data: payload,
    });
  }
  putGapCCEPlan(payload) {
    return ApiManager.put(API_URL + "gapccePlan", payload, {
      headers: { Authorization: authHeader() },
    });
  }
  savegaps(payload, saved) {
    return ApiManager.post(API_URL + "gapsave?condition=" + payload, saved, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new ReportService();
