import { configureStore } from "@reduxjs/toolkit";
import { CryptoAPI } from "../services/CryptoAPI";
import { NewsAPI } from "../services/NewsAPI";

export default configureStore({
  reducer: {
    [CryptoAPI.reducerPath]: CryptoAPI.reducer,
    [NewsAPI.reducerPath]: NewsAPI.reducer,
  },
});
