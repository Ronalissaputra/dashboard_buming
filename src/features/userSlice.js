import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("user/getUser", async () => {
  const response = await axios.get("http://localhost:5000/user");
  return response.data;
});

export const deleteUser = createAsyncThunk("user/deleteUser", (uuid) => {
  axios.delete(`http://localhost:5000/user/${uuid}`);
  return uuid;
});

const userEntity = createEntityAdapter({
  selectId: (user) => user.id,
});

const userSlice = createSlice({
  name: "user",
  initialState: userEntity.getInitialState(),
  extraReducers: {
    [deleteUser.fulfilled]: (state, action) => {
      userEntity.removeOne(state, action.payload);
    },
  },
});

export const userSelector = userEntity.getSelectors((state) => state.user);
export default userSlice.reducer;
