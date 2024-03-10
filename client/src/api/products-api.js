const createProduct = async (apiUrl, newProduct) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

const getProduct = async (apiUrl, id) => {
  const response = await fetch(`${apiUrl}/${id}`);
  return await response.json();
};

const getProducts = async (apiUrl) => {
  const response = await fetch(apiUrl, {});
  return await response.json();
};

const updateProduct = async (apiUrl, id, newProduct) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

const deleteProduct = async (apiUrl, id) => {
  const response = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
  return await response.json();
};

const filterProducts = async (apiUrl, params) => {
  const response = await fetch(apiUrl + "?" + new URLSearchParams(params));
  return await response.json();
};

export { createProduct, getProduct, getProducts, updateProduct, deleteProduct, filterProducts };
