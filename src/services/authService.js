import axios from "axios";

const API_URL = "https://onlineexamsystem2026.onrender.com/api/auth";

/**
 * REGISTER
 */
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${API_URL}/register`,
      userData
    );

    return response.data;

  } catch (error) {
    console.error("REGISTER ERROR:", error.response?.data || error.message);

    throw new Error(
      error.response?.data?.message ||
      error.response?.data ||
      error.message ||
      "Registration Failed"
    );
  }
};

/**
 * LOGIN
 */
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      loginData
    );

    return response.data;

  } catch (error) {
    console.error("LOGIN ERROR:", error.response?.data || error.message);

    throw new Error(
      error.response?.data?.message ||
      error.response?.data ||
      error.message ||
      "Login Failed"
    );
  }
};