import api from "./api";

export const login = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};
