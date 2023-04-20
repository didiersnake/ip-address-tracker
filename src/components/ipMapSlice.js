import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "yo",
  address: {},
};

const apiKey = "d12d05cc54924cc3a19681153d567d51";
let ipv4 = "192.168.8.101";
export const getUrl = (ip) => {
  return `https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}&${ip}`;
};

const apiUrl = `https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}&${ipv4} `;
const locationUrl = `https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}&ip_address = ${ipv4}`;

export const getUserLocation = createAsyncThunk("ip/fetchIp", async () => {
  //fetch user location 
  try {
    const response = await axios.get(getUrl(ipv4));
    console.log(response.data);
    return { ...response.data };
  } catch (error) {
    console.log(error);
  }
});

const ipMapSlice = createSlice({
  initialState,
  name: "location",
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserLocation.pending, (state, action) => {})
      .addCase(getUserLocation.fulfilled, (state, action) => {
        state.address = action.payload;
        console.log(state.address);
      })
      .addCase(getUserLocation.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const { locateUser } = ipMapSlice.actions;
export const details = (state) => state.address;
export const ipstatus = (state) => state.status;

export default ipMapSlice.reducer;
