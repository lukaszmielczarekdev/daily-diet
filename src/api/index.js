import axios from "axios";

const API = axios.create({ baseURL: "https://daily-diet.herokuapp.com" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).credential
    }`;
  }
  return req;
});

export const fetchDiaries = () => API.get("/diaries");
export const createDiary = (newDiary) => API.post("/diaries", newDiary);
export const updateDiary = (id, updatedDiary) =>
  API.patch(`/diaries/${id}`, updatedDiary);
export const deleteDiary = (id) => API.delete(`/diaries/${id}`);

export const signIn = (data) => API.post("/user/signin", data);
export const signUp = (data) => API.post("/user/signup", data);
export const updateUserProfile = (id, updatedProfile) =>
  API.patch(`/user/update/${id}`, updatedProfile);
