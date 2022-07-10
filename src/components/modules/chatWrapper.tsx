import React from 'react'
import { useHistory } from 'react-router-dom'
import { API } from '../../services/api'
import { PowerIcon } from '../atoms/icons/power'
interface props {
  children: JSX.Element
}
export const ChatWrapper: React.FC<props> = ({ children }) => {
  const { push } = useHistory()
  const logoutHandler = () => {
    API.post('/auth/logout')
      .then(res => {
        if (res.data && res.data.statusCode === 200) {
          console.log(res.data)
          sessionStorage.clear()
          
          push('/')
          window.location.reload()
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div className='w-full bg-slate-200 px-2 min-h-screen fixed top-0'>
      <div className='w-full max-w-screen-2xl mx-auto px-2  bg-white'>
        <div className='w-full flex justify-end  items-center content-center'>
          <button onClick={() => logoutHandler()} className='text-red-600'>
            <PowerIcon className='w-6 h-6' />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
