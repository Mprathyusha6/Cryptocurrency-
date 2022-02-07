import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";

// export default configureStore({
//   reducer: {
//     [cryptoApi.reducerPath]: cryptoApi.reducer,

//   }
// });
const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});

export default store;
