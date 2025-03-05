import React from 'react'
import './Button.css'

const Button = ({id, text, action}) => {

  return (
    <button id={id} onClick={action}>
        {text}
    </button>
  )
}

export default Button
