import axios from "axios";

const url = "https://daily-diet.herokuapp.com/diaries";

export const fetchDiaries = () => axios.get(url);
export const createDiary = (newDiary) => axios.post(url, newDiary);
export const updateDiary = (id, updatedDiary) =>
  axios.patch(`${url}/${id}`, updatedDiary);
export const deleteDiary = (id) => axios.delete(`${url}/${id}`);
