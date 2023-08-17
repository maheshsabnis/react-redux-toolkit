import React from 'react'

const MessageComponent = () => {
  return (
    <div className='alert alert-success'
      onClick={()=>alert('Success div')}
    >
        Hello
        <button onClick={()=>alert('I am the Button in Portal')}>In the Success Div</button>
    </div>
  )
}

export default MessageComponent
