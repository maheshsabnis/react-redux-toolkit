import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import MainReduxComponent from './components/mainreduxcomponent';

import { Provider } from 'react-redux';

import { store } from './stores';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <MainReduxComponent></MainReduxComponent>
    </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
