import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import your slice reducer

const store = configureStore({
  reducer: {
    user: userReducer, // Add reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
