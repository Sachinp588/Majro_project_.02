export async function fetchProducts(start = 0, limit = 4) {
  const response = await fetch('./data/products.json');
  const data = await response.json();
  return data.slice(start, start + limit);
}

export async function getProductById(id) {
  const response = await fetch('./data/products.json');
  const data = await response.json();
  return data.find(product => product.id === parseInt(id));
}
