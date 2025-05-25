import React from 'react'

const ButtonCustom = ({type, text}) => {
  return (
    <button className='btn btn-primary' type={type}>{text}</button>
  )
}

export default ButtonCustom