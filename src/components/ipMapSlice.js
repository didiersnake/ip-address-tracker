import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "",
  address: {},
};

const apiKey = "d12d05cc54924cc3a19681153d567d51";
const apiUrl = "https://ipgeolocation.abstractapi.com/v1/";

export const getUserLocation = createAsyncThunk("ip/ipAddress", async () => {
    //fetch user location with 
  const response = await axios.get(apiUrl, { apiKey: apiKey });
  console.log(response.data);
  return response.data;
});

const ipMapSlice = createSlice({
  name: "ipLocation",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserLocation.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUserLocation.fulfilled, (state, action) => {
        // get loactions details
      })
      .addCase(getUserLocation.rejected, (state, ation) => {
        state.status = "failed";
      });
  },
});

export const ipDetails = (state) => state.ipLocation.address
export const ipstatus = state => state.ipLocation.status
export default ipMapSlice.reducer;
