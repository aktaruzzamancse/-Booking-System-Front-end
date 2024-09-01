import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    services: [],
  }

export const serviceSlice  = createSlice({
    name :"service",
    initialState,
    reducers: {}
})

// export const {  } = serviceSlice.actions

export default serviceSlice.reducer