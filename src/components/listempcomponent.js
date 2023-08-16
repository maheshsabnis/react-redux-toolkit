import React, { useState } from 'react'

const ListEmpComponent = (props) => {
  console.log(typeof(props.emps)); 
  if(props.emps === undefined || props.emps.length === 0){
    return (
        <div className='alert alert-danger'>No Data to Show</div>
    )
  } 
  return (
    <div className='container'>
        <table className='table table-bordered table-striped'>
            <thead className='table-dark'>
                <tr>
                    <th>Emp No</th>
                    <th>Emp Name</th>
                </tr>
            </thead>
            <tbody className='table-warning'>   
            {
            props.emps.map((emp,index)=>(
                <tr>
                    <td>{emp.EmpNo}</td>
                    <td>{emp.EmpName}</td>
                </tr>    
            ))
            }
            </tbody>
        </table>
       
    </div>
  )
}

export default ListEmpComponent
