import { createReducer } from "@reduxjs/toolkit";

import { addEmp } from "../actions/addemp";

/* define a state */

export const initialState = {emps:[]};

/* define reducer */

export const empsReducer = createReducer(initialState, (builder)=>{
   
    builder.addCase(addEmp,(state,action)=>{
         state.emps.push(action.payload);
         console.log(`in reducer ${JSON.stringify(state)}`);
    })
}); 

