import axios from "axios";

const baseURL = "http://localhost:3333";

export function signup(data) {
  delete data.confirmPassword;
  const body = {
    ...data,
    username:generateUserName(data.name),
    avatar:
      "https://i.pinimg.com/originals/1b/8b/9d/1b8b9d6c3c6b4b3c4d4a1e6b1e5b4d2c.jpg",
    background:
      "https://i.pinimg.com/originals/1b/8b/9d/1b8b9d6c3c6b4b3c4d4a1e6b1e5b4d2c.jpg",
  };
  const response = axios.post(`${baseURL}/user/create`, body);
  return response;
}

function generateUserName(name){
    const withoutSpace = name.replace(/\s/g, "").toLowerCase();
    const randoNumber = Math.floor(Math.random() * 1000);
    return `${withoutSpace}_${randoNumber}`
}