import React from 'react'
interface props {
  
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  children:JSX.Element
}
export const UiButton: React.FC<props> = ({
  buttonProps,
  children
}) => {
  return (
    <div className='w-full'>
      <button
        className='w-full flex justify-center items-center content-center px-2 py-2 focus:outline-none appearance-none  bg-slate-600 hover:bg-slate-800 text-white '
       
        {...buttonProps}
      >
        {children}
      </button>
    </div>
  )
}