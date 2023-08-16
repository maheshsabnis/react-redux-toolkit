import { createAction } from "@reduxjs/toolkit";

import { ADD_CATEGORY, GET_CATEGORIES, GET_CATEGORY, PUT_CATEGORY,DELETE_CATEGORY, GET_CATEGORIES_SUCCESS, ADD_CATEGORY_SUCCESS } from "../constants";


export const getCategories = createAction(GET_CATEGORIES,(msg)=>{
    return {
        payload: {
            message:msg
        }
    }
});

export const getCategoriesSuccess = createAction(GET_CATEGORIES_SUCCESS, (categories)=>{
    console.log(`Get Categories Sucess Action ${JSON.stringify(categories)}`);
    return {
        payload:categories
    }
});

export const getCategory = createAction(GET_CATEGORY,(id)=>{
    return {
        payload:id
    }
});

export const addCategory= createAction(ADD_CATEGORY,(category)=>{
    return{
        payload:category
    }
});

export const addCategorySuccess= createAction(ADD_CATEGORY_SUCCESS,(category)=>{
    console.log(`Add Category Sucess Action ${JSON.stringify(category)}`);
    return{
        payload:category
    }
});

export const updateCategory= createAction(PUT_CATEGORY,(id,category)=>{
    return{
        payload:{
            id,
            category
        }
    }
});

export const deleteCategory= createAction(DELETE_CATEGORY,(id)=>{
    return{
        payload:id
    }
});


