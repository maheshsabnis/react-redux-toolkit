import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { addEmp } from '../actions/addemp';
const AddEmpComponent = () => {
  const dispatch = useDispatch();  
  const [emp,setEmp] = useState({
     EmpNo:'', EmpName:''
  });  

  const save = ()=>{
      dispatch(addEmp(emp));
  };

  const clear=()=>{
     setEmp({
        EmpNo:'', EmpName:''
     });
  }

  return (
    <div className='container'>
        <div className='form-group'>
          <label>Emp No</label>
          <input className='form-control'
           value={emp.EmpNo}
            onChange={(evt)=>setEmp({...emp,EmpNo:evt.target.value})}
           />
        </div> 
        <div className='form-group'>
          <label>Emp Name</label>
          <input className='form-control'
           value={emp.EmpName}
            onChange={(evt)=>setEmp({...emp,EmpName:evt.target.value})}
           />
        </div> 
        <div className='btn-group-lg'>
            <button className='btn btn-warning'
              onClick={clear}
            >Clear</button>
            <button className='btn btn-success'
              onClick={save}
            >Save</button>
        </div>
    </div>
  )
}

export default AddEmpComponent
