import axios from "axios";

const BASE_URL = "http://localhost:5000/api";


function creatingHeader() {
  const auth = JSON.parse(localStorage.getItem("weather") as any);
  const header = {
    headers: {
        Authorization : `Bearer ${auth}`
    }
  }
  return header;
}

async function signup(data: any) {
  const response = await axios.post(`${BASE_URL}/signup`, data);
  return response;
}

async function signin(data: object) {
  const token = creatingHeader();
  const response = await axios.post(`${BASE_URL}/`, data, token);
  return response;
}

export { signin, signup };
