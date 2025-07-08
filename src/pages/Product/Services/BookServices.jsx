import axios from "axios";

const BASE_URL = "http://localhost:8087/api/book";

export const getBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/all`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener libros:", error);
    throw error;
  }
};

export const getCopyCounts = async (token) => {
  return axios.get("http://localhost:8087/api/book/copies/count", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getBooksByType = async (type) => axios.get(`/api/book/all/${type}`).then(r => r.data);
export const getBooksByTitle = async (title) => axios.get(`/api/book/find/${title}`).then(r => r.data);