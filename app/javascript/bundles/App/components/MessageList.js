import React from 'react'

/**
 *
 * Message List Component
 *
 * @func
 * @param {Object} props
 * @param {Array} props.messages
 * @param {Callback} props.remove
 * @param {Callback} props.edit
 * @return {ReactComponent}
 *
 * */

function MessageList({ messages, remove, edit  }){
  return (
    <div>
      <h1>Messages Added</h1>
      <ol>
        {
          messages.map((m, i) => {
            return (
            <li key={`msg-${i}`}>
              {m}
              <button onClick={() => remove(i)}>Remove</button>
              <button onClick={() => edit(i)}>Edit</button>
            </li>
            ) 
          }) 
        } 
      </ol>
    </div>
  )
}

export default MessageList
