import api from "./api";

// 🔥 Pass / Fail result
export const getPassFail = async (regNo) => {
  try {
    const response = await api.get(`/analytics/pass-fail/${regNo}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to fetch pass/fail data";
  }
};

// 🔥 Marks data
export const getMarks = async (regNo) => {
  try {
    const response = await api.get(`/analytics/marks/${regNo}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to fetch marks data";
  }
};