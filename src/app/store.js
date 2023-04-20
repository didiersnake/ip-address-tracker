import {configureStore} from "@reduxjs/toolkit"
import ipMapSlice from "../components/ipMapSlice"

export const store = configureStore({
    reducer: {
        map: ipMapSlice,
    }
})
