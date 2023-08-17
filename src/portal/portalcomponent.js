import { useState } from 'react';
import { createPortal } from 'react-dom';
import MessageComponent from './messagecomponent';

function MyComponent() {
  const [show, canShow] = useState(true);  
  return (
    <div style={{ border: '2px solid black' }}>
      <p>This child is placed in the parent div.</p>
      <hr/>
      <button className='btn btn-danger'
       onClick={()=>canShow(!show)}
      >Show/Hide</button>  
      { show && createPortal(
        <div className='alert alert-danger'
         onClick={()=>alert('Danger div')}>
            <MessageComponent></MessageComponent>
            <p>This child is placed in the document body.</p>
        </div>,
        // document.body
        document.getElementById('dvnew')
      )}
      
    </div>
  );
}
export default MyComponent;