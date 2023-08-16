import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCategory } from '../actions';

const AddCategoryComponent = () => {

  const dispatch = useDispatch();  

  const [category, setCategory] = useState({
    CategoryId:0, CategoryName:'', BasePrice:0
  });  

  const save=()=>{
    dispatch(addCategory(category));
  };
  const clear=()=>{
    setCategory({
        CategoryId:0, CategoryName:'', BasePrice:0
      });
  }

  return (
    <div className='container'>
        <div className='form-group'>
            <label>Category Id</label>
            <input className='form-control'
               value={category.CategoryId}
               onChange={(evt)=>setCategory({...category, CategoryId:parseInt(evt.target.value)})}
            />
        </div>
        <div className='form-group'>
            <label>Category Name</label>
            <input className='form-control'
               value={category.CategoryName}
               onChange={(evt)=>setCategory({...category, CategoryName:evt.target.value})}
            />
        </div>
        <div className='form-group'>
            <label>Base Price</label>
            <input className='form-control'
               value={category.BasePrice}
               onChange={(evt)=>setCategory({...category, BasePrice:parseInt(evt.target.value)})}
            />
        </div>
        <div className='btn-group-lg'>
            <button className='btn btn-warning' onClick={clear}>Clear</button>
            <button className='btn btn-success' onClick={save}>Save</button>
        </div>
    </div>
  )
}

export default AddCategoryComponent
