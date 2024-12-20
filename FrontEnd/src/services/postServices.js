import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3333";

export function getAllNews() {
  const response = axios.get(`${baseURL}/news/`);
  return response;
}

export function getTopNews() {
  const response = axios.get(`${baseURL}/news/top`);
  return response;
}

export function searchNews(title) {
  const response = axios.get(`${baseURL}/news/search?title=${title}`);
  return response;
}

export function getAllNewsByUser() {
  const response = axios.get(`${baseURL}/news/byUserId`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function createNews(data) {
  const response = axios.post(`${baseURL}/news/create`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function getNewsById(id) {
  const response = axios.get(`${baseURL}/news/byIdPost/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function editNews(body, id) {
  const response = axios.patch(`${baseURL}/news/update/${id}`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function deleteNews(id) {
  const response = axios.delete(`${baseURL}/news/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response
}