import { createSlice } from "@reduxjs/toolkit";

import { initialState, empsReducer } from "../reducers";

export const empsSlice = createSlice({
    name:'empsSlice',
    initialState,
    reducers:empsReducer
}) 
