import { createReducer } from "@reduxjs/toolkit";
import {initialState} from './../state';
import { getCategories, addCategory  } from "../actions";
import { ADD_CATEGORY_SUCCESS, GET_CATEGORIES_SUCCESS } from "../constants";


export const categoryReducer = createReducer(initialState,(builder)=>{
    builder
        .addCase(GET_CATEGORIES_SUCCESS,(state,action)=>{
            state = action.payload;
            console.log(`List of Categories ${JSON.stringify(state)}`);
        })
        .addCase(ADD_CATEGORY_SUCCESS, (state,action)=>{
            state.push(action.payload);
            console.log(`Add Category ${JSON.stringify(state)}`);
        });

});
