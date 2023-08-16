import React from 'react'
import AddEmpComponent from './addempcomponent'
import ListEmpComponent from './listempcomponent'

import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
const MainReduxComponent = () => {
  const employees = useSelector(state=>state.emps);
  return (
    <div className='container'>
        <AddEmpComponent></AddEmpComponent>
        <hr/>
        <ListEmpComponent
           emps={employees}
        ></ListEmpComponent>
    </div>
  )
}

export default MainReduxComponent
