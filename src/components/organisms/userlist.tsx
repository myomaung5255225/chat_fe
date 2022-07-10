import React from 'react'
import { UiUserCard } from '../atoms/UiUserCard'

interface props {
  users: userProps[],
   setSelectedUser:React.Dispatch<React.SetStateAction<any>>;
   formData:any;
   setFormData:React.Dispatch<React.SetStateAction<any>>;
   changeChannel:(user:userProps)=>void;
}

export interface userProps {
  id: string
  name: string
  email: string
  photo: string
  last_seen: string,
 
}
export const Userlist: React.FC<props> = ({ users,setSelectedUser,formData,setFormData,changeChannel }) => {
  return (
    <div className='flex justify-start  content-center flex-col space-y-4 px-2 py-4'>
      {users.map((u: userProps, i: number) => (
        <UiUserCard changeChannel={changeChannel}   key={i} user={u} />
      ))}
    </div>
  )
}
