import { createReducer } from "@reduxjs/toolkit";
import {initialState} from './../state';
import { getCategories, addCategory  } from "../actions";
import { ADD_CATEGORY, ADD_CATEGORY_SUCCESS, GET_CATEGORIES, GET_CATEGORIES_SUCCESS } from "../constants";


export const categoryReducer = createReducer(initialState,(builder)=>{
    builder.addCase(GET_CATEGORIES,(state,action)=>{
        state.categories = [];
    })
        .addCase(GET_CATEGORIES_SUCCESS,(state,action)=>{
            state.categories = action.payload;
             
        })
        .addCase(ADD_CATEGORY,(state,action)=>{
              state.category = action.payload;
        })
        .addCase(ADD_CATEGORY_SUCCESS, (state,action)=>{
            console.log(`Add Category State 1 ${JSON.stringify(state)}`);
            state.category = action.payload;
            state.categories.push(action.payload);
            console.log(`Add Category ${JSON.stringify(action.payload)}`);
            console.log(`Add Category State 2 ${JSON.stringify(state)}`);
        });

});
