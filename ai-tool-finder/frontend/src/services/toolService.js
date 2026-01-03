import api from "../api/api";

export const getAllTools = async () => {
  const response = await api.get("/tools");
  return response.data;
};

export const getToolById = async (id) => {
  const response = await api.get(`/tools/${id}`);
  return response.data;
};
