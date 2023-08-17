import React, { useState } from 'react'
import { wrapperComponent } from './hoc'
import DataGridComponent from './datagridcomponent'
const ClientComponent = () => {
  const DeletableGrid = wrapperComponent(DataGridComponent)

  let [collection, setData] = useState([
    {id:1,name:'A'},
    {id:2,name:'B'},
    {id:3,name:'C'},
    {id:4,name:'D'},
    {id:5,name:'E'},
    {id:6,name:'F'},
  ])
  const deleteRecord=(record)=>{
    alert(`In Client ${JSON.stringify(record)}`); 
  }
  return (
    <div className='container'>
       <DeletableGrid dataSource=
       {collection} canDelete={true} delete={deleteRecord}/>
    </div>
  )
}

export default ClientComponent
