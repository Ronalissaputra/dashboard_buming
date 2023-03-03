import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getAdmin = createAsyncThunk("admin/getAdmin", async () => {
  const response = await axios.get("http://localhost:5000/admin");
  return response.data;
});

export const updateAdmin = createAsyncThunk(
  "admin/updateAdmin",
  async ({ uuid, name, email, password }) => {
    const response = await axios.patch(`http://localhost:5000/admin/${uuid}`, {
      name,
      email,
      password,
    });
    return response.data;
  }
);

export const deleteAdmin = createAsyncThunk("admin/deleteAdmin", (uuid) => {
  axios.delete(`http://localhost:5000/admin/${uuid}`);
  return uuid;
});

const adminEntity = createEntityAdapter({
  selectId: (admin) => admin.id,
});

const adminSlice = createSlice({
  name: "admin",
  initialState: adminEntity.getInitialState(),
  extraReducers: {
    [getAdmin.fulfilled]: (state, action) => {
      adminEntity.setAll(state, action.payload);
    },
    [deleteAdmin.fulfilled]: (state, action) => {
      adminEntity.removeOne(state, action.payload);
    },
    [updateAdmin.fulfilled]: (state, action) => {
      adminEntity.updateOne(state, {
        uuid: action.payload,
        updates: action.payload,
      });
    },
  },
});

export const adminSelector = adminEntity.getSelectors((state) => state.admin);
export default adminSlice.reducer;
