

export const fetchProteinProducts = async () => {
  const response = await fetch(
    "https://fe1111.projects.academy.onlyjs.com/api/v1/products?limit=200&offset=0"
  );
  if (!response.ok) {
    throw new Error("Veri alınamadı!");
  }
  const data = await response.json();
  console.log(data)
 
  return data.data.results;
 
};
