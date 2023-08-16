import { createAction } from '@reduxjs/toolkit';
import {ADD_EMP, LIST_EMPS} from './../enums/constants';

  


export const addEmp= createAction(ADD_EMP, (emp)=>{
    console.log(`In Action ${JSON.stringify(emp)}`);
   emp.EmpName = emp.EmpName.toUpperCase(); 
   return {
      payload: emp
   }
});
