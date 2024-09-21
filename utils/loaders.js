import axios from "axios";
import { defer } from "react-router-dom";

const url = import.meta.env.VITE_BACKEND_URL;

export const singlePageLoader = async ({ request, params }) => {
  const response = await axios.get(`${url}/posts/${params.id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const responsePromise = axios.get(`${url}/posts?${query}`, {
    withCredentials: true,
  });
  return defer({ response: responsePromise });
};

export const userPostsLoader = async () => {
  try {
    const responsePromise = await axios.get(`${url}/posts/users/posts`, {
      withCredentials: true,
    });
    return defer({ response: responsePromise });
  } catch (error) {
    throw new Error("Error");
  }
};
