import axios from 'axios';

export const fetchFeedPage = async (page = 1) => {
  const response = await axios.get(`http://localhost:3000/feed/page/${page}`);
  return response.data;
};