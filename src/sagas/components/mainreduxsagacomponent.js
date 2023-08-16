import React from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux';

import AddCategoryComponent from './addcategorycomponent';
import ListCategoriesComponent from './listcategoriescomponent';
import { getCategories } from '../actions';


const MainReduxSagaComponent = () => {

    const categoriesRecords = useSelector(state=>state.categories, shallowEqual);



    const dispatch = useDispatch();


    const getCategrories = React.useCallback(
        (state) => dispatch(getCategories('Call Initiated')),
        [dispatch]
      );
     
  return (
    <div className='container'>
        <AddCategoryComponent></AddCategoryComponent>
        <hr/>
       
       { <ListCategoriesComponent
          categories={categoriesRecords}
          getData={getCategrories}
        ></ListCategoriesComponent>}
    </div>
  )
}

export default MainReduxSagaComponent;
