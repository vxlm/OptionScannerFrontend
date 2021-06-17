import React from 'react'

export const Button = props => {
  const onClick = () => {
    console.log('Click')
  }
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: props.color }}
      className='btn'
    >
      {props.text}
    </button>
  )
}

export default Button
