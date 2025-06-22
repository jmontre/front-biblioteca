import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const getBooksById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/character/${id}`);
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    console.error("Error al obtener personajes:", error);
    throw error;
  }
};
