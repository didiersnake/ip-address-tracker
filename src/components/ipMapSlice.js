import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "yo",
  address: {},
};

const apiKey = "d12d05cc54924cc3a19681153d567d51";
let ipv4 = "";
const fields = "ip_address,country,city,timezone,connection,longitude,latitude"
export const getUrl = (ip) => {
  return `https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}&${ip}&fields=${fields}`;
};

/* 
const apiUrl = `https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}&${ipv4} `;
const locationUrl = `https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}&ip_address = ${ipv4}`;
 */

export const getIpLocation = createAsyncThunk("ip/fetchIp", async () => {
  //fetch IP location 
  try {
    const response = await axios.get(getUrl(ipv4));
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
      .addCase(getIpLocation.pending, (state, action) => {})
      .addCase(getIpLocation.fulfilled, (state, action) => {
        state.address = action.payload;
        console.log(state.address);
      })
      .addCase(getIpLocation.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const { locateUser } = ipMapSlice.actions;
export const details = (state) => state.address;
export const ipstatus = (state) => state.status;

export default ipMapSlice.reducer;
