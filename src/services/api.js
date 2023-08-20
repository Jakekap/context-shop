const baseURL = "https://dummyjson.com";

export const getProducts = async () => {
  try {
    const res = await fetch(`${baseURL}/products`);
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};
