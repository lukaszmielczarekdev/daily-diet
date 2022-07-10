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

export const fetchUsers = () => API.get("/user");
export const externalSignIn = (data) => API.post("/user/externalsignin", data);
export const signIn = (data) => API.post("/user/signin", data);
export const signUp = (data) => API.post("/user/signup", data);
export const updateUserProfile = (id, profile) =>
  API.patch(`/user/profile/${id}`, profile);
export const updateUserData = (id, userData) =>
  API.patch(`/user/userData/${id}`, userData);
export const deleteUser = (id) => API.delete(`/user/${id}`);
export const resetPassword = (data) => API.post("/user/resetPassword", data);
export const changePassword = (token, data) =>
  API.patch(`/user/changePassword/${token}`, data);
export const changeNewsletterStatus = (id, data) =>
  API.patch(`/user/changeNewsletterStatus/${id}`, data);
export const fakeUserNewsletterUnsubscribe = (token, data) =>
  API.patch(`/user/unsubscribe/${token}`, data);

export const fetchProducts = () => API.get("/products");
export const createProduct = (newProduct) => API.post("/products", newProduct);
export const updateProduct = (id, updatedProduct) =>
  API.patch(`/products/${id}`, updatedProduct);
export const deleteProduct = (id) => API.delete(`/products/${id}`);

export const fetchMeals = () => API.get("/meals");
export const createMeal = (newMeal) => API.post("/meals", newMeal);
export const updateMeal = (id, updatedMeal) =>
  API.patch(`/meals/${id}`, updatedMeal);
export const deleteMeal = (id) => API.delete(`/meals/${id}`);
