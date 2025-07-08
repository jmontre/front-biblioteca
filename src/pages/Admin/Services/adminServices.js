import axios from "axios";

const BASE_URL = "http://localhost:8087/api";
const authHeader = () => {
  const token = localStorage.getItem("token");
  return token
    ? { headers: { Authorization: `Bearer ${token}` } }
    : { headers: {} };
};

export const createBook = async (data) => {
  return axios.post(`${BASE_URL}/book/new`, data, authHeader());
};

export const createCopy = async (bookId) => {
  return axios.post(`${BASE_URL}/book/newcopy`, { bookId }, authHeader());
};

export const findReaderByEmail = async (email) => {
  return axios.get(`${BASE_URL}/reader/find/${email}`, authHeader());
};

export const updateReaderState = async (email, state) => {
  return axios.post(`${BASE_URL}/reader/state/${email}`, state, authHeader());
};

export const getBookingsByEmail = async (email) => {
  return axios.get(`${BASE_URL}/booking/find/${email}`, authHeader());
};

export const getFinesByEmail = async (email) => {
  return axios.get(`${BASE_URL}/fine/searchByEmail?email=${email}`, authHeader());
};

export const returnBook = async (bookingId, body) => {
  return axios.post(`${BASE_URL}/booking/return/${bookingId}`, body, authHeader());
};

export const getBookings = async (email) => {
   return axios.get(`${BASE_URL}/booking/searchByEmail?email=${email}`, authHeader());
};

export const getFines = async (email) => {
  return axios.get(`${BASE_URL}/fine/searchByEmail?email=${email}`, authHeader());
};

export const createLoan = async (bookingData) => {
  return axios.post(`${BASE_URL}/booking/new`, bookingData, authHeader());
};

export const getBookCopyByTitle = (title) => {
  return axios.get(`${BASE_URL}/book/copy/${title}`, authHeader());
};

export const getAllReaders = async () => {
  return axios.get(`${BASE_URL}/reader/readers`, authHeader());
};

export const getAllBooks = async () => {
  return axios.get(`${BASE_URL}/book/all`, authHeader());
};

