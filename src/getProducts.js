import { useFetch } from "./components/hooks/useFetch";

export const getAllProducts = async () => {
  const data = useFetch("https://localhost:5173/products");
  return data;
};

export const getProductById = async (id) => {
  const data = useFetch(`https://localhost:5173/products/${id}`);
  return data;
};
