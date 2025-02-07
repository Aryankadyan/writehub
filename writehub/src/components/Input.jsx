import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = "",
    ...props

}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-2 pl-2'
                htmlFor={id}>{label}</label>
                }
                <input type={type}
                className={` px-4 py-2 rounded-lg text-black outline-none focus:bg-gray-50 duration-200 border-gray-300 w-full ${className}`}
                // reference taken from user as a prop, will give reference to the parent component
                ref={ref}
                {...props}
                id={id}
                />          
        </div>
    )
})

export default Input
