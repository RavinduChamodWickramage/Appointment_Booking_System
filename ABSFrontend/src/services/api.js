import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getAuthToken = () => {
  return localStorage.getItem("token");
};

api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const loginUser = async (username, password) => {
  try {
    const response = await api.post("/auth/login", { username, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const signupUser = async (name, username, password, confirmPassword) => {
  try {
    const response = await api.post("/auth/sign-up", {
      name,
      username,
      password,
      confirmPassword,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getAppointments = async (userId) => {
  try {
    const response = await api.get("/appointments", { params: { userId } });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const bookAppointment = async (appointmentDetails) => {
  try {
    const response = await api.post("/appointments", appointmentDetails);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const cancelAppointment = async (appointmentId) => {
  try {
    const response = await api.delete(`/appointments/${appointmentId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getAllAppointments = async () => {
  try {
    const response = await api.get("/admin/appointments");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getAvailableSlots = async () => {
  try {
    const response = await api.get("/slots");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
