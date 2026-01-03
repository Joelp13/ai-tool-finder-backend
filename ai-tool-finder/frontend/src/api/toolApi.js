import api from "./api";

export const fetchTools = (filters = {}) => {
  const params = {};

  if (filters.category) params.category = filters.category;
  if (filters.pricing) params.pricing = filters.pricing;
  if (filters.rating) params.rating = filters.rating;

  return api.get("/tools", { params }).then(res => res.data);
};
