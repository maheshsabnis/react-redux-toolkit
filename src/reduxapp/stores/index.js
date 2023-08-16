import { configureStore } from "@reduxjs/toolkit";
import { empsReducer } from "../reducers";

export const store =  configureStore({
    reducer: empsReducer
});