import React, { useEffect } from 'react'

const ListCategoriesComponent = (props) => {
  useEffect(()=>{
    props.getData({...props.categories});
  },[]);  
  if(props.categories === undefined || props.categories.length === 0) {
     return (
        <div className='alert alert-danger'>
             <strong>
                No data to show
             </strong>
        </div>
     );
  }
  return (
    <div className='container'>
       {
        JSON.stringify(props.categories)
       }  
    </div>
  )
}

export default ListCategoriesComponent
