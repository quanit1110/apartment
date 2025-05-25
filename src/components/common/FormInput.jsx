import React from 'react'

const FormInput = ({type, label, name, placeholder}) => {
  return (
    <input type={type} label={label} name={name} placeholder={placeholder}
     className='px-3 py-3 border border[#ccc] focus:border-orange-200 
    outline-none rounded-xl m-3 transition-all focus:outline-none focus:ring-1 outline-transparent'/>
  )
}

export default FormInput