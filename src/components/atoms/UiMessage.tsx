import { differenceInSeconds } from 'date-fns'
import React from 'react'
import { messagePorps } from '../organisms/messagelist'
interface props {
  message: messagePorps
}
export const UiMessage: React.FC<props> = ({ message }) => {
    const diffTime = () => {
        const dt = parseInt( (
            differenceInSeconds(new Date(), new Date(message.created_at)) / 60
          ).toFixed(0));
          if(dt>60){
            return (dt/60).toFixed(2)+" hours"
          }
          else{
            return dt.toFixed(2).toString()+" min"
          }
      }
  return (
    <div className='flex  px-2 py-2 bg-slate-100'>
      <div className='text-sm flex justify-start flex-col space-y-2 w-full px-2 py-2 text-slate-500'>
        <p className='text-sm'> {message.body} </p>
        {
         message.photos.map((p,i)=>(
            <img src={p.src} alt="img" className='w-24 h-24' key={i} />
         ))
        }
        <span className='text-xs text-yellow-500'>{diffTime() === '0 min' ? 'now' : `${diffTime()}  ago.`} </span>
      </div>
    </div>
  )
}
