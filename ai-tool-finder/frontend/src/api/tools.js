import api from "./api";

export const getAllTools = (filters = {}) => {
  return api.get("/tools", {
    params: filters
  });
};
