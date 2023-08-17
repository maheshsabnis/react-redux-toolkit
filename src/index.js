import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ClientComponent from './hocapp/clientcomponent'; 
 


import MyComponent from './portal/portalcomponent'; 
import reportWebVitals from './reportWebVitals';
import ModelDialogContainerComponent from './portal/modeldialogcontainercomponent';
import UserQueryComponent from './rquery/usequerycomponent';
import { QueryClientProvider, QueryClient } from 'react-query';
import UseMutationComponent from './rquery/usemutationcomponent';
// define an instance of the QueryClient object
const queryClient  =new  QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         
         {/* <UserQueryComponent></UserQueryComponent> */}
         <UseMutationComponent></UseMutationComponent>
     </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
