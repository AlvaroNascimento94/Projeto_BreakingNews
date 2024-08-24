import axios from "axios"

const baseURL = "http://localhost:3333"

export function getAllNews(){
    const response = axios.get(`${baseURL}/news/`);
    return response
}