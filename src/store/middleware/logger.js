const api = (param) => (store) => (next) => (action) => {
  console.log("State change", param);
  next(action);
};

export default api;
