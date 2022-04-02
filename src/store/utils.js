import { get } from "lodash";

export const getStoreData = (path, initialData) => {
  const persistedStore = JSON.parse(localStorage.getItem("appStore"));
  const storeDestination = get(persistedStore, path);

  return storeDestination ? storeDestination : initialData;
};
