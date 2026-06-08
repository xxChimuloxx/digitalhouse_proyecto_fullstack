import { getApiBaseUrl } from '../utils/formatters';

const API_BASE_URL = getApiBaseUrl();

const request = async endpoint => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Error consultando ${endpoint}`);
  }

  return response.json();
};

export const getProducts = () => request('/api/products');
export const getUsers = () => request('/api/users');
export const getProductDetail = id => request(`/api/products/${id}`);
