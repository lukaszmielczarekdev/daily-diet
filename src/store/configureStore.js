import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
// import logger from "./middleware/logger";

const configStore = () => {
  return configureStore({
    reducer,
    // middleware: [logger({ status: "successful" })],
  });
};

export default configStore;
