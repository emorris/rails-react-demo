import React from 'react'

/**
 *
 * Message
 *
 * @func
 * @param {Object} props
 * @param {String} props.message
 * @param {Number} props.index
 * @param {Callback} props.removeFn
 * @param {Callback} props.editFn
 * @returns {ReactComponent}
 *
 * */

function Message ({ message, index, removeFn, editFn }) {
  return (
   <li>
     {message}
     <button onClick={() => removeFn(index)}>Remove</button>
     <button onClick={() => editFn(index)}>Edit</button>
   </li>
   )
}

export default Message
