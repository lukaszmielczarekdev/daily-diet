import { get } from "lodash";
import toast from "react-hot-toast";

export const notify = (message) => toast(message);

export const getStoreData = (path, initialData) => {
  const persistedStore = JSON.parse(localStorage.getItem("appStore"));
  const storeDestination = get(persistedStore, path);

  return storeDestination ? storeDestination : initialData;
};
