import { api } from "./api";

export const getProductsServices = async () => {
  return await api
    .get("?page=1&rows=10&sortBy=id&orderBy=DESC")
    .then((response) => response.data.products)
    .catch(() => {
        error: true
    });
};
