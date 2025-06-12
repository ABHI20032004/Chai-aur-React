import React from 'react'
import { UNSAFE_withComponentProps } from 'react-router-dom'

function Select({
    options,
    label,
    className,
    ...UNSAFE_withComponentProps
} , ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select {...props} id={id} ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black
        outline-none focus:bg-gray-200 w-full ${className}`}>

        </select>
    </div>
  )
}

export default Select