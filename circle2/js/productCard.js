import { fetchProducts } from './data.js';

export async function renderProductCards(containerId, start = 0, limit = 4) {
  const container = document.getElementById(containerId);

  try {
    const products = await fetchProducts(start, limit);

    // Clear the container before rendering new products
    container.innerHTML = '';

    // Loop through each product and create a card
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

      // Check for images and fallback to a placeholder if none
      const mainImage = product.images && product.images.length > 0
        ? product.images[0]
        : 'https://via.placeholder.com/300x180?text=No+Image';

      // Render the card content
      card.innerHTML = `
       <div class= "product_card"> <img src="${mainImage}" alt="${product.title}" class="product-image"
             onerror="this.src='https://via.placeholder.com/300x180?text=Image+Unavailable'" />
        <h3 class = "product_card_heading">${product.title}</h3>
        <p>${product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</p>
        <div class="buttons">
         <div class = "btn-row">
          <button class="book-btn" onclick="alert('Booked ${product.title}')">Book Now</button>
          <button class="add-btn" onclick="alert('Added ${product.title} to cart')">Add to Cart</button>
          </div>
          <button class="more-btn"onclick="window.location.href='product.html?id=${product.id}'">More Detail</button>
        </div>
        </div>
      `;

      // Append the generated card to the container
      container.appendChild(card);
    });

  } catch (error) {
    console.error('Error fetching products:', error);
    // Optional: Show a friendly error message to users
    container.innerHTML = '<p>Sorry, we couldn\'t load the products right now. Please try again later.</p>';
  }
}
