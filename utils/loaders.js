import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;

export const singlePageLoader = async ({ request, params }) => {
  const response = await axios.get(`${url}/posts/${params.id}`);
  return response.data;
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const response = await axios.get(`${url}/posts?${query}`);
  return response.data;
};
