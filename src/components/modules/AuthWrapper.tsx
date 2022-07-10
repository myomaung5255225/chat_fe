import React from 'react';
interface props{
    children:JSX.Element
}
export const AuthWrapper:React.FC<props> =({children})=>{
    return(
        <div className='flex min-h-screen justify-center flex-col space-y-3 bg-slate-200 items-center content-center w-full'>
            <img src="/logo512.png" className='w-12 h-12' alt="" />
            <div className='w-full max-w-sm bg-slate-100 px-2 py-2 rounded-sm '>
                {children}
            </div>
        </div>
    )
}