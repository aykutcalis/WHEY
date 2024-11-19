import { LoaderFunctionArgs } from "react-router-dom";

export const fetchProteinProducts = async () => {
  const response = await fetch(
    "https://fe1111.projects.academy.onlyjs.com/api/v1/products?limit=20&offset=0"
  );
  if (!response.ok) {
    throw new Error("Veri alınamadı!");
  }
  const data = await response.json();
 
  return data.data.results;
 
};
