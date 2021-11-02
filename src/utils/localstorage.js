// checks if any data exists in the localStorage and replaces the null object if needed
export const getData = (localStorageData, initialData) => {
  let data = localStorage.getItem(localStorageData);
  if (data === null) {
    data = JSON.stringify(initialData);
  }
  return data !== JSON.stringify(initialData) ? JSON.parse(data) : initialData;
};
