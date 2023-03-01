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

const userEntity = createEntityAdapter({
  selectId: (user) => user.id,
});

const userSlice = createSlice({
  name: "user",
  initialState: userEntity.getInitialState(),
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      userEntity.setAll(state, action.payload);
    },
  },
});

export const userSelector = userEntity.getSelectors((state) => state.user);
export default userSlice.reducer;
