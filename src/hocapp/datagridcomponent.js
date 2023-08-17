import React from 'react'

const DataGridComponent = (props) => {

  if(props.dataSource === undefined || props.dataSource.length === 0){
    return (
        <div className='alert alert-danger'>
            No Data To Show
        </div>
      )
  }  
  const headers = Object.keys(props.dataSource[0]);

  return (
    <div className='container'>
        <table className='table table-bordered table-striped'>
            <thead className='table-dark'>
                <tr>
                    {
                        headers.map((col,index)=>(
                            <th key={index}>{col}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody className='table-warning'>
                {
                    props.dataSource.map((record,idx)=>(
                        <tr key={idx}>
                            {
                                headers.map((col,index)=>(
                                    <td key={index}>{record[col]}</td>
                                ))
                            }
                             <td hidden={!props.canDelete}>
                                 <button className='btn btn-danger' onClick={()=>props.delete(record)}>Delete</button>
                             </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default DataGridComponent
