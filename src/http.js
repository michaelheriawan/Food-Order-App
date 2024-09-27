export async function fetchMeals() {
  const response = await fetch("http://localhost:3000/meals");
  const resData = await response.json();
  if (!response.ok) {
    const error = new Error("Failed to fetch meals");
    throw error;
  }
  return resData;
}

export async function findMeals(id) {
  const response = await fetch("http://localhost:3000/meals");
  const resData = await response.json();
  if (!response.ok) {
    const error = new Error("Failed to fetch meals");
    throw error;
  }
  return resData.find((item) => item.id === id + "");
}

export async function submitCheckout(data) {
  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    body: JSON.stringify({ order: data }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json();
  if (!response.ok) {
    const error = new Error(resData);
    throw error;
  }
  return resData;
}
