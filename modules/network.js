import { listProducts, showError } from './ui';

export const fetchProducts = () => {
  return fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => listProducts(products))
    .catch(error => showError(error))
};
