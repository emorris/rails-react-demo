import React from 'react'

/**
 *
 * TextDisplay
 * @func
 * @param {Object} props
 * @param {String} props.text
 * @return {ReactComponent}
 *
 * */

function TextDisplay ({ text }) {
  return(
    <div>
      <h1>See the Magic</h1>
      <div>{text}</div>
    </div>
  )
}

export default TextDisplay
