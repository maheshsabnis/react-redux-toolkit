import React, { useState } from 'react'
import { CategoryService } from '../sagas/services/httpservice'
import { useMutation } from 'react-query'
const UseMutationComponent = () => {

  const serv = new CategoryService();
  const [message, setMessage] = useState('');

   // use useMutation
    //p1: Async method that will request the Mutation Operations
    // p2: Retry 

    // mutate: the request that will be dispatched 
    // by the Component to mutate data using useMutation()
    // in short execute the 'saveProdfuct()' method

    const saveCategory=async()=>{
        const response  =  await serv.postCategory(category);
        setMessage(JSON.stringify(response));
     }
 

    const { 
        isLoading, isError,error,mutate
  
      } = useMutation(saveCategory, {retry:3});

    let category = {
        CategoryId: 4534,
        CategoryName: 'Cat-4534',
        BasePrice: 5465
    };

   
    if(isLoading){
        return (<div className='container'>
            <strong>Data is yet Load</strong>
        </div>)
      }
      if(isError) {
        return (<div className='container'>
              {
                error
              }
    </div>)
      }

  return (
    <div className='container'>
        <h2> Use Mutation</h2>
        <button onClick={()=>{mutate()}} >Save</button>
        <hr/>
        <div>
            <strong>
                {
                    message
                }
            </strong>
        </div>
    </div>
  )
}

export default UseMutationComponent
