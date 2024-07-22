import { addToCart } from './storage';

export const listProducts = (products) => {
  const productsContainer = document.getElementById('products');
  const productTemplate = document.getElementById('product-template');

  productsContainer.innerHTML = '';
  for (const product of products) {
    const productElement = document.createElement('div');
    const productHtml = productTemplate.innerHTML
      .replace(/\{\{image\}\}/g, product.image)
      .replace(/\{\{title\}\}/g, product.title)
      .replace(/\{\{description\}\}/g, product.description)
      .replace(/\{\{category\}\}/g, product.category)
      .replace(/\{\{price\}\}/g, product.price)
      .replace(/\{\{rating\}\}/g, product.rating.rate)
      .replace(/\{\{reviews\}\}/g, product.rating.count)
      .replace(/\{\{productId\}\}/g, product.id)
    ;

    productElement.innerHTML = productHtml;

    const button = productElement.getElementsByClassName('add-to-cart')[0];
    button?.addEventListener('click', () => {
      addToCart(JSON.parse(button.dataset.product))
    });

    productsContainer.append(productElement);
  }
};

export const showError = (error) => console.error(error);
