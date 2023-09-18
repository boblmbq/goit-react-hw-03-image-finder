import axios from 'axios';

const params = new URLSearchParams({
  key: '38611269-e32dffa05ef058278d905c8af',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
});

const BASE_URL = axios.create({
  baseURL: `https://pixabay.com/api/`,
});

export const getImages = async (query, page=1) => {
  const imgs = await BASE_URL.get(`?${params}&q=${query}&page=${page}`);
  const { data } = imgs;

  return data;
};
