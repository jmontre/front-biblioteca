import axios from "axios";

const BASE_URL = "http://localhost:8087/api";
const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getReaderBookings = (email) =>
  axios.get(`${BASE_URL}/booking/find/${email}`, authHeader());
export const getReaderFines = (email) => 
  axios.get(`http://localhost:8087/api/fine/searchByEmail?email=${email}`, authHeader());