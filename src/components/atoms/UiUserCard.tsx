import React from 'react'
import { userProps } from '../organisms/userlist'
import {  differenceInSeconds } from 'date-fns'

interface props {
  user: userProps,
  
  changeChannel:(user:userProps)=>void;
}
export const UiUserCard: React.FC<props> = ({ user,changeChannel }) => {
 
  const diffTime = () => {
    return (
      differenceInSeconds(new Date(), new Date(user.last_seen)) / 60
    ).toFixed(0)
  }
  const clickHandler =()=>{
    
    changeChannel(user)
   
  }
  return (
    <button onClick={()=>{clickHandler()}} className='px-2 py-2 flex flex-col justify-start content-center border-b border-blue-300 rounded-b-md bg-slate-100 hover:bg-slate-200'>
      <span className='text-sm text-indigo-600'>{user.name} </span>

      <span className='text-xs text-slate-500'>
        {diffTime() === '0' ? 'online' : `last seen ${diffTime()}min`}
      </span>
    </button>
  )
}
