import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "../reducers";

import rootSaga from "../effects";

 import createSagaMiddleware from "@redux-saga/core";

 /* Create Saga Middleware */

 const sagaMiddleware = createSagaMiddleware();

export const store =  configureStore({
    reducer: categoryReducer,
    middleware:[sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
