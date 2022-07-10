import React, {  } from 'react'

interface props {
  formData: any
  setFormData: React.Dispatch<React.SetStateAction<any>>
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  className?:string;
}

export const UiInput: React.FC<props> = ({
  inputProps,
  formData,
  setFormData,
  className
}) => {
  return (
    <div className={`flex border-slate-800 border  ${className}`}>
      <input
        className='w-full flex justify-start bg-slate-50 items-center content-center px-2 py-2 focus:outline-none appearance-none'
        onChange={e => {
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }}
        {...inputProps}
      />
    </div>
  )
}
