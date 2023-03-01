import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import adminSlice from "../features/adminSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminSlice,
    user: userSlice,
  },
});
