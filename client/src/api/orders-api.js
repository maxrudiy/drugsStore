const createOrder = async (apiUrl, newOrder) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(newOrder),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

const getOrder = async (apiUrl, id) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    credentials: "include",
  });
  return await response.json();
};

const getOrders = async (apiUrl) => {
  const response = await fetch(apiUrl, {
    credentials: "include",
  });
  return await response.json();
};

const getOrdersByName = async (apiUrl, name) => {
  const response = await fetch(apiUrl + "/by-name", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(name),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

const updateOrder = async (apiUrl, id, newOrder) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(newOrder),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

const deleteOrder = async (apiUrl, id) => {
  const response = await fetch(`${apiUrl}/${id}`, { method: "DELETE", credentials: "include" });
  return await response.json();
};

export { createOrder, getOrder, getOrders, updateOrder, deleteOrder, getOrdersByName };
