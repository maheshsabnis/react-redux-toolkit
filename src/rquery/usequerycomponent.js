import React from 'react'
import {CategoryService} from './../sagas/services/httpservice';

import { useQuery } from 'react-query';

const UserQueryComponent = () => {
  const serv =  new CategoryService();
  
  const getCategories = async()=>{
    const categories = await serv.getCategories();
    return categories;
  }

  /* Us ethe useQuery */
  const {data,error,isError,isLoading}  = useQuery('products',getCategories,{
    retry:true, /* Retry if set to true else generate error */
  });

  if(isLoading){
    return (<div className='container'>
        <strong>Data is yet Load</strong>
    </div>)
  }
  if(isError) {
    return (<div className='container'>
    <strong>Error Occurred : {error.message}</strong>
</div>)
  }
  return ( 
    <div className='container'>
        {
          JSON.stringify(data)
       }
    </div>
  )
}

export default UserQueryComponent
