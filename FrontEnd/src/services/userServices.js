import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3333";

export function signup(data) {
  delete data.confirmPassword;
  const body = {
    ...data,
    username:generateUserName(data.name),
    avatar:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    background:
      "https://cdn.pixabay.com/photo/2023/02/01/21/40/pink-7761356_960_720.png",
  };
  const response = axios.post(`${baseURL}/user/create`, body);
  return response;
}

export function signin(data) {
  const response = axios.post(`${baseURL}/auth/login`, data);
  return response;
}

export function userLogged(){
    const response = axios.get(`${baseURL}/user/findById`,{
        headers:{
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    });
    return response;
}

function generateUserName(name){
    const withoutSpace = name.replace(/\s/g, "").toLowerCase();
    const randoNumber = Math.floor(Math.random() * 1000);
    return `${withoutSpace}_${randoNumber}`
}