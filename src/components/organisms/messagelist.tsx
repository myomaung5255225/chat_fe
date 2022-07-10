import React from 'react'
import { UiMessage } from '../atoms/UiMessage'
import { userProps } from './userlist'
interface props {
  messages: messagePorps[]
}
export interface messagePorps {
  id: number
  body: string
  user_id: string
  created_at: string
  updated_at: string
  user: userProps
  photos:photoProps[]
}

interface photoProps {
  created_at: string
  id: number
  photoable_id: number
  photoable_type: string
  src: string
  updated_at: string
}
export const MessageList: React.FC<props> = ({ messages }) => {
  return (
    <div className=' overflow-y-auto px-2 py-2 chat_body'>
      {messages.map((m: messagePorps, i: number) => (
        <UiMessage key={i} message={m} />
      ))}
    </div>
  )
}
