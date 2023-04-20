import { createSlice,  } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "yo",
  address: { name: "ip" },
};

const apiKey = "d12d05cc54924cc3a19681153d567d51";
let ipv4 = "192.168.8.101";
const apiUrl = `https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}&${ipv4} `;
const locationUrl = `https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}&ip_address = ${ipv4}`;

export const getUserLocation = async () => {
  //fetch user location with
  try {
    const response = await axios.get(apiUrl);
    console.log(response.data);
    return { ...response.data };
  } catch (error) {
    console.log(error);
  }
};

const ipMapSlice = createSlice({
  initialState,
  name: "location",
  reducers: {},
});

export const details = (state) => state.address;
export const ipstatus = (state) => state.status;

export default ipMapSlice.reducer;
