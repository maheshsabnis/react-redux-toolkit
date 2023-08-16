// import operators for calling services (call()), dispatching output action (put())
// taking the latest response (takeLatest) and listening to all actions (all())

import { all, call, put, takeLatest } from "redux-saga/effects";

import {ADD_CATEGORY_SUCCESS, GET_CATEGORIES_SUCCESS} from './../constants';

import { getCategoriesSuccess, addCategorySuccess } from "../actions";


// also import the service
import { CategoryService } from "../services/httpservice";

// local methods for get and post
function getCategories() {
  let serv = new CategoryService();
  // the resolved promise object which is a response which is itself a promise
  const response = serv.getCategories().then((result) => result.data);
  // lets resolve the promise response
  return Promise.resolve(response);
}

function postCategory(category) {
  let serv = new CategoryService();
  const response = serv.postCategory(category).then((result) => result.data);
  return Promise.resolve(response);
}


function* outputActionGetCategories() {
    console.log(`Get Categories success  Saga`);
  try {
    // call the promise based method
    const response = yield call(getCategories);
   console.log(`The resolved response in SAGA is ${JSON.stringify(response)}`);
    // Lets dispatch the success  output action
    yield put(getCategoriesSuccess(response));
  } catch (ex) {
    // Lets dispatch the failed  output action
    yield put({
      type: "GET_CATEGORIES_FAILED", // action type
      message: `Error Occurred ${ex.message}` ,
    });
  }
}
function* inputActionGetCategories() {
    console.log(`Get Categories Saga`);
  // link the input action with output action
  // Parameters
  // P1: The Action that is dispatched
  // P2: The generator function (worker) that will executed against the input dispatched action
  yield takeLatest("GET_CATEGORIES", outputActionGetCategories);
}



// pass the 'action' object to read the payload
// so that it can be passed to the postDepartment method
function* outputActionAddCategory(action) {
    try {
        // console.log(`Received data from UI is = ${JSON.stringify(JSON.stringify(action.payload))}`);
        // call the promise based method
        const response = yield call(postCategory, action.payload);
        //console.log(`The resolved response in SAGA is ${JSON.stringify(response)}`);
        // Lets dispatch the success  output action
        yield put(addCategorySuccess(response));
      } catch (ex) {
        // Lets dispatch the failed  output action
        yield put({
          type: "ADD_CATEGORY_FAILED", // action type
          message: `Error Occurred ${ex.message}` ,
        });
      }
}

function* inputActionAddCategory() {
  // The parameter 2 will read the action object with the payload
  // {type:`ADD_DEPARTMENT`, payload}
  // the takeLatest will pass the action object to the linked output method
  yield takeLatest("ADD_CATEGORY", outputActionAddCategory);
}

// create a SAGA Export function, that will work on root
export default function* rootSaga() {
    console.log(`Running with Root SAGA`);
  // listen to all actions
  yield all([inputActionGetCategories(),inputActionAddCategory()]);
}
