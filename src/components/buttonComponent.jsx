import React from 'react'

const Button = ({text}) => {
  return (
    <button className={`bg-gradient-primary rounded px-12 py-4`}>{text}</button>
  )
}

export default Button